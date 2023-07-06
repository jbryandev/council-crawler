import { type DashboardConfig } from '@/types';

export const accountConfig: DashboardConfig = {
  mobileNavItems: [
    {
      title: 'Account',
      href: '/account',
      icon: 'account',
      items: [],
    },
    {
      title: 'Billing',
      href: '/account/billing',
      icon: 'card',
      items: [],
    },
  ],
  sidebarNavItems: [
    {
      title: 'Account',
      href: '/account',
      icon: 'account',
    },
    {
      title: 'Billing',
      href: '/account/billing',
      icon: 'card',
    },
  ],
};
