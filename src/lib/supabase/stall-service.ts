/**
 * Stall Service - Supabase Database Operations
 * 
 * This service handles all stall-related database operations.
 * It integrates with the existing stall-maps.ts for position data
 * while fetching status from Supabase.
 */

import { getSupabaseClient } from './client'
import { getStallsByLayout as getLocalStalls, getAllStalls as getLocalAllStalls } from '@/data/stall-maps'
import type { StallData, LayoutType } from '@/types/booking'
import type { StallStatus, StallRow } from './types'

/**
 * Merge local stall data with database status
 * 
 * Local data contains position/styling information
 * Database contains the actual status (available/booked)
 */
function mergeStallData(
  localStalls: StallData[], 
  dbStatuses: Map<string, StallStatus>
): StallData[] {
  return localStalls.map(stall => ({
    ...stall,
    status: dbStatuses.get(stall.id) || stall.status,
  }))
}

/**
 * Get stalls by layout with live status from database
 */
export async function getStallsWithStatus(layout: LayoutType): Promise<StallData[]> {
  const supabase = getSupabaseClient()
  const localStalls = getLocalStalls(layout)
  
  // Map layout type to database format
  const dbLayout = layout === 'lifestyle' ? 'lifestyle' : 'real-estate-food'
  
  const { data, error } = await supabase
    .from('stalls')
    .select('id, status')
    .eq('layout', dbLayout)
  
  if (error) {
    console.error('Error fetching stall statuses:', error)
    // Return local data with default status if database fails
    return localStalls
  }
  
  const statusMap = new Map<string, StallStatus>()
  data?.forEach(row => {
    statusMap.set(row.id, row.status as StallStatus)
  })
  
  return mergeStallData(localStalls, statusMap)
}

/**
 * Get all stalls with live status from database
 */
export async function getAllStallsWithStatus(): Promise<StallData[]> {
  const supabase = getSupabaseClient()
  const localStalls = getLocalAllStalls()
  
  const { data, error } = await supabase
    .from('stalls')
    .select('id, status')
  
  if (error) {
    console.error('Error fetching stall statuses:', error)
    return localStalls
  }
  
  const statusMap = new Map<string, StallStatus>()
  data?.forEach(row => {
    statusMap.set(row.id, row.status as StallStatus)
  })
  
  return mergeStallData(localStalls, statusMap)
}

/**
 * Get a single stall by ID with live status
 */
export async function getStallWithStatus(stallId: string): Promise<StallData | null> {
  const supabase = getSupabaseClient()
  const localStalls = getLocalAllStalls()
  const localStall = localStalls.find(s => s.id === stallId)
  
  if (!localStall) {
    return null
  }
  
  const { data, error } = await supabase
    .from('stalls')
    .select('id, status')
    .eq('id', stallId)
    .single()
  
  if (error) {
    console.error('Error fetching stall status:', error)
    return localStall
  }
  
  return {
    ...localStall,
    status: (data?.status as StallStatus) || localStall.status,
  }
}

/**
 * Subscribe to real-time stall status changes
 * 
 * @param layout - The layout to subscribe to
 * @param callback - Function to call when statuses change
 * @returns Unsubscribe function
 */
export function subscribeToStallChanges(
  layout: LayoutType,
  callback: (stalls: StallData[]) => void
): () => void {
  const supabase = getSupabaseClient()
  const dbLayout = layout === 'lifestyle' ? 'lifestyle' : 'real-estate-food'
  
  const channel = supabase
    .channel(`stalls-${dbLayout}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'stalls',
        filter: `layout=eq.${dbLayout}`,
      },
      async () => {
        // When any change happens, refetch all stalls
        const updatedStalls = await getStallsWithStatus(layout)
        callback(updatedStalls)
      }
    )
    .subscribe()
  
  // Return unsubscribe function
  return () => {
    supabase.removeChannel(channel)
  }
}

/**
 * Check if a stall is available for booking
 */
export async function isStallAvailable(stallId: string): Promise<boolean> {
  const supabase = getSupabaseClient()
  
  const { data, error } = await supabase
    .from('stalls')
    .select('status')
    .eq('id', stallId)
    .single()
  
  if (error) {
    console.error('Error checking stall availability:', error)
    // If we can't check, assume available (user can still submit)
    return true
  }
  
  return data?.status === 'available'
}

// ============================================================================
// ADMIN OPERATIONS (Server-side only)
// These are exposed for the admin dashboard
// ============================================================================

/**
 * Update stall status (for admin use)
 * This should only be called from server actions with proper auth
 */
export async function updateStallStatus(
  stallId: string, 
  status: StallStatus
): Promise<{ success: boolean; error?: string }> {
  const supabase = getSupabaseClient()
  
  const { error } = await supabase
    .from('stalls')
    .update({ status })
    .eq('id', stallId)
  
  if (error) {
    console.error('Error updating stall status:', error)
    return { success: false, error: error.message }
  }
  
  return { success: true }
}



