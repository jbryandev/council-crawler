import Link from 'next/link';

import { Icons } from '@/components/icons';
import { MainNav } from '@/components/layouts/main-nav';
import { MobileNav } from '@/components/layouts/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { UserAccountNav } from '@/components/user-account-nav';
import { siteConfig } from '@/config/site';
import { type MainNavItem, type MobileNavItem, type User } from '@/types';

interface SiteHeaderProps {
  user: User | null;
  mainNavItems?: MainNavItem[];
  mobileNavItems?: MobileNavItem[];
}

export default function SiteHeader({
  user,
  mainNavItems,
  mobileNavItems,
}: SiteHeaderProps) {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-14 items-center'>
        <Link href='/' className='mr-10 hidden items-center space-x-2 lg:flex'>
          <Icons.logo />
          <span className='hidden font-bold sm:inline-block'>
            {siteConfig.name}
          </span>
        </Link>
        {mainNavItems && <MainNav items={mainNavItems} />}
        {mobileNavItems && <MobileNav items={mobileNavItems} />}
        <div className='flex flex-1 items-center justify-end space-x-2 sm:space-x-4'>
          <nav className='flex items-center space-x-2'>
            <ThemeToggle />
            {user ? (
              <UserAccountNav user={user} />
            ) : (
              <Link href={'/dashboard'}>
                <Button variant={'ghost'} size={'icon'} className='w-full p-4'>
                  Sign In
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
