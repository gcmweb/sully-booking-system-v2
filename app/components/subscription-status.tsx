
'use client';

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Crown, Zap, Star, ArrowUpRight } from 'lucide-react';
import { SubscriptionPlan } from '@prisma/client';
import Link from 'next/link';

interface SubscriptionStatusProps {
  plan: SubscriptionPlan;
  venuesUsed: number;
  venuesLimit: number | null;
  showUpgradeButton?: boolean;
  className?: string;
}

const planConfig = {
  FREE: {
    name: 'Free',
    icon: Star,
    color: 'bg-gray-100 text-gray-800',
    description: 'Perfect for getting started',
  },
  PAID: {
    name: 'Professional',
    icon: Zap,
    color: 'bg-blue-100 text-blue-800',
    description: 'Great for growing businesses',
  },
  PREMIUM: {
    name: 'Enterprise',
    icon: Crown,
    color: 'bg-purple-100 text-purple-800',
    description: 'For large-scale operations',
  },
};

export function SubscriptionStatus({
  plan,
  venuesUsed,
  venuesLimit,
  showUpgradeButton = true,
  className = '',
}: SubscriptionStatusProps) {
  const config = planConfig[plan];
  const Icon = config.icon;
  const isAtLimit = venuesLimit !== null && venuesUsed >= venuesLimit;

  return (
    <Card className={`${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            <CardTitle className="text-lg">Current Plan</CardTitle>
          </div>
          <Badge className={config.color}>
            {config.name}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{config.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Venues</span>
            <span className={isAtLimit ? 'text-red-600 font-medium' : ''}>
              {venuesUsed} / {venuesLimit || '∞'}
            </span>
          </div>
          {venuesLimit && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  isAtLimit ? 'bg-red-500' : 'bg-blue-500'
                }`}
                style={{
                  width: `${Math.min((venuesUsed / venuesLimit) * 100, 100)}%`,
                }}
              />
            </div>
          )}
        </div>

        {isAtLimit && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">
              You've reached your venue limit. Upgrade to create more venues.
            </p>
          </div>
        )}

        {showUpgradeButton && plan !== SubscriptionPlan.PREMIUM && (
          <Link href="/dashboard/subscription">
            <Button className="w-full" variant="outline">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              {plan === SubscriptionPlan.FREE ? 'Upgrade Plan' : 'Upgrade to Premium'}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
