'use client';

import React from 'react';
import UserProfilePage_Header from '@/components/UserProfilePage_Header';
import UserProfilePage_PersonalDetails from '@/components/UserProfilePage_PersonalDetails';
import UserProfilePage_AddressBook from '@/components/UserProfilePage_AddressBook';
export default function UserProfilePage() {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative">
        <UserProfilePage_Header />
      </section>
      <section className="w-full relative bg-white">
        <UserProfilePage_PersonalDetails />
      </section>
      <section className="w-full relative bg-white">
        <UserProfilePage_AddressBook />
      </section>
    </main>;
}
