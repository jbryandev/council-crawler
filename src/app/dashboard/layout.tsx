import Link from 'next/link';

import { DashboardNav } from '@/components/dashboard-nav';
import { Icons } from '@/components/icons';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { SiteFooter } from '@/components/site-footer';
import { UserAccountNav } from '@/components/user-account-nav';
import { dashboardConfig } from '@/config/dashboard';
import { siteConfig } from '@/config/site';
import { user } from '@/lib/data';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col space-y-6'>
      <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
        <div className='container flex h-14 items-center space-x-10'>
          <Link href='/' className='hidden items-center space-x-2 lg:flex'>
            <Icons.logo />
            <span className='hidden font-bold sm:inline-block'>
              {siteConfig.name}
            </span>
          </Link>
          <MobileNav items={dashboardConfig.sidebarNavItems} />
          <div className='flex flex-1 items-center justify-end space-x-2 sm:space-x-4'>
            <nav className='flex items-center space-x-2'>
              <ModeToggle />
              <UserAccountNav
                user={{
                  name: user.name,
                  image: user.image,
                  email: user.email,
                }}
              />
            </nav>
          </div>
        </div>
      </header>
      <div className='container grid flex-1 gap-12 lg:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] flex-col lg:flex'>
          <DashboardNav items={dashboardConfig.sidebarNavItems} />
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
