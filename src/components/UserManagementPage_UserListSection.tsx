'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Plus, MoreHorizontal, Filter, Shield, User, Ban, Trash2, Edit, Loader2, AlertCircle, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CryptoJS from 'crypto-js';
import type { user, user_role, user_status, user_without_PKs } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';

// --- Types & Schemas ---

const userFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  }).optional(),
  role: z.enum(['customer', 'admin', 'super_admin'] as const),
  status: z.enum(['active', 'suspended', 'deleted'] as const),
  phone_number: z.string().optional(),
  avatar_url: z.string().optional()
});
type UserFormValues = z.infer<typeof userFormSchema>;

// --- Components ---

export default function UserManagementPage_UserListSection() {
  const router = useRouter();
  const [users, setUsers] = useState<user[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<user_role | 'all'>('all');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<user | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initial Data Fetch
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const session = getadmin_session();
      if (!session || !session.token) {
        toast.error('Unauthorized access');
        return;
      }

      // Build filters
      const filters: any = {};
      if (searchQuery) {
        filters.username = {
          contains: searchQuery
        };
        // Note: Simple OR logic might need backend support, here we strictly filter by username for simplicity 
        // or we could fetch all and filter client side if dataset is small, 
        // but strict implementation requires backend support for OR. 
        // Assuming strict field filtering for now based on types provided.
      }
      if (roleFilter !== 'all') {
        filters.role = {
          equals: roleFilter
        };
      }
      const response = await entities.user.GetAll(Object.keys(filters).length ? filters : undefined);
      setUsers(response || []);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      toast.error('Failed to load user list');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [searchQuery, roleFilter]);

  // --- Handlers ---

  const handleCreateUser = async (values: UserFormValues) => {
    setIsSubmitting(true);
    try {
      const session = getadmin_session();
      if (!session?.token) throw new Error('Unauthorized');
      const hashedPassword = values.password ? CryptoJS.SHA256(values.password).toString() : CryptoJS.SHA256('DefaultPass123!').toString(); // Fallback default

      const newUser: user_without_PKs = {
        username: values.username,
        email: values.email,
        password: hashedPassword,
        role: values.role,
        status: values.status,
        phone_number: values.phone_number || null,
        avatar_url: values.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${values.username}`,
        created_at: new Date(),
        updated_at: new Date()
      };
      await entities.user.Create(newUser);
      toast.success('User created successfully');
      setIsAddUserOpen(false);
      fetchUsers();
    } catch (error) {
      console.error(error);
      toast.error('Failed to create user');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleUpdateUser = async (values: UserFormValues) => {
    if (!currentUser) return;
    setIsSubmitting(true);
    try {
      const session = getadmin_session();
      if (!session?.token) throw new Error('Unauthorized');
      const updateData: Partial<user_without_PKs> = {
        username: values.username,
        email: values.email,
        role: values.role,
        status: values.status,
        phone_number: values.phone_number || null,
        updated_at: new Date()
      };

      // Only update password if provided
      if (values.password && values.password.length >= 6) {
        updateData.password = CryptoJS.SHA256(values.password).toString();
      }

      // We need to fetch the full user object to satisfy the strict type requirement of Update
      // Or we assume the current object + updates is enough. 
      // The provided Update signature asks for user_without_PKs which implies a full replace or backend handles partials.
      // Usually generic update takes partial, but types say `data: user_without_PKs`. 
      // We will merge current user data with updates to be safe.

      const mergedData: user_without_PKs = {
        ...currentUser,
        // spread existing
        ...updateData,
        // overwrite with new
        password: updateData.password || currentUser.password // preserve pass if not changed
      };
      await entities.user.Update({
        where: {
          id: currentUser.id
        },
        data: mergedData
      });
      toast.success('User updated successfully');
      setIsEditDrawerOpen(false);
      setCurrentUser(null);
      fetchUsers();
    } catch (error) {
      console.error(error);
      toast.error('Failed to update user');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleStatusChange = async (user: user, newStatus: user_status) => {
    try {
      const session = getadmin_session();
      if (!session?.token) return;

      // Optimistic update
      setUsers(prev => prev.map((u, index) => u.id === user.id ? {
        ...u,
        status: newStatus
      } : u));
      await entities.user.Update({
        where: {
          id: user.id
        },
        data: {
          ...user,
          status: newStatus,
          updated_at: new Date()
        }
      });
      toast.success(`User status updated to ${newStatus}`);
    } catch (error) {
      console.error(error);
      toast.error('Failed to update status');
      fetchUsers(); // Revert on error
    }
  };
  const handleDeleteUser = async (id: number) => {
    try {
      const session = getadmin_session();
      if (!session?.token) return;
      await entities.user.Delete({
        id
      });
      setUsers(prev => prev.filter(u => u.id !== id));
      toast.success('User deleted successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete user');
    }
  };
  const navigateToOrders = (userId: number) => {
    router.push(`/ordermanagementpage?user_id=${userId}`);
  };

  // --- Render Helpers ---

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 border-emerald-200">Active</Badge>;
      case 'suspended':
        return <Badge className="bg-amber-500/15 text-amber-700 hover:bg-amber-500/25 border-amber-200">Suspended</Badge>;
      case 'deleted':
        return <Badge className="bg-red-500/15 text-red-700 hover:bg-red-500/25 border-red-200">Deleted</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super_admin':
        return <Shield className="w-4 h-4 text-purple-600 mr-2" />;
      case 'admin':
        return <Shield className="w-4 h-4 text-blue-600 mr-2" />;
      default:
        return <User className="w-4 h-4 text-slate-500 mr-2" />;
    }
  };
  return <div className="w-full bg-slate-50 min-h-screen">
      <div className="container mx-auto px-8 py-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-h2 font-bold text-slate-900">User Management</h1>
            <p className="text-caption text-slate-500 mt-1">Manage user access, roles, and account statuses.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button onClick={() => setIsAddUserOpen(true)} className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 transition-all">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        {/* Filters & Actions Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder="Search by username..." className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">Role:</span>
            </div>
            <Select value={roleFilter} onValueChange={(v: any) => setRoleFilter(v)}>
              <SelectTrigger className="w-[180px] border-slate-200">
                <SelectValue placeholder="All Roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="super_admin">Super Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-b border-slate-100 hover:bg-transparent">
                <TableHead className="w-[250px] font-semibold text-slate-900">User</TableHead>
                <TableHead className="font-semibold text-slate-900">Role</TableHead>
                <TableHead className="font-semibold text-slate-900">Status</TableHead>
                <TableHead className="font-semibold text-slate-900">Created At</TableHead>
                <TableHead className="text-right font-semibold text-slate-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? <TableRow>
                  <TableCell colSpan={5} className="h-48 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-500">
                      <Loader2 className="w-8 h-8 animate-spin mb-2 text-blue-500" />
                      <p>Loading users...</p>
                    </div>
                  </TableCell>
                </TableRow> : users.length === 0 ? <TableRow>
                  <TableCell colSpan={5} className="h-48 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <User className="w-12 h-12 mb-2 opacity-20" />
                      <p>No users found matching your criteria.</p>
                    </div>
                  </TableCell>
                </TableRow> : users.map((user, index) => <TableRow key={user.id} className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-0">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 border border-slate-200">
                          <AvatarImage src={user.avatar_url || ''} alt={user.username} />
                          <AvatarFallback className="bg-slate-100 text-slate-600 font-medium">
                            {user.username.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900">{user.username}</span>
                          <span className="text-xs text-slate-500">{user.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getRoleIcon(user.role)}
                        <span className="text-sm capitalize text-slate-700">{user.role.replace('_', ' ')}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(user.status)}
                    </TableCell>
                    <TableCell className="text-slate-500 text-sm">
                      {new Date(user.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-100 text-slate-500">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[180px]">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => {
                      setCurrentUser(user);
                      setIsEditDrawerOpen(true);
                    }}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => navigateToOrders(user.id)}>
                            <ShoppingBag className="mr-2 h-4 w-4" />
                            View Orders
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {user.status === 'active' ? <DropdownMenuItem className="text-amber-600 focus:text-amber-700 focus:bg-amber-50" onClick={() => handleStatusChange(user, 'suspended')}>
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend User
                            </DropdownMenuItem> : <DropdownMenuItem className="text-emerald-600 focus:text-emerald-700 focus:bg-emerald-50" onClick={() => handleStatusChange(user, 'active')}>
                              <Shield className="mr-2 h-4 w-4" />
                              Activate User
                            </DropdownMenuItem>}
                          <Popover>
                            <PopoverTrigger asChild>
                              <DropdownMenuItem className="text-red-600 focus:text-red-700 focus:bg-red-50" onSelect={e => e.preventDefault()}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete User
                              </DropdownMenuItem>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="grid gap-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium leading-none text-red-600 flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4" /> Confirm Deletion
                                  </h4>
                                  <p className="text-sm text-slate-500">
                                    Are you sure you want to delete user <b>{user.username}</b>? This action cannot be undone.
                                  </p>
                                </div>
                                <div className="flex justify-end gap-2">
                                  <Button variant="outline" size="sm" onClick={() => document.body.click()} // Close popover hack or use state
                           >
                                    Cancel
                                  </Button>
                                  <Button variant="destructive" size="sm" onClick={() => handleDeleteUser(user.id)}>
                                    Confirm Delete
                                  </Button>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>)}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Add User Modal */}
      <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Create a new account. Fill in the required details below.
            </DialogDescription>
          </DialogHeader>
          <UserForm onSubmit={handleCreateUser} isSubmitting={isSubmitting} mode="create" />
        </DialogContent>
      </Dialog>

      {/* Edit User Drawer */}
      <Sheet open={isEditDrawerOpen} onOpenChange={setIsEditDrawerOpen}>
        <SheetContent className="sm:max-w-[500px]">
          <SheetHeader>
            <SheetTitle>Edit User Profile</SheetTitle>
            <SheetDescription>
              Make changes to user profile and permissions here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="py-6">
            {currentUser && <UserForm defaultValues={currentUser} onSubmit={handleUpdateUser} isSubmitting={isSubmitting} mode="edit" />}
          </div>
        </SheetContent>
      </Sheet>

    </div>;
}

// --- Sub-Component: User Form ---

interface UserFormProps {
  defaultValues?: Partial<user>;
  onSubmit: (values: UserFormValues) => void;
  isSubmitting: boolean;
  mode: 'create' | 'edit';
}
function UserForm({
  defaultValues,
  onSubmit,
  isSubmitting,
  mode
}: UserFormProps) {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      username: defaultValues?.username || '',
      email: defaultValues?.email || '',
      role: defaultValues?.role || 'customer',
      status: defaultValues?.status || 'active',
      phone_number: defaultValues?.phone_number || '',
      password: '' // Always empty for security
    }
  });
  return <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 col-span-2">
          <label className="text-caption font-medium">Username</label>
          <Input placeholder="johndoe" {...form.register('username')} />
          {form.formState.errors.username && <p className="text-xs text-red-500">{form.formState.errors.username.message}</p>}
        </div>
        
        <div className="space-y-2 col-span-2">
          <label className="text-caption font-medium">Email Address</label>
          <Input placeholder="john@example.com" type="email" {...form.register('email')} />
          {form.formState.errors.email && <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>}
        </div>

        <div className="space-y-2 col-span-1">
          <label className="text-caption font-medium">Role</label>
          <Select onValueChange={val => form.setValue('role', val as any)} defaultValue={form.getValues('role')}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="super_admin">Super Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 col-span-1">
          <label className="text-caption font-medium">Status</label>
          <Select onValueChange={val => form.setValue('status', val as any)} defaultValue={form.getValues('status')}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
              <SelectItem value="deleted">Deleted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 col-span-2">
          <label className="text-caption font-medium">Password {mode === 'edit' && '(Leave blank to keep current)'}</label>
          <Input type="password" placeholder={mode === 'create' ? "Set a strong password" : "New password (optional)"} {...form.register('password')} />
           {form.formState.errors.password && <p className="text-xs text-red-500">{form.formState.errors.password.message}</p>}
        </div>
      </div>

      <DialogFooter className="pt-4">
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-slate-900 text-white">
          {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {mode === 'create' ? 'Create User' : 'Save Changes'}
        </Button>
      </DialogFooter>
    </form>;
}
