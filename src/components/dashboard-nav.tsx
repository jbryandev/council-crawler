'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type SidebarNavItem } from '@/types';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className='grid items-start gap-2'>
      {items.map((item) => {
        const Icon = Icons[item.icon || 'arrowRight'];
        return (
          <Link
            key={item.href}
            href={item.href ?? '/'}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              pathname === item.href
                ? 'bg-muted hover:bg-muted'
                : 'hover:bg-muted',
              'justify-start'
            )}
          >
            <Icon className='mr-2 h-4 w-4' />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
