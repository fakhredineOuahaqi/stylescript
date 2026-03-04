'use client';

import React, { useState, useEffect } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, MapPin, Check, Loader2, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { entities } from '@/tools/entities-proxy';
import { getuser_session } from '@/tools/SessionContext';
import type { user_address, user_address_without_PKs } from '@/server/entities.type';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';

// --- Zod Schema ---
const addressSchema = z.object({
  recipient_name: z.string().min(1, 'Recipient name is required'),
  phone_number: z.string().min(1, 'Phone number is required'),
  address_line_1: z.string().min(1, 'Address line 1 is required'),
  address_line_2: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  postal_code: z.string().optional(),
  zip_code: z.string().optional(),
  is_default: z.boolean().default(false)
});
type AddressFormValues = z.infer<typeof addressSchema>;

// --- Component ---
export default function UserProfilePage_AddressBook() {
  const router = useRouter();
  const [addresses, setAddresses] = useState<user_address[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<user_address | null>(null);

  // --- Form Setup ---
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema) as Resolver<AddressFormValues>,
    defaultValues: {
      recipient_name: '',
      phone_number: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      postal_code: '',
      zip_code: '',
      is_default: false
    }
  });

  // --- Data Fetching ---
  const fetchAddresses = async () => {
    setIsLoading(true);
    try {
      const session = getuser_session();
      if (!session || !session.userId) {
        // Redirect or handle unauthorized state if this component is used in a protected route
        toast.error('Please log in to view your addresses.');
        setIsLoading(false);
        return;
      }
      const userId = parseInt(session.userId, 10);
      if (isNaN(userId)) {
        toast.error('Invalid user session.');
        setIsLoading(false);
        return;
      }
      const result = await entities.user_address.GetAll({
        user_id: {
          equals: userId
        }
      });

      // Sort: Default address first, then by updated_at desc
      const sorted = (result || []).sort((a, b) => {
        if (a.is_default === b.is_default) {
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        }
        return a.is_default ? -1 : 1;
      });
      setAddresses(sorted);
    } catch (error) {
      console.error('Failed to fetch addresses:', error);
      toast.error('Failed to load addresses. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAddresses();
  }, []);

  // --- Handlers ---
  const handleOpenDialog = (address?: user_address) => {
    if (address) {
      setEditingAddress(address);
      form.reset({
        recipient_name: address.recipient_name,
        phone_number: address.phone_number,
        address_line_1: address.address_line_1,
        address_line_2: address.address_line_2 || '',
        city: address.city,
        postal_code: address.postal_code || '',
        zip_code: address.zip_code || '',
        is_default: address.is_default
      });
    } else {
      setEditingAddress(null);
      form.reset({
        recipient_name: '',
        phone_number: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        postal_code: '',
        zip_code: '',
        is_default: false
      });
    }
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingAddress(null);
    form.reset();
  };
  const onSubmit = async (data: AddressFormValues) => {
    setIsSubmitLoading(true);
    try {
      const session = getuser_session();
      if (!session || !session.userId) {
        toast.error('Session expired. Please log in again.');
        return;
      }
      const userId = parseInt(session.userId, 10);

      // If setting as default, we might need to unset previous default
      // Note: A real backend might handle this automatically in a transaction. 
      // Here we trust the backend or handle it if necessary. 
      // Ideally, the backend service ensures only one default per user.

      const payload: user_address_without_PKs = {
        user_id: userId,
        recipient_name: data.recipient_name,
        phone_number: data.phone_number,
        address_line_1: data.address_line_1,
        address_line_2: data.address_line_2 || null,
        city: data.city,
        postal_code: data.postal_code || null,
        zip_code: data.zip_code || null,
        is_default: data.is_default,
        created_at: editingAddress ? editingAddress.created_at : new Date(),
        updated_at: new Date()
      };
      if (editingAddress) {
        await entities.user_address.Update({
          where: {
            id: editingAddress.id
          },
          data: payload
        });
        toast.success('Address updated successfully');
      } else {
        await entities.user_address.Create(payload);
        toast.success('Address added successfully');
      }
      handleCloseDialog();
      fetchAddresses();
    } catch (error) {
      console.error('Operation failed:', error);
      toast.error(editingAddress ? 'Failed to update address' : 'Failed to create address');
    } finally {
      setIsSubmitLoading(false);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await entities.user_address.Delete({
        id
      });
      toast.success('Address deleted successfully');
      fetchAddresses();
    } catch (error) {
      console.error('Delete failed:', error);
      toast.error('Failed to delete address');
    }
  };
  const handleSetDefault = async (address: user_address) => {
    if (address.is_default) return;

    // Optimistic UI update could be done here, but sticking to safe fetch for now
    try {
      // First, fetch all addresses to find the current default and unset it (if backend doesn't handle)
      // Assuming simplistic backend: update current to default true.
      // A robust backend would unset others. If not, we'd loop and update here.
      // Let's assume we update specific record.
      const session = getuser_session();
      if (!session || !session.userId) return;

      // Update the selected address to be default
      await entities.user_address.Update({
        where: {
          id: address.id
        },
        data: {
          ...address,
          is_default: true,
          updated_at: new Date()
        }
      });

      // We should ideally unset others if the backend doesn't trigger it.
      // For this implementation, we re-fetch to sync state.
      toast.success('Default address updated');
      fetchAddresses();
    } catch (error) {
      console.error('Set default failed:', error);
      toast.error('Failed to set default address');
    }
  };
  /* Extracted array: _items */
  const _items = [1, 2, 3];
  return <div className="w-full bg-slate-50 min-h-[600px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-h1 text-slate-900 font-semibold tracking-tight">Address Book</h1>
            <p className="text-secondary text-slate-500 mt-1">
              Manage your shipping addresses for a faster checkout experience.
            </p>
          </div>
          <Button onClick={() => handleOpenDialog()} className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all duration-200">
            <Plus className="w-4 h-4 mr-2" />
            Add New Address
          </Button>
        </div>

        {/* Content Section */}
        {isLoading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_items.map((i, index) => <Card key={i} className="h-48 animate-pulse bg-white/50 border-slate-200 shadow-sm" />)}
          </div> : addresses.length === 0 ? <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl border border-slate-200 border-dashed">
            <div className="bg-slate-50 p-4 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-h3 text-slate-900 font-medium mb-2">No addresses found</h3>
            <p className="text-secondary text-slate-500 max-w-sm text-center mb-6">
              You haven't added any shipping addresses yet. Add one to speed up your checkout process.
            </p>
            <Button onClick={() => handleOpenDialog()} variant="outline" className="border-slate-200 hover:bg-slate-50 text-slate-900">
              Add Your First Address
            </Button>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addresses.map((addr, index) => <Card key={addr.id} className={`group relative flex flex-col justify-between transition-all duration-200 hover:shadow-md border-slate-200 bg-white ${addr.is_default ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                       <div className={`p-2 rounded-lg ${addr.is_default ? 'bg-blue-50' : 'bg-slate-100'}`}>
                          <Home className={`w-4 h-4 ${addr.is_default ? 'text-blue-600' : 'text-slate-500'}`} />
                       </div>
                       {addr.is_default && <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                          Default
                        </span>}
                    </div>
                  </div>
                  <CardTitle className="text-h3 font-semibold text-slate-900 leading-tight">
                    {addr.recipient_name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-4">
                  <div className="space-y-1.5 text-secondary text-slate-600 text-sm">
                    <p>{addr.phone_number}</p>
                    <p>{addr.address_line_1}</p>
                    {addr.address_line_2 && <p>{addr.address_line_2}</p>}
                    <p>
                      {addr.city}
                      {(addr.postal_code || addr.zip_code) && `, ${addr.postal_code || addr.zip_code}`}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center rounded-b-xl">
                    {!addr.is_default ? <Button variant="ghost" size="sm" className="text-xs h-8 text-slate-500 hover:text-blue-600 hover:bg-blue-50 px-2" onClick={() => handleSetDefault(addr)}>
                         Set as Default
                       </Button> : <span className="text-xs text-blue-600 font-medium px-2 py-1">Primary Address</span>}

                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900 hover:bg-slate-100" onClick={() => handleOpenDialog(addr)}>
                        <Pencil className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white border-slate-200">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-slate-900">Delete Address?</AlertDialogTitle>
                            <AlertDialogDescription className="text-slate-500">
                              Are you sure you want to delete this address? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="border-slate-200 text-slate-700">Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(addr.id)} className="bg-red-600 hover:bg-red-700 text-white">
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                </CardFooter>
              </Card>)}
          </div>}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={open => !open && handleCloseDialog()}>
        <DialogContent className="sm:max-w-[600px] bg-white p-0 overflow-hidden border-slate-200 shadow-2xl rounded-xl">
          <DialogHeader className="px-6 py-6 bg-slate-50 border-b border-slate-100">
            <DialogTitle className="text-xl font-semibold text-slate-900">
              {editingAddress ? 'Edit Address' : 'Add New Address'}
            </DialogTitle>
            <DialogDescription className="text-slate-500">
              {editingAddress ? 'Update your shipping details below.' : 'Please enter your shipping details below.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="px-6 py-6">
            <form id="address-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="recipient_name" className="text-sm font-medium text-slate-700">Full Name</Label>
                  <Input id="recipient_name" placeholder="e.g. John Doe" {...form.register('recipient_name')} className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
                  {form.formState.errors.recipient_name && <p className="text-xs text-red-500">{form.formState.errors.recipient_name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone_number" className="text-sm font-medium text-slate-700">Phone Number</Label>
                  <Input id="phone_number" placeholder="e.g. +212 600-000000" {...form.register('phone_number')} className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
                  {form.formState.errors.phone_number && <p className="text-xs text-red-500">{form.formState.errors.phone_number.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address_line_1" className="text-sm font-medium text-slate-700">Address Line 1</Label>
                <Input id="address_line_1" placeholder="Street address, P.O. box, company name" {...form.register('address_line_1')} className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
                {form.formState.errors.address_line_1 && <p className="text-xs text-red-500">{form.formState.errors.address_line_1.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address_line_2" className="text-sm font-medium text-slate-700">Address Line 2 (Optional)</Label>
                <Input id="address_line_2" placeholder="Apartment, suite, unit, building, floor, etc." {...form.register('address_line_2')} className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <div className="col-span-2 md:col-span-1 space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium text-slate-700">City</Label>
                  <Input id="city" placeholder="e.g. Casablanca" {...form.register('city')} className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
                  {form.formState.errors.city && <p className="text-xs text-red-500">{form.formState.errors.city.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="postal_code" className="text-sm font-medium text-slate-700">Postal Code</Label>
                  <Input id="postal_code" placeholder="e.g. 20000" {...form.register('postal_code')} className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zip_code" className="text-sm font-medium text-slate-700">Zip Code</Label>
                  <Input id="zip_code" placeholder="Optional" {...form.register('zip_code')} className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                 <Checkbox id="is_default" checked={form.watch('is_default')} onCheckedChange={checked => form.setValue('is_default', checked as boolean)} className="border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                 <Label htmlFor="is_default" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 cursor-pointer select-none">
                   Set as default shipping address
                 </Label>
              </div>
            </form>
          </div>

          <DialogFooter className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col-reverse sm:flex-row gap-2">
            <Button type="button" variant="outline" onClick={handleCloseDialog} disabled={isSubmitLoading} className="border-slate-200 text-slate-700 hover:bg-white">
              Cancel
            </Button>
            <Button type="submit" form="address-form" disabled={isSubmitLoading} className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm min-w-[100px]">
              {isSubmitLoading ? <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </> : 'Save Address'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>;
}
