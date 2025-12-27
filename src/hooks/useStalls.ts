'use client'

import { useState, useEffect, useCallback } from 'react'
import type { StallData, LayoutType } from '@/types/booking'
import { getStallsByLayout } from '@/data/stall-maps'
import { getSupabaseClient } from '@/lib/supabase'

/**
 * Hook to fetch stalls with real-time status updates from Supabase
 * 
 * Falls back to local data if database is unavailable
 */
export function useStalls(layout: LayoutType) {
  const [stalls, setStalls] = useState<StallData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch initial data and merge with database status
  const fetchStalls = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const localStalls = getStallsByLayout(layout)
      const supabase = getSupabaseClient()
      
      const dbLayout = layout === 'lifestyle' ? 'lifestyle' : 'real-estate-food'
      
      const { data, error: fetchError } = await supabase
        .from('stalls')
        .select('id, status')
        .eq('layout', dbLayout)
      
      if (fetchError) {
        console.warn('Error fetching stall statuses, using local data:', fetchError)
        setStalls(localStalls)
      } else {
        // Merge database status with local stall data
        const statusMap = new Map<string, 'available' | 'booked'>()
        data?.forEach(row => {
          statusMap.set(row.id, row.status as 'available' | 'booked')
        })
        
        const mergedStalls = localStalls.map(stall => ({
          ...stall,
          status: statusMap.get(stall.id) || stall.status,
        }))
        
        setStalls(mergedStalls)
      }
    } catch (err) {
      console.error('Error in fetchStalls:', err)
      setError('Failed to load stall data')
      setStalls(getStallsByLayout(layout))
    } finally {
      setLoading(false)
    }
  }, [layout])

  // Initial fetch
  useEffect(() => {
    fetchStalls()
  }, [fetchStalls])

  // Set up real-time subscription
  useEffect(() => {
    const supabase = getSupabaseClient()
    const dbLayout = layout === 'lifestyle' ? 'lifestyle' : 'real-estate-food'
    
    const channel = supabase
      .channel(`stalls-${dbLayout}-${Date.now()}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'stalls',
          filter: `layout=eq.${dbLayout}`,
        },
        (payload) => {
          // Update the specific stall that changed
          const updatedStall = payload.new as { id: string; status: string }
          
          setStalls(prevStalls => 
            prevStalls.map(stall => 
              stall.id === updatedStall.id
                ? { ...stall, status: updatedStall.status as 'available' | 'booked' | 'selected' }
                : stall
            )
          )
        }
      )
      .subscribe()
    
    // Cleanup subscription on unmount or layout change
    return () => {
      supabase.removeChannel(channel)
    }
  }, [layout])

  // Refresh function for manual refetch
  const refresh = useCallback(() => {
    fetchStalls()
  }, [fetchStalls])

  return {
    stalls,
    loading,
    error,
    refresh,
  }
}

/**
 * Hook to check if a specific stall is available
 */
export function useStallAvailability(stallId: string | null) {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    if (!stallId) {
      setIsAvailable(null)
      return
    }

    async function checkAvailability() {
      setChecking(true)
      
      try {
        const supabase = getSupabaseClient()
        const { data, error } = await supabase
          .from('stalls')
          .select('status')
          .eq('id', stallId)
          .single()
        
        if (error) {
          console.warn('Error checking availability:', error)
          setIsAvailable(true) // Assume available if can't check
        } else {
          setIsAvailable(data?.status === 'available')
        }
      } catch {
        setIsAvailable(true) // Assume available if error
      } finally {
        setChecking(false)
      }
    }

    checkAvailability()
  }, [stallId])

  return { isAvailable, checking }
}



