import { DashboardNav } from '@/components/dashboard-nav';
import SiteFooter from '@/components/layouts/site-footer';
import SiteHeader from '@/components/layouts/site-header';
import { dashboardConfig } from '@/config/dashboard';
import { user } from '@/lib/data';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col space-y-6'>
      <SiteHeader user={user} mobileNavItems={dashboardConfig.mobileNavItems} />
      <div className='container grid flex-1 gap-12 lg:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] flex-col lg:flex'>
          <DashboardNav items={dashboardConfig.sidebarNavItems} />
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
