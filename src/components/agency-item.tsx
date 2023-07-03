import Link from 'next/link';
// import { Post } from '@prisma/client';

import { AgencyOperations } from '@/components/agency-operations';
import { Skeleton } from '@/components/ui/skeleton';
import { type Agency } from '@/types';

interface AgencyItemProps {
  agency: Pick<Agency, 'id' | 'fullName' | 'slug' | 'url'>;
}

export function AgencyItem({ agency }: AgencyItemProps) {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='grid gap-1'>
        <Link
          // href={`/editor/${agency.id}`}
          href={`#`}
          className='font-semibold hover:underline'
        >
          {agency.fullName}
        </Link>
        <div>
          <p className='text-sm text-muted-foreground'>
            {'/'}
            {agency.slug}
          </p>
        </div>
      </div>
      <AgencyOperations agency={{ id: agency.id }} />
    </div>
  );
}

AgencyItem.Skeleton = function AgencyItemSkeleton() {
  return (
    <div className='p-4'>
      <div className='space-y-3'>
        <Skeleton className='h-5 w-2/5' />
        <Skeleton className='h-4 w-4/5' />
      </div>
    </div>
  );
};
