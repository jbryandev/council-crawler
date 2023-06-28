import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-14 items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-end space-x-2 sm:space-x-4'>
          <nav className='flex items-center space-x-2'>
            <Button variant={'ghost'} size={'icon'} className='rounded-full'>
              <Avatar>
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
