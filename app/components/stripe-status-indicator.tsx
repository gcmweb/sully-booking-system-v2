
'use client';

import { useState, useEffect } from 'react';
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle, AlertCircle, XCircle, Settings } from 'lucide-react';

interface StripeConfig {
  publishableKey?: string;
  isLiveMode: boolean;
  isDemoMode: boolean;
  configValid: boolean;
  hasConfigErrors: boolean;
}

export function StripeStatusIndicator() {
  const [config, setConfig] = useState<StripeConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStripeConfig() {
      try {
        const response = await fetch('/api/stripe/config');
        if (response.ok) {
          const data = await response.json();
          setConfig(data);
        } else {
          setError('Failed to fetch Stripe configuration');
        }
      } catch (err) {
        setError('Error checking Stripe status');
      } finally {
        setLoading(false);
      }
    }

    fetchStripeConfig();
  }, []);

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Payment System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
            <span>Checking payment system status...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !config) {
    return (
      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Payment System Error</AlertTitle>
        <AlertDescription>
          {error || 'Unable to determine payment system status'}
        </AlertDescription>
      </Alert>
    );
  }

  const getStatusInfo = () => {
    if (config.isDemoMode) {
      return {
        status: 'Demo Mode',
        variant: 'secondary' as const,
        icon: <AlertCircle className="h-4 w-4" />,
        description: 'Payment system is running in demo mode. No real payments are processed.',
        color: 'text-yellow-600'
      };
    }

    if (!config.configValid) {
      return {
        status: 'Configuration Error',
        variant: 'destructive' as const,
        icon: <XCircle className="h-4 w-4" />,
        description: 'Payment system configuration has errors. Please check environment variables.',
        color: 'text-red-600'
      };
    }

    if (config.isLiveMode) {
      return {
        status: 'Live Mode',
        variant: 'default' as const,
        icon: <CheckCircle className="h-4 w-4" />,
        description: 'Payment system is live and processing real payments.',
        color: 'text-green-600'
      };
    }

    return {
      status: 'Test Mode',
      variant: 'outline' as const,
      icon: <AlertCircle className="h-4 w-4" />,
      description: 'Payment system is in test mode. Use test cards for payments.',
      color: 'text-blue-600'
    };
  };

  const statusInfo = getStatusInfo();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Payment System Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={statusInfo.color}>
              {statusInfo.icon}
            </span>
            <span className="font-medium">Status:</span>
          </div>
          <Badge variant={statusInfo.variant} className="flex items-center gap-1">
            {statusInfo.status}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          {statusInfo.description}
        </p>

        {config.isDemoMode && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Demo Mode Active</AlertTitle>
            <AlertDescription>
              To enable live payments, configure your Stripe account and update environment variables.
              See the Stripe Go-Live Guide for instructions.
            </AlertDescription>
          </Alert>
        )}

        {!config.configValid && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Configuration Issues</AlertTitle>
            <AlertDescription>
              Payment system configuration has errors. Please check your environment variables
              and ensure all required Stripe keys are properly set.
            </AlertDescription>
          </Alert>
        )}

        <div className="pt-2 border-t">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Mode:</span>
              <span className="ml-2">
                {config.isLiveMode ? 'Live' : config.isDemoMode ? 'Demo' : 'Test'}
              </span>
            </div>
            <div>
              <span className="font-medium">Config:</span>
              <span className="ml-2">
                {config.configValid ? 'Valid' : 'Invalid'}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
