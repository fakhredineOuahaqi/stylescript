'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getadmin_session } from '@/tools/SessionContext';

export default function BackendAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const session = getadmin_session();
    if (!session?.token) {
      const redirect = encodeURIComponent(pathname || '/');
      router.replace(`/backendloginpage?redirect=${redirect}`);
    }
  }, [pathname, router]);

  return children;
}