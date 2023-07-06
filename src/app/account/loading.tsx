import { CardSkeleton } from '@/components/card-skeleton';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';

export default function AccountLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading='Account' text='Manage account settings.' />
      <div className='grid gap-10'>
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
