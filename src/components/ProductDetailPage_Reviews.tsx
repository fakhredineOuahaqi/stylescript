'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { gsap } from 'gsap';
import { Star, ThumbsUp, MessageSquare, User, Filter, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { entities } from '@/tools/entities-proxy';
import { getuser_session } from '@/tools/SessionContext';
import type { review, review_without_PKs } from '@/server/entities.type';

// --- Types & Schemas ---

const reviewSchema = z.object({
  rating_value: z.number().min(1, 'Please select a rating').max(5),
  comment_text: z.string().min(10, 'Review must be at least 10 characters long').max(500, 'Review cannot exceed 500 characters')
});
type ReviewFormValues = z.infer<typeof reviewSchema>;
interface ReviewStats {
  average: number;
  total: number;
  counts: Record<number, number>;
}

// --- Helper Components ---

const StarRating = ({
  rating,
  size = 'sm',
  interactive = false,
  onRate
}: {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRate?: (val: number) => void;
}) => {
  const stars = [1, 2, 3, 4, 5];
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return <div className="flex gap-0.5">
      {stars.map((star, index) => <button key={star} type="button" onClick={() => interactive && onRate?.(star)} className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'} focus:outline-none`} disabled={!interactive}>
          <Star className={`${sizeClasses[size]} ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-100 text-slate-200'}`} />
        </button>)}
    </div>;
};
const ReviewCard = ({
  review
}: {
  review: review;
}) => {
  return <div className="border-b border-slate-100 py-8 last:border-0 hover:bg-slate-50/50 transition-colors rounded-lg px-4 -mx-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-slate-200">
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.user_name}`} />
            <AvatarFallback className="bg-slate-100 text-slate-600 font-medium">
              {review.user_name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">{review.user_name}</h4>
            <span className="text-xs text-slate-500">
              {new Date(review.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            </span>
          </div>
        </div>
        <StarRating rating={review.rating_value} />
      </div>
      
      <p className="text-slate-700 text-base leading-relaxed mb-4">
        {review.comment_text}
      </p>

      {/* Placeholder for helpful interaction - Logic not implemented in requirements but UI present */}
      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
        <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <ThumbsUp className="w-3.5 h-3.5" />
          Helpful
        </button>
        <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <MessageSquare className="w-3.5 h-3.5" />
          Comment
        </button>
      </div>
    </div>;
};

// --- Main Component ---

export default function ProductDetailPage_Reviews() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const [reviews, setReviews] = useState<review[]>([]);
  const [stats, setStats] = useState<ReviewStats>({
    average: 0,
    total: 0,
    counts: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
  });
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Form handling
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating_value: 0,
      comment_text: ''
    }
  });

  // Fetch Data
  const fetchReviews = async () => {
    if (!productId) return;
    try {
      setLoading(true);
      const fetchedReviews = await entities.review.GetAll({
        product_id: {
          equals: parseInt(productId)
        }
      });

      // Calculate stats
      const total = fetchedReviews.length;
      const counts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      };
      let sum = 0;
      fetchedReviews.forEach(r => {
        const rating = Math.min(Math.max(Math.round(r.rating_value), 1), 5) as 1 | 2 | 3 | 4 | 5;
        counts[rating] = (counts[rating] || 0) + 1;
        sum += r.rating_value;
      });
      const average = total > 0 ? Number((sum / total).toFixed(1)) : 0;

      // Sort by newest first
      const sortedReviews = [...fetchedReviews].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setReviews(sortedReviews);
      setStats({
        average,
        total,
        counts
      });
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      toast.error('Failed to load reviews. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, [productId]);

  // GSAP Animation
  useEffect(() => {
    if (!loading && containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.review-stat-bar', {
          width: 0,
          opacity: 0
        }, {
          width: '100%',
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out'
        });
        gsap.fromTo('.review-item', {
          y: 20,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.review-list',
            start: 'top 80%'
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [loading, reviews]);

  // Handle Write Review Click
  const handleWriteReviewClick = () => {
    const session = getuser_session();
    if (!session || !session.userId) {
      router.push('/frontendloginpage');
      return;
    }
    setIsDialogOpen(true);
  };

  // Submit Review
  const onSubmit = async (values: ReviewFormValues) => {
    if (!productId) return;
    setIsSubmitting(true);
    try {
      const session = getuser_session();
      // Double check session, though button should handle it
      if (!session || !session.userId) {
        toast.error('You must be logged in to post a review.');
        router.push('/frontendloginpage');
        return;
      }
      const newReview: review_without_PKs = {
        product_id: parseInt(productId),
        user_id: parseInt(session.userId),
        user_name: session.username || 'Anonymous Customer',
        rating_value: values.rating_value,
        comment_text: values.comment_text,
        created_at: new Date(),
        updated_at: new Date()
      };
      const result = await entities.review.Create(newReview);
      if (result) {
        toast.success('Review submitted successfully!');
        setIsDialogOpen(false);
        form.reset();
        fetchReviews(); // Refresh list
      } else {
        throw new Error('Failed to create review');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!productId) return null;
  /* Extracted array: _items */
  const _items = [5, 4, 3, 2, 1];
  return <section className="w-full bg-white border-t border-slate-100" ref={containerRef}>
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Stats & Summary */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <h2 className="text-h3 font-bold text-slate-900 mb-6">Customer Reviews</h2>
              
              {loading ? <div className="space-y-4">
                   <Skeleton className="h-24 w-full rounded-lg" />
                   <Skeleton className="h-4 w-3/4" />
                   <Skeleton className="h-4 w-1/2" />
                 </div> : <>
                  <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl font-bold text-slate-900 tracking-tight">
                        {stats.average}
                      </div>
                      <div className="space-y-1">
                        <StarRating rating={Math.round(stats.average)} size="md" />
                        <p className="text-sm text-slate-500 font-medium">
                          Based on {stats.total} reviews
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {_items.map((star, index) => {
                    const count = stats.counts[star as 1 | 2 | 3 | 4 | 5] || 0;
                    const percentage = stats.total > 0 ? count / stats.total * 100 : 0;
                    return <div key={star} className="flex items-center gap-3 text-sm">
                            <span className="w-3 font-semibold text-slate-700">{star}</span>
                            <Star className="w-3 h-3 text-slate-400 fill-slate-300" />
                            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="review-stat-bar h-full bg-slate-900 rounded-full" style={{
                          width: `${percentage}%`
                        }} />
                            </div>
                            <span className="w-8 text-right text-slate-500 text-xs">{percentage.toFixed(0)}%</span>
                          </div>;
                  })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-slate-600 text-sm leading-relaxed mb-6">
                      Share your thoughts with other customers. Your feedback helps us improve and helps others make better choices.
                    </div>
                    
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button onClick={e => {
                      e.preventDefault();
                      handleWriteReviewClick();
                    }} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 text-base shadow-lg shadow-slate-900/10 transition-all hover:shadow-slate-900/20">
                          Write a Review
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] bg-white border-slate-200">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-slate-900">Write a Review</DialogTitle>
                          <DialogDescription className="text-slate-500">
                            How was your experience with this product?
                          </DialogDescription>
                        </DialogHeader>
                        
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-900">Rating</label>
                            <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                              <StarRating rating={form.watch('rating_value')} size="lg" interactive onRate={val => form.setValue('rating_value', val, {
                            shouldValidate: true
                          })} />
                            </div>
                            {form.formState.errors.rating_value && <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {form.formState.errors.rating_value.message}
                              </p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-900">Your Review</label>
                            <Textarea placeholder="Tell us what you liked or didn't like about this product..." className="min-h-[120px] resize-none bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" {...form.register('comment_text')} />
                             {form.formState.errors.comment_text && <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {form.formState.errors.comment_text.message}
                              </p>}
                          </div>

                          <DialogFooter className="gap-2 sm:gap-0">
                            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button type="submit" className="bg-slate-900 text-white hover:bg-slate-800" disabled={isSubmitting}>
                              {isSubmitting ? 'Submitting...' : 'Submit Review'}
                            </Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </>}
            </div>
          </div>

          {/* Right Column: Review List */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">
                {stats.total} {stats.total === 1 ? 'Review' : 'Reviews'}
              </h3>
              
              <div className="flex items-center gap-2">
                 <span className="text-sm text-slate-500 hidden sm:inline-block">Sort by:</span>
                 <Select defaultValue="newest">
                  <SelectTrigger className="w-[140px] h-9 text-sm border-slate-200 bg-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="highest">Highest Rating</SelectItem>
                    <SelectItem value="lowest">Lowest Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="review-list space-y-2 min-h-[400px]">
              {loading ? Array.from({
              length: 3
            }).map((_, index) => <div key={index} className="py-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                    <Skeleton className="h-16 w-full" />
                  </div>) : reviews.length > 0 ? reviews.map((review, index) => <div key={review.id} className="review-item">
                    <ReviewCard review={review} />
                  </div>) : <div className="flex flex-col items-center justify-center py-16 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <MessageSquare className="w-12 h-12 text-slate-300 mb-4" />
                  <h4 className="text-base font-semibold text-slate-900 mb-2">No reviews yet</h4>
                  <p className="text-slate-500 max-w-xs mx-auto mb-6">
                    Be the first to share your thoughts on this product.
                  </p>
                  <Button variant="outline" onClick={handleWriteReviewClick} className="border-slate-300 text-slate-700 hover:bg-white hover:text-slate-900">
                    Write a Review
                  </Button>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
