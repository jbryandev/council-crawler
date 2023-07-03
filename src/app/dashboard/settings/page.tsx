// import { authOptions } from '@/lib/auth';
// import { getCurrentUser } from '@/lib/session';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';
import { UserNameForm } from '@/components/user-name-form';
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
      <DashboardHeader
        heading='Settings'
        text='Manage account and website settings.'
      />
      <div className='grid gap-10'>
        <UserNameForm user={{ id: user.id, name: user.name || '' }} />
      </div>
    </DashboardShell>
  );
}
