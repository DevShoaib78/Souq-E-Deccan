/**
 * Supabase Client for Client-Side (Browser) Usage
 * 
 * Use this client in React components and client-side code.
 * This uses the anon key which is safe for public use.
 */

import { createBrowserClient } from '@supabase/ssr'

// Create client without strict Database types for flexibility
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Singleton instance for client-side usage
let clientInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!clientInstance) {
    clientInstance = createClient()
  }
  return clientInstance
}


