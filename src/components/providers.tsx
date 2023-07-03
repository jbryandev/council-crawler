'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { Provider as ReactWrapBalancer } from 'react-wrap-balancer';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function BalancerProvider({ children }: { children: React.ReactNode }) {
  return <ReactWrapBalancer>{children}</ReactWrapBalancer>;
}
