import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { agencies, agendas } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { type Agency } from '@/types';

type AgendaCardProps = {
  href: string;
  date: string;
  agency: string;
};

const AgendaCard = ({ href, date, agency }: AgendaCardProps) => {
  return (
    <Link href={href}>
      <Card key={href} className='transition-colors hover:bg-accent'>
        <CardHeader>
          <CardTitle className='flex items-center space-x-1'>
            <Icons.calendar className='h-4 w-4' />
            <span>{date}</span>
          </CardTitle>
          <CardDescription className='line-clamp-1'>{agency}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default function RecentAgendas() {
  return (
    <>
      <div className='flex items-center justify-between pb-4'>
        <h3 className='scroll-m-20 px-2 text-2xl font-semibold tracking-tight'>
          Recent Agendas
        </h3>
        <Link
          href='/agendas'
          className='flex flex-none items-center justify-end'
        >
          <Button variant={'ghost'}>
            View all agendas
            <Icons.arrowRight className='ml-1 h-4 w-4' />
          </Button>
        </Link>
      </div>
      <div className='lg: grid gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {agendas
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .slice(0, 6)
          .map((agenda) => {
            const agency: Agency = agencies.find(
              (agency) => agency.id === agenda.agencyId
            ) ?? { id: 0, name: 'Unknown Agency', slug: 'unknown-agency' };
            return (
              <AgendaCard
                key={agenda.url}
                href={'#'}
                date={formatDate(agenda.date)}
                agency={agency?.name}
              />
            );
          })}
      </div>
    </>
  );
}
