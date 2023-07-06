// import { type User } from '@prisma/client';

import { type Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export type MainNavItem = NavItem;

export type MobileNavItem = NavItemWithChildren;

export type SidebarNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
  mobileNavItems: MobileNavItem[];
};

export type DashboardConfig = {
  mobileNavItems: MobileNavItem[];
  sidebarNavItems: SidebarNavItem[];
};

export type User = {
  // testing only
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string?;
  isPro: boolean;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  stripeCurrentPeriodEnd: number;
  stripePriceId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, 'stripeCustomerId' | 'stripeSubscriptionId'> & {
    stripeCurrentPeriodEnd: number;
    isPro: boolean;
  };

export interface Agency {
  id: number;
  fullName: string;
  shortName: string;
  slug: string;
  url: string;
}

export interface Agenda {
  id: number;
  agencyId: number;
  date: Date;
  url: string;
  content: string;
}

export interface Highlight {
  id: number;
  agendaId: number;
  content: string;
}
