import SiteFooter from '@/components/layouts/site-footer';
import SiteHeader from '@/components/layouts/site-header';
import { marketingConfig } from '@/config/marketing';

const user = null; // testing only

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <SiteHeader
        user={user}
        mainNavItems={marketingConfig.mainNav}
        mobileNavItems={marketingConfig.mobileNavItems}
      />
      <div className='container relative flex-1 pb-10'>{children}</div>
      <SiteFooter />
    </div>
  );
}
