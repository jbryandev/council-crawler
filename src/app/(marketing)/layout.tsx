import Link from 'next/link';

import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { marketingConfig } from '@/config/marketing';
import { siteConfig } from '@/config/site';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
        <div className='container flex h-14 items-center space-x-10'>
          <Link href='/' className='hidden items-center space-x-2 lg:flex'>
            <Icons.logo />
            <span className='hidden font-bold sm:inline-block'>
              {siteConfig.name}
            </span>
          </Link>
          <MainNav items={marketingConfig.mainNav} />
          <MobileNav items={marketingConfig.sidebarNavItems} />
          <div className='flex flex-1 items-center justify-end space-x-2 sm:space-x-4'>
            <nav className='flex items-center space-x-2'>
              <ModeToggle />
              <Link href={'/dashboard'}>
                <Button variant={'outline'} size={'icon'} className='w-20'>
                  Sign In
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className='container relative flex-1 pb-10'>{children}</div>
      <SiteFooter />
    </div>
  );
}
