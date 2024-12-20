import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';
import { user } from '@/lib/data';

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
};

export default function SettingsPage() {
  // const user = await getCurrentUser();

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || '/login');
  // }

  return (
    <DashboardShell>
      <DashboardHeader heading='Settings' text='Manage website settings.' />
      <div className='grid gap-10'>
        {/* <UserNameForm user={{ id: user.id, name: user.name || '' }} /> */}
      </div>
    </DashboardShell>
  );
}
