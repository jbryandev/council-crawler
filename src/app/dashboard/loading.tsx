import { AgencyCreateButton } from '@/components/agency-create-button';
import { AgencyItem } from '@/components/agency-item';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading='Posts' text='Create and manage posts.'>
        <AgencyCreateButton />
      </DashboardHeader>
      <div className='divide-border-200 divide-y rounded-md border'>
        <AgencyItem.Skeleton />
        <AgencyItem.Skeleton />
        <AgencyItem.Skeleton />
        <AgencyItem.Skeleton />
        <AgencyItem.Skeleton />
      </div>
    </DashboardShell>
  );
}
