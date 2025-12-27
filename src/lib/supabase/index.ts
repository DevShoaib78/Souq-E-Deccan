/**
 * Supabase Module Exports
 * 
 * For client-side usage, import from './client' or use the exports below.
 * For server-side usage, import directly from './server' in server components/actions.
 */

// Only export client-safe functions from here
export { createClient, getSupabaseClient } from './client'
export type { Database, StallRow, StallStatus, LayoutType, StallType, Category, StallPosition } from './types'

// Note: Server functions (createServerSupabaseClient, createAdminSupabaseClient) 
// must be imported directly from '@/lib/supabase/server' in Server Components/Actions


