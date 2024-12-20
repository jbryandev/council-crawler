import { CardSkeleton } from '@/components/card-skeleton';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading='Settings' text='Manage website settings.' />
      <div className='grid gap-10'>
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
