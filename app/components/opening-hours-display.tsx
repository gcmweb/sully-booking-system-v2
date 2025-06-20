
'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

interface OpeningHour {
  id?: string;
  dayOfWeek: number;
  openTime: string;
  closeTime: string;
  name?: string;
  isActive: boolean;
}

interface OpeningHoursDisplayProps {
  openingHours: OpeningHour[];
  compact?: boolean;
  showTitle?: boolean;
}

const DAYS_OF_WEEK = [
  { value: 0, label: 'Sunday', short: 'Sun' },
  { value: 1, label: 'Monday', short: 'Mon' },
  { value: 2, label: 'Tuesday', short: 'Tue' },
  { value: 3, label: 'Wednesday', short: 'Wed' },
  { value: 4, label: 'Thursday', short: 'Thu' },
  { value: 5, label: 'Friday', short: 'Fri' },
  { value: 6, label: 'Saturday', short: 'Sat' },
];

export default function OpeningHoursDisplay({ 
  openingHours, 
  compact = false, 
  showTitle = true 
}: OpeningHoursDisplayProps) {
  const formatTimeRange = (openTime: string, closeTime: string) => {
    return `${openTime} - ${closeTime}`;
  };

  const getTimeSlotsForDay = (dayOfWeek: number) => {
    return openingHours
      .filter(slot => slot.dayOfWeek === dayOfWeek && slot.isActive)
      .sort((a, b) => a.openTime.localeCompare(b.openTime));
  };

  const getCurrentDayStatus = () => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
    
    const todaySlots = getTimeSlotsForDay(currentDay);
    
    if (todaySlots.length === 0) {
      return { isOpen: false, message: 'Closed today' };
    }

    for (const slot of todaySlots) {
      if (currentTime >= slot.openTime && currentTime <= slot.closeTime) {
        return { 
          isOpen: true, 
          message: `Open until ${slot.closeTime}${slot.name ? ` (${slot.name})` : ''}` 
        };
      }
    }

    // Find next opening time today
    const nextSlot = todaySlots.find(slot => currentTime < slot.openTime);
    if (nextSlot) {
      return { 
        isOpen: false, 
        message: `Opens at ${nextSlot.openTime}${nextSlot.name ? ` (${nextSlot.name})` : ''}` 
      };
    }

    return { isOpen: false, message: 'Closed for today' };
  };

  const currentStatus = getCurrentDayStatus();

  if (compact) {
    return (
      <div className="space-y-2">
        {showTitle && (
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium">Opening Hours</span>
            <Badge variant={currentStatus.isOpen ? 'default' : 'secondary'} className="text-xs">
              {currentStatus.isOpen ? 'Open' : 'Closed'}
            </Badge>
          </div>
        )}
        <div className="text-sm text-gray-600">
          {currentStatus.message}
        </div>
        <div className="grid gap-1">
          {DAYS_OF_WEEK.map((day) => {
            const daySlots = getTimeSlotsForDay(day.value);
            const isToday = new Date().getDay() === day.value;
            
            return (
              <div
                key={day.value}
                className={`flex justify-between text-xs ${
                  isToday ? 'font-medium text-blue-600' : 'text-gray-600'
                }`}
              >
                <span>{day.short}</span>
                <div className="flex flex-wrap gap-1">
                  {daySlots.length > 0 ? (
                    daySlots.map((slot, index) => (
                      <span key={index}>
                        {slot.name && `${slot.name}: `}
                        {formatTimeRange(slot.openTime, slot.closeTime)}
                        {index < daySlots.length - 1 && ', '}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">Closed</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Opening Hours</span>
          <Badge variant={currentStatus.isOpen ? 'default' : 'secondary'}>
            {currentStatus.isOpen ? 'Open Now' : 'Closed'}
          </Badge>
        </CardTitle>
        <CardDescription>
          {currentStatus.message}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {DAYS_OF_WEEK.map((day) => {
            const daySlots = getTimeSlotsForDay(day.value);
            const isToday = new Date().getDay() === day.value;
            
            return (
              <div
                key={day.value}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  isToday ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {isToday && <Calendar className="h-4 w-4 text-blue-600" />}
                  <span className={`font-medium ${isToday ? 'text-blue-900' : 'text-gray-900'}`}>
                    {day.label}
                  </span>
                  {isToday && (
                    <Badge variant="outline" className="text-xs">
                      Today
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {daySlots.length > 0 ? (
                    daySlots.map((slot, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {slot.name && `${slot.name}: `}
                        {formatTimeRange(slot.openTime, slot.closeTime)}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500">Closed</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {openingHours.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No opening hours set</p>
            <p className="text-sm">Contact the venue for availability</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
