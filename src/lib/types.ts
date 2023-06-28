import { type Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export type MainNavItem = NavItem;

export type SidebarNavItem = NavItemWithChildren;

export interface Agency {
  id: number;
  name: string;
  slug: string;
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
