-- Supabase Migration SQL for Sully Booking System
-- This script creates all necessary tables and relationships

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE user_role AS ENUM ('CUSTOMER', 'VENUE_OWNER', 'ADMIN');
CREATE TYPE subscription_tier AS ENUM ('FREE', 'BASIC', 'PREMIUM', 'ENTERPRISE');
CREATE TYPE subscription_status AS ENUM ('ACTIVE', 'INACTIVE', 'CANCELLED', 'PAST_DUE');
CREATE TYPE booking_status AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    role user_role DEFAULT 'CUSTOMER',
    subscription_tier subscription_tier DEFAULT 'FREE',
    subscription_status subscription_status DEFAULT 'INACTIVE',
    stripe_customer_id VARCHAR(255),
    stripe_subscription_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Venues table
CREATE TABLE venues (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    address TEXT NOT NULL,
    phone VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    logo_url TEXT,
    header_image_url TEXT,
    owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    venue_id UUID NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
    customer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    party_size INTEGER NOT NULL CHECK (party_size > 0),
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    status booking_status DEFAULT 'PENDING',
    special_requests TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Venue opening hours table
CREATE TABLE venue_opening_hours (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    venue_id UUID NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
    open_time TIME,
    close_time TIME,
    is_closed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(venue_id, day_of_week)
);

-- Venue availability table
CREATE TABLE venue_availability (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    venue_id UUID NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    max_capacity INTEGER NOT NULL CHECK (max_capacity > 0),
    current_bookings INTEGER DEFAULT 0 CHECK (current_bookings >= 0),
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(venue_id, date)
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_venues_owner_id ON venues(owner_id);
CREATE INDEX idx_venues_is_featured ON venues(is_featured);
CREATE INDEX idx_venues_is_active ON venues(is_active);
CREATE INDEX idx_bookings_venue_id ON bookings(venue_id);
CREATE INDEX idx_bookings_customer_id ON bookings(customer_id);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_venue_opening_hours_venue_id ON venue_opening_hours(venue_id);
CREATE INDEX idx_venue_availability_venue_id ON venue_availability(venue_id);
CREATE INDEX idx_venue_availability_date ON venue_availability(date);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_venues_updated_at BEFORE UPDATE ON venues FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_venue_opening_hours_updated_at BEFORE UPDATE ON venue_opening_hours FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_venue_availability_updated_at BEFORE UPDATE ON venue_availability FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE venue_opening_hours ENABLE ROW LEVEL SECURITY;
ALTER TABLE venue_availability ENABLE ROW LEVEL SECURITY;

-- Create RLS policies

-- Users policies
CREATE POLICY "Users can view their own profile" ON users FOR SELECT USING (auth.uid()::text = id::text);
CREATE POLICY "Users can update their own profile" ON users FOR UPDATE USING (auth.uid()::text = id::text);
CREATE POLICY "Admins can view all users" ON users FOR SELECT USING (EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'ADMIN'));
CREATE POLICY "Admins can update all users" ON users FOR UPDATE USING (EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'ADMIN'));

-- Venues policies
CREATE POLICY "Anyone can view active venues" ON venues FOR SELECT USING (is_active = true);
CREATE POLICY "Venue owners can manage their venues" ON venues FOR ALL USING (auth.uid()::text = owner_id::text);
CREATE POLICY "Admins can manage all venues" ON venues FOR ALL USING (EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'ADMIN'));

-- Bookings policies
CREATE POLICY "Customers can view their own bookings" ON bookings FOR SELECT USING (auth.uid()::text = customer_id::text);
CREATE POLICY "Venue owners can view bookings for their venues" ON bookings FOR SELECT USING (EXISTS (SELECT 1 FROM venues WHERE id = venue_id AND owner_id::text = auth.uid()::text));
CREATE POLICY "Anyone can create bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Venue owners can update bookings for their venues" ON bookings FOR UPDATE USING (EXISTS (SELECT 1 FROM venues WHERE id = venue_id AND owner_id::text = auth.uid()::text));
CREATE POLICY "Admins can manage all bookings" ON bookings FOR ALL USING (EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'ADMIN'));

-- Venue opening hours policies
CREATE POLICY "Anyone can view venue opening hours" ON venue_opening_hours FOR SELECT USING (true);
CREATE POLICY "Venue owners can manage their venue opening hours" ON venue_opening_hours FOR ALL USING (EXISTS (SELECT 1 FROM venues WHERE id = venue_id AND owner_id::text = auth.uid()::text));
CREATE POLICY "Admins can manage all venue opening hours" ON venue_opening_hours FOR ALL USING (EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'ADMIN'));

-- Venue availability policies
CREATE POLICY "Anyone can view venue availability" ON venue_availability FOR SELECT USING (true);
CREATE POLICY "Venue owners can manage their venue availability" ON venue_availability FOR ALL USING (EXISTS (SELECT 1 FROM venues WHERE id = venue_id AND owner_id::text = auth.uid()::text));
CREATE POLICY "Admins can manage all venue availability" ON venue_availability FOR ALL USING (EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'ADMIN'));

-- Insert default admin user (password should be changed immediately)
INSERT INTO users (id, email, name, role, subscription_tier, subscription_status) 
VALUES (
    uuid_generate_v4(),
    'admin@sully-booking.com',
    'System Administrator',
    'ADMIN',
    'ENTERPRISE',
    'ACTIVE'
) ON CONFLICT (email) DO NOTHING;

COMMIT;