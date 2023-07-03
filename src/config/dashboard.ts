import { type DashboardConfig } from '@/types';

export const dashboardConfig: DashboardConfig = {
  sidebarNavItems: [
    {
      title: 'Agencies',
      href: '/dashboard',
      icon: 'building',
    },
    {
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'card',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
  ],
};
