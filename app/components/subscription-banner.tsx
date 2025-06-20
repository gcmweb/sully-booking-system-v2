
'use client';

import { useState, useEffect } from 'react';
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { Crown, AlertTriangle, X } from 'lucide-react';
import { SubscriptionPlan } from '@prisma/client';
import Link from 'next/link';

interface SubscriptionBannerProps {
  plan: SubscriptionPlan;
  venuesUsed: number;
  venuesLimit: number | null;
  className?: string;
}

export function SubscriptionBanner({ 
  plan, 
  venuesUsed, 
  venuesLimit, 
  className = '' 
}: SubscriptionBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissedKey = `subscription-banner-dismissed-${plan}`;
    const wasDismissed = localStorage.getItem(dismissedKey) === 'true';
    setDismissed(wasDismissed);
  }, [plan]);

  const handleDismiss = () => {
    setDismissed(true);
    const dismissedKey = `subscription-banner-dismissed-${plan}`;
    localStorage.setItem(dismissedKey, 'true');
  };

  // Show banner for FREE users or when approaching limits
  const shouldShow = !dismissed && (
    plan === SubscriptionPlan.FREE || 
    (venuesLimit && venuesUsed >= venuesLimit * 0.8)
  );

  if (!shouldShow) return null;

  const isAtLimit = venuesLimit && venuesUsed >= venuesLimit;
  const isNearLimit = venuesLimit && venuesUsed >= venuesLimit * 0.8;

  return (
    <Alert className={`border-blue-200 bg-blue-50 ${className}`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          {plan === SubscriptionPlan.FREE ? (
            <Crown className="h-5 w-5 text-blue-600" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-orange-600" />
          )}
          
          <div className="flex-1">
            <AlertDescription className="text-sm">
              {plan === SubscriptionPlan.FREE ? (
                <>
                  <strong>Unlock more features!</strong> Upgrade to Professional or Enterprise 
                  to create more venues, get unlimited bookings, and access premium features.
                </>
              ) : isAtLimit ? (
                <>
                  <strong>Venue limit reached!</strong> You've used all {venuesLimit} venues 
                  in your {plan} plan. Upgrade to create more venues.
                </>
              ) : isNearLimit ? (
                <>
                  <strong>Approaching venue limit.</strong> You've used {venuesUsed} of {venuesLimit} venues 
                  in your {plan} plan. Consider upgrading soon.
                </>
              ) : null}
            </AlertDescription>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/dashboard/subscription">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Crown className="h-4 w-4 mr-1" />
              {plan === SubscriptionPlan.FREE ? 'Upgrade' : 'Manage'}
            </Button>
          </Link>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={handleDismiss}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Alert>
  );
}
