import { redirect } from 'next/navigation';

import { BillingForm } from '@/components/billing-form';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';
import { Icons } from '@/components/icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import { authOptions } from '@/lib/auth';
// import { getCurrentUser } from '@/lib/session';
// import { stripe } from '@/lib/stripe';
// import { getUserSubscriptionPlan } from '@/lib/subscription';

export const metadata = {
  title: 'Billing',
  description: 'Manage billing and your subscription plan.',
};

// export default async function BillingPage() {
export default function BillingPage() {
  // const user = await getCurrentUser();

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || '/login');
  // }

  // const subscriptionPlan = await getUserSubscriptionPlan(user.id);
  const subscriptionPlan = {
    name: 'Free',
    isPro: false,
    description: 'The Free plan is limited to one agency and a single user.',
    stripeSubscriptionId: '',
    stripeCustomerId: '',
    stripeProductId: '',
    stripePriceId: '',
    stripePrice: '',
    stripeCurrentPeriodEnd: 0,
  };

  const isCanceled = false;

  // // If user has a pro plan, check cancel status on Stripe.
  // let isCanceled = false;
  // if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
  //   const stripePlan = await stripe.subscriptions.retrieve(
  //     subscriptionPlan.stripeSubscriptionId
  //   );
  //   isCanceled = stripePlan.cancel_at_period_end;
  // }

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Billing'
        text='Manage billing and your subscription plan.'
      />
      <div className='grid gap-8'>
        <Alert className='!pl-14'>
          <Icons.warning />
          <AlertTitle>This app is currently in demo mode.</AlertTitle>
          <AlertDescription>
            Council Crawler is currently in demo using a Stripe test
            environment. You can find a list of test card numbers on the{' '}
            <a
              href='https://stripe.com/docs/testing#cards'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-8'
            >
              Stripe docs
            </a>
            .
          </AlertDescription>
        </Alert>
        <BillingForm
          subscriptionPlan={{
            ...subscriptionPlan,
            isCanceled,
          }}
        />
      </div>
    </DashboardShell>
  );
}
