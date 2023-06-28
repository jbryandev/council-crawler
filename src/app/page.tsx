import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import RecentAgendas from '@/components/recent-agendas';
import { Separator } from '@/components/ui/separator';

export default function Page() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Council Crawler</PageHeaderHeading>
        <PageHeaderDescription>
          Tracking your favorite council agendas so you don&apos;t have to
        </PageHeaderDescription>
      </PageHeader>
      <Separator className='my-8' />
      <RecentAgendas />
    </>
  );
}
