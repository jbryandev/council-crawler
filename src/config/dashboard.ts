import { type DashboardConfig } from '@/types';

export const dashboardConfig: DashboardConfig = {
  mobileNavItems: [
    {
      title: 'Agencies',
      href: '/dashboard',
      icon: 'building',
      items: [],
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
      items: [],
    },
  ],
  sidebarNavItems: [
    {
      title: 'Agencies',
      href: '/dashboard',
      icon: 'building',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
  ],
};
