
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from "../components/auth-provider";

interface FeaturedVenue {
  id: string;
  name: string;
  description?: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  venueType: string;
  capacity: number;
  logoUrl?: string;
  headerImageUrl?: string;
  images: Array<{
    id: string;
    url: string;
    alt?: string;
  }>;
  owner: {
    firstName: string;
    lastName: string;
  };
}

export default function HomePage() {
  const [featuredVenues, setFeaturedVenues] = useState<FeaturedVenue[]>([]);
  const [loadingVenues, setLoadingVenues] = useState(true);
  const { user, loading: authLoading, logout } = useAuth();

  useEffect(() => {
    fetchFeaturedVenues();
  }, []);

  const fetchFeaturedVenues = async () => {
    try {
      const response = await fetch('/api/venues/featured');
      if (response.ok) {
        const data = await response.json();
        setFeaturedVenues(data.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch featured venues:', error);
    } finally {
      setLoadingVenues(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">📅 Sully</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/venues" className="px-4 py-2 text-gray-600 hover:text-gray-900">
                Browse Venues
              </Link>
              {!authLoading && (
                <>
                  {user ? (
                    // Authenticated user navigation
                    <>
                      <Link href="/my-bookings" className="px-4 py-2 text-gray-600 hover:text-gray-900">
                        My Bookings
                      </Link>
                      <Link href="/dashboard" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                        📊 Dashboard
                      </Link>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">
                          Welcome, {user.firstName}!
                        </span>
                        <button 
                          onClick={logout}
                          className="px-4 py-2 text-gray-600 hover:text-gray-900"
                        >
                          🚪 Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    // Non-authenticated user navigation
                    <>
                      <Link href="/my-bookings" className="px-4 py-2 text-gray-600 hover:text-gray-900">
                        My Bookings
                      </Link>
                      <Link href="/auth/login" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                        Login
                      </Link>
                      <Link href="/auth/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Sign Up
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-3 py-1 mb-4 text-sm bg-gray-100 rounded-full">
              🚀 Complete Booking Management System
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Streamline Your
              <span className="text-blue-600"> Restaurant Bookings</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Powerful booking system for restaurants, cafes, bars, and food trucks. 
              Manage reservations, track analytics, and grow your business with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/venues" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Find & Book Venues →
              </Link>
              {!authLoading && (
                <Link href={user ? "/dashboard" : "/auth/register"} className="inline-block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  {user ? (
                    <>📊 Go to Dashboard</>
                  ) : (
                    "Start Your Venue"
                  )}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venues Section */}
      {!loadingVenues && featuredVenues.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 text-sm bg-yellow-100 rounded-full">
                ⭐ Featured Venues
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Discover Amazing Venues
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Handpicked restaurants, cafes, and bars offering exceptional dining experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVenues.map((venue) => (
                <div key={venue.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                    {(() => {
                      let imageUrl = null;
                      let imageAlt = venue.name;
                      
                      if (venue.headerImageUrl) {
                        imageUrl = venue.headerImageUrl;
                        imageAlt = `${venue.name} header image`;
                      } else if (venue.images && venue.images.length > 0) {
                        imageUrl = venue.images[0].url;
                        imageAlt = venue.images[0].alt || venue.name;
                      } else if (venue.logoUrl) {
                        imageUrl = venue.logoUrl;
                        imageAlt = `${venue.name} logo`;
                      }
                      
                      return imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={imageAlt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      ) : null;
                    })()}
                    <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                      <div className="text-center">
                        <span className="text-4xl">📅</span>
                        <p className="text-blue-600 font-medium mt-2">{venue.name}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        ⭐ Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                          {venue.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span>📍 {venue.city}, {venue.postcode}</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 border border-gray-300 text-xs rounded-full ml-2">
                        {venue.venueType.replace('_', ' ')}
                      </span>
                    </div>
                    {venue.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {venue.description}
                      </p>
                    )}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600">
                          <span>👥 Capacity: {venue.capacity}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span>📞 {venue.phone}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span>Managed by {venue.owner.firstName} {venue.owner.lastName}</span>
                      </div>
                      <Link href={`/book/${venue.id}`} className="block">
                        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                          Book Now →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/venues" className="inline-block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                View All Venues →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Bookings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From table reservations to event management, Sully provides all the tools 
              your venue needs to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more bookings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">Free Plan</h3>
              <div className="text-3xl font-bold mb-2">£0<span className="text-lg font-normal">/month</span></div>
              <p className="text-gray-600 mb-6">Perfect for small venues getting started</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 50 bookings per month
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic booking management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Email notifications
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic analytics
                </li>
              </ul>
              <Link href={user ? "/dashboard" : "/auth/register"} className="block">
                <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {user ? "Go to Dashboard" : "Get Started Free"}
                </button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-blue-200 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Pro Plan</h3>
              <div className="text-3xl font-bold mb-2">£30<span className="text-lg font-normal">/month</span></div>
              <p className="text-gray-600 mb-6">For growing restaurants and venues</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited bookings
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced booking management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  SMS & Email notifications
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced analytics & reports
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Embeddable booking widgets
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
              </ul>
              <Link href={user ? "/dashboard/subscription" : "/auth/register"} className="block">
                <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {user ? "Upgrade to Pro" : "Start Pro Trial"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-2xl font-bold">📅 Sully</span>
            </div>
            <div className="text-gray-400">
              © 2025 Sully Booking System. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: 'Table Management',
    description: 'Organize tables, set capacity limits, and manage seating arrangements with ease.',
    icon: '👥',
  },
  {
    title: 'Real-time Bookings',
    description: 'Accept bookings 24/7 with instant confirmation and availability checking.',
    icon: '📅',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track booking trends, revenue, and customer insights with detailed reports.',
    icon: '📊',
  },
  {
    title: 'Multi-Service Support',
    description: 'Handle dine-in, takeaway, delivery, and event bookings all in one place.',
    icon: '⭐',
  },
  {
    title: 'Embeddable Widgets',
    description: 'Add booking forms to your website with customizable iframe widgets.',
    icon: '✅',
  },
  {
    title: 'Automated Notifications',
    description: 'Send confirmation emails and SMS reminders to customers automatically.',
    icon: '🔔',
  },
];
