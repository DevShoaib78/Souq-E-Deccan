-- ============================================================================
-- SOUQ-E-DECCAN DATABASE SCHEMA
-- ============================================================================
-- Run this SQL in the Supabase SQL Editor to set up the database
-- Go to: https://supabase.com/dashboard/project/kcoydebzmrzxomnvhooq/sql/new
-- ============================================================================

-- Enable UUID extension (usually already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- ENUM TYPES
-- ============================================================================

-- Stall status
CREATE TYPE stall_status AS ENUM ('available', 'booked');

-- Layout type
CREATE TYPE layout_type AS ENUM ('lifestyle', 'real-estate-food');

-- Stall type
CREATE TYPE stall_type AS ENUM ('one-side-open', 'two-side-open', 'standard');

-- Category
CREATE TYPE category AS ENUM ('lifestyle', 'real-estate', 'food');

-- ============================================================================
-- STALLS TABLE
-- ============================================================================

CREATE TABLE stalls (
  -- Primary key: unique stall identifier (e.g., 'L-106', 'RE-S32', 'F-1')
  id TEXT PRIMARY KEY,
  
  -- Which layout this stall belongs to
  layout layout_type NOT NULL,
  
  -- Display label (e.g., '106', 'RE S 32', 'F1')
  label TEXT NOT NULL,
  
  -- Category for booking form
  category category NOT NULL,
  
  -- Current status - this is what admin can change
  status stall_status NOT NULL DEFAULT 'available',
  
  -- Position data stored as JSONB for flexibility
  position JSONB NOT NULL,
  
  -- Stall type
  stall_type stall_type NOT NULL DEFAULT 'standard',
  
  -- Size description
  size TEXT NOT NULL DEFAULT '3x2m',
  
  -- Timestamps
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster queries by layout and status
CREATE INDEX idx_stalls_layout ON stalls(layout);
CREATE INDEX idx_stalls_status ON stalls(status);
CREATE INDEX idx_stalls_layout_status ON stalls(layout, status);

-- ============================================================================
-- AUTO-UPDATE TIMESTAMP TRIGGER
-- ============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_stalls_updated_at
  BEFORE UPDATE ON stalls
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS on stalls table
ALTER TABLE stalls ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read stalls (public access for visitors)
CREATE POLICY "Anyone can view stalls"
  ON stalls
  FOR SELECT
  USING (true);

-- Policy: Only authenticated users can update stalls (admin only)
CREATE POLICY "Authenticated users can update stalls"
  ON stalls
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Service role can do anything (for seeding data)
CREATE POLICY "Service role has full access"
  ON stalls
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'service_role');

-- ============================================================================
-- ADMIN USERS NOTE
-- ============================================================================
-- Admin users are created through Supabase Auth Dashboard.
-- Go to: Authentication > Users > Add user
-- Create a user with email/password for admin access.
-- ============================================================================

-- ============================================================================
-- DONE!
-- ============================================================================
-- After running this SQL, you need to:
-- 1. Create an admin user in Authentication > Users
-- 2. Run the seed script to populate stalls data
-- ============================================================================



