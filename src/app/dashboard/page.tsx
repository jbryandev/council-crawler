import { AgencyCreateButton } from '@/components/agency-create-button';
import { AgencyItem } from '@/components/agency-item';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';
import { EmptyPlaceholder } from '@/components/empty-placeholder';
import { agencies } from '@/lib/data';
// import { type Agency } from '@/types';

// const agencies: Agency[] = [];

export const metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading='Agencies'
        text='Create and manage your agencies.'
      >
        <AgencyCreateButton />
      </DashboardHeader>
      <div>
        {agencies?.length ? (
          <div className='divide-y divide-border rounded-md border'>
            {agencies.map((agency) => (
              <AgencyItem key={agency.id} agency={agency} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name='building' />
            <EmptyPlaceholder.Title>No agencies added</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You are not tracking any agencies yet. Add one to start tracking.
            </EmptyPlaceholder.Description>
            <AgencyCreateButton variant='outline' />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
