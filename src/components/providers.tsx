'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { Provider as ReactWrapProvider } from 'react-wrap-balancer';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function TextWrapProvider({ children }: { children: React.ReactNode }) {
  return <ReactWrapProvider>{children}</ReactWrapProvider>;
}
