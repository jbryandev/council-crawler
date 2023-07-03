'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { type MainNavItem } from '@/types';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items }: MainNavProps) {
  const path = usePathname();

  return (
    <div className='flex gap-6 lg:gap-10'>
      {items?.length ? (
        <nav className='hidden gap-6 lg:flex'>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`${path}`)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
