import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t py-6 md:py-0'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <div className='flex items-center gap-4 text-sm text-muted-foreground md:flex-row md:gap-2 md:px-0'>
          <Icons.logo className='h-6 w-6' />
          Copyright &copy; {currentYear}. All rights reserved.
          <Separator orientation='vertical' className='h-6 selection:mx-2' />
          <Link href='#' className='font-medium underline underline-offset-4'>
            Privacy Policy
          </Link>
          <Separator orientation='vertical' className='h-6 selection:mx-2' />
          <Link href='#' className='font-medium underline underline-offset-4'>
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
