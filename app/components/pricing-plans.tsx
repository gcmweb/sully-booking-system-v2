
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Crown, Zap, Star, Loader2 } from 'lucide-react';
import { SubscriptionPlan } from '@prisma/client';
import { SUBSCRIPTION_PRICING } from "../lib/stripe";
import { getSubscriptionFeatures } from "../lib/subscription-utils";

interface PricingPlansProps {
  currentPlan: SubscriptionPlan;
  onUpgrade: (plan: SubscriptionPlan) => Promise<void>;
  loading?: boolean;
}

const planConfig = {
  FREE: {
    name: 'Free',
    icon: Star,
    color: 'border-gray-200',
    buttonColor: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    popular: false,
  },
  PAID: {
    name: 'Professional',
    icon: Zap,
    color: 'border-blue-200 ring-2 ring-blue-100',
    buttonColor: 'bg-blue-600 text-white hover:bg-blue-700',
    popular: true,
  },
  PREMIUM: {
    name: 'Enterprise',
    icon: Crown,
    color: 'border-purple-200',
    buttonColor: 'bg-purple-600 text-white hover:bg-purple-700',
    popular: false,
  },
};

export function PricingPlans({ currentPlan, onUpgrade, loading = false }: PricingPlansProps) {
  const [upgrading, setUpgrading] = useState<SubscriptionPlan | null>(null);

  const handleUpgrade = async (plan: SubscriptionPlan) => {
    if (plan === currentPlan || loading) return;
    
    setUpgrading(plan);
    try {
      await onUpgrade(plan);
    } finally {
      setUpgrading(null);
    }
  };

  const getButtonText = (plan: SubscriptionPlan) => {
    if (plan === currentPlan) return 'Current Plan';
    if (plan === SubscriptionPlan.FREE) return 'Downgrade';
    return 'Upgrade';
  };

  const isButtonDisabled = (plan: SubscriptionPlan) => {
    return plan === currentPlan || loading || upgrading !== null;
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Object.entries(planConfig).map(([planKey, config]) => {
        const plan = planKey as SubscriptionPlan;
        const pricing = SUBSCRIPTION_PRICING[plan];
        const features = getSubscriptionFeatures(plan);
        const Icon = config.icon;
        const isCurrentPlan = plan === currentPlan;
        const isUpgrading = upgrading === plan;

        return (
          <Card
            key={plan}
            className={`relative ${config.color} ${
              config.popular ? 'scale-105' : ''
            } transition-all duration-200`}
          >
            {config.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-2">
                <Icon className="h-8 w-8 text-gray-600" />
              </div>
              <CardTitle className="text-xl">{config.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">
                  £{pricing.price}
                </span>
                {pricing.price > 0 && (
                  <span className="text-gray-600">/{pricing.interval}</span>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleUpgrade(plan)}
                disabled={isButtonDisabled(plan)}
                className={`w-full ${config.buttonColor}`}
                variant={isCurrentPlan ? 'outline' : 'default'}
              >
                {isUpgrading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  getButtonText(plan)
                )}
              </Button>

              {isCurrentPlan && (
                <p className="text-xs text-center text-muted-foreground">
                  You're currently on this plan
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
