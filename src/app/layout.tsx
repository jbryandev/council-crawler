import '@/styles/globals.css';
import { type Metadata } from 'next';

import { TextWrapProvider, ThemeProvider } from '@/components/providers';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <TextWrapProvider>
            <div className='relative flex min-h-screen flex-col'>
              <SiteHeader />
              <div className='container relative flex-1 pb-10'>{children}</div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
          </TextWrapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
