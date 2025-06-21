export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string | null
          role: 'CUSTOMER' | 'VENUE_OWNER' | 'ADMIN'
          subscription_tier: 'FREE' | 'BASIC' | 'PREMIUM' | 'ENTERPRISE'
          subscription_status: 'ACTIVE' | 'INACTIVE' | 'CANCELLED' | 'PAST_DUE'
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          role?: 'CUSTOMER' | 'VENUE_OWNER' | 'ADMIN'
          subscription_tier?: 'FREE' | 'BASIC' | 'PREMIUM' | 'ENTERPRISE'
          subscription_status?: 'ACTIVE' | 'INACTIVE' | 'CANCELLED' | 'PAST_DUE'
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          role?: 'CUSTOMER' | 'VENUE_OWNER' | 'ADMIN'
          subscription_tier?: 'FREE' | 'BASIC' | 'PREMIUM' | 'ENTERPRISE'
          subscription_status?: 'ACTIVE' | 'INACTIVE' | 'CANCELLED' | 'PAST_DUE'
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      venues: {
        Row: {
          id: string
          name: string
          description: string | null
          address: string
          phone: string | null
          email: string | null
          website: string | null
          logo_url: string | null
          header_image_url: string | null
          owner_id: string
          is_featured: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          address: string
          phone?: string | null
          email?: string | null
          website?: string | null
          logo_url?: string | null
          header_image_url?: string | null
          owner_id: string
          is_featured?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          address?: string
          phone?: string | null
          email?: string | null
          website?: string | null
          logo_url?: string | null
          header_image_url?: string | null
          owner_id?: string
          is_featured?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          venue_id: string
          customer_id: string | null
          customer_name: string
          customer_email: string
          customer_phone: string
          party_size: number
          booking_date: string
          booking_time: string
          status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
          special_requests: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          venue_id: string
          customer_id?: string | null
          customer_name: string
          customer_email: string
          customer_phone: string
          party_size: number
          booking_date: string
          booking_time: string
          status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
          special_requests?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          venue_id?: string
          customer_id?: string | null
          customer_name?: string
          customer_email?: string
          customer_phone?: string
          party_size?: number
          booking_date?: string
          booking_time?: string
          status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
          special_requests?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      venue_opening_hours: {
        Row: {
          id: string
          venue_id: string
          day_of_week: number
          open_time: string | null
          close_time: string | null
          is_closed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          venue_id: string
          day_of_week: number
          open_time?: string | null
          close_time?: string | null
          is_closed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          venue_id?: string
          day_of_week?: number
          open_time?: string | null
          close_time?: string | null
          is_closed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      venue_availability: {
        Row: {
          id: string
          venue_id: string
          date: string
          max_capacity: number
          current_bookings: number
          is_available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          venue_id: string
          date: string
          max_capacity: number
          current_bookings?: number
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          venue_id?: string
          date?: string
          max_capacity?: number
          current_bookings?: number
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'CUSTOMER' | 'VENUE_OWNER' | 'ADMIN'
      subscription_tier: 'FREE' | 'BASIC' | 'PREMIUM' | 'ENTERPRISE'
      subscription_status: 'ACTIVE' | 'INACTIVE' | 'CANCELLED' | 'PAST_DUE'
      booking_status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}