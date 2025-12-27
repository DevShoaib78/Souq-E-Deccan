'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'
import type { LayoutType, StallData } from '@/types/booking'
import { getStallsByLayout } from '@/data/stall-maps'

interface AdminDashboardProps {
  userEmail: string
}

type StallStatusMap = Map<string, 'available' | 'booked'>

export default function AdminDashboard({ userEmail }: AdminDashboardProps) {
  const router = useRouter()
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>('lifestyle')
  const [stalls, setStalls] = useState<StallData[]>([])
  const [statusMap, setStatusMap] = useState<StallStatusMap>(new Map())
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch stall statuses from database
  useEffect(() => {
    async function fetchStatuses() {
      setLoading(true)
      const supabase = getSupabaseClient()

      const dbLayout = selectedLayout === 'lifestyle' ? 'lifestyle' : 'real-estate-food'

      const { data, error } = await supabase
        .from('stalls')
        .select('id, status')
        .eq('layout', dbLayout)

      if (error) {
        console.error('Error fetching statuses:', error)
      }

      const newStatusMap = new Map<string, 'available' | 'booked'>()
      // Type assertion for the query result
      const rows = data as { id: string; status: string }[] | null
      rows?.forEach(row => {
        newStatusMap.set(row.id, row.status as 'available' | 'booked')
      })

      setStatusMap(newStatusMap)
      setStalls(getStallsByLayout(selectedLayout))
      setLoading(false)
    }

    fetchStatuses()
  }, [selectedLayout])

  // Toggle stall status - uses UPSERT to create stall if it doesn't exist
  async function toggleStatus(stallId: string) {
    const currentStatus = statusMap.get(stallId) || 'available'
    const newStatus = currentStatus === 'available' ? 'booked' : 'available'

    setUpdating(stallId)

    // Find the stall data from local stalls
    const stallData = stalls.find(s => s.id === stallId)
    if (!stallData) {
      setUpdating(null)
      return
    }

    const supabase = getSupabaseClient()

    // Use UPSERT - this will INSERT if stall doesn't exist, UPDATE if it does
    const { error } = await supabase
      .from('stalls')
      .upsert({
        id: stallId,
        layout: stallData.layout === 'lifestyle' ? 'lifestyle' : 'real-estate-food',
        label: stallData.label,
        category: stallData.category,
        status: newStatus,
        position: stallData.position,
        stall_type: stallData.stallType || 'standard',
        size: stallData.size || '3x2m',
      }, {
        onConflict: 'id'
      })

    if (error) {
      console.error('Error updating status:', error)
      alert(`Failed to update stall: ${error.message}`)
    } else {
      setStatusMap(prev => {
        const newMap = new Map(prev)
        newMap.set(stallId, newStatus)
        return newMap
      })
    }

    setUpdating(null)
  }

  // Sign out
  async function handleSignOut() {
    const supabase = getSupabaseClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  // Filter stalls by search term
  const filteredStalls = stalls.filter(stall =>
    stall.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stall.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Seed database
  const [seeding, setSeeding] = useState(false)

  async function handleSeedDatabase() {
    if (!confirm('This will reset ALL stalls back to "Available". Are you sure?')) {
      return
    }

    setSeeding(true)
    try {
      const response = await fetch('/api/admin/seed', { method: 'POST' })
      const data = await response.json()

      if (data.success) {
        alert('All stalls have been reset to Available!')
        // Refresh the page to reload data
        window.location.reload()
      } else {
        alert(`Reset failed: ${data.error}`)
      }
    } catch (err) {
      alert('Failed to reset stalls')
      console.error(err)
    } finally {
      setSeeding(false)
    }
  }

  // Stats
  const totalStalls = stalls.length
  const bookedCount = stalls.filter(s => statusMap.get(s.id) === 'booked').length
  const availableCount = totalStalls - bookedCount

  return (
    <div className="min-h-screen bg-sand pt-28 md:pt-32">
      {/* Decorative Background */}
      <div className="fixed inset-0 moroccan-overlay opacity-30 pointer-events-none" />

      {/* Header */}
      <header className="bg-maroon border-b border-gold/30 sticky top-28 md:top-32 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-gold">Souq-E-Deccan</h1>
            <p className="text-white/70 text-sm font-body">Admin Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/80 text-sm hidden sm:inline font-body">{userEmail}</span>
            <button
              onClick={handleSeedDatabase}
              disabled={seeding}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white border border-white/20 text-sm transition-colors font-body"
              title="Reset all stalls back to Available"
            >
              {seeding ? 'Resetting...' : 'Reset Stalls'}
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-gold hover:bg-gold-300 text-maroon font-body font-semibold text-sm transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border-2 border-gold/30 p-5">
            <p className="text-coffee/70 text-sm mb-1 font-body">Total Stalls</p>
            <p className="text-3xl font-heading font-bold text-maroon">{totalStalls}</p>
          </div>
          <div className="bg-teal/10 border-2 border-teal/30 p-5">
            <p className="text-teal text-sm mb-1 font-body font-semibold">Available</p>
            <p className="text-3xl font-heading font-bold text-teal">{availableCount}</p>
          </div>
          <div className="bg-maroon/10 border-2 border-maroon/30 p-5">
            <p className="text-maroon text-sm mb-1 font-body font-semibold">Booked</p>
            <p className="text-3xl font-heading font-bold text-maroon">{bookedCount}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Layout Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedLayout('lifestyle')}
              className={`px-4 py-2 font-body font-medium transition-all ${selectedLayout === 'lifestyle'
                  ? 'bg-maroon text-white'
                  : 'bg-white text-coffee border-2 border-gold/30 hover:border-gold'
                }`}
            >
              Lifestyle Zone
            </button>
            <button
              onClick={() => setSelectedLayout('real-estate-food')}
              className={`px-4 py-2 font-body font-medium transition-all ${selectedLayout === 'real-estate-food'
                  ? 'bg-maroon text-white'
                  : 'bg-white text-coffee border-2 border-gold/30 hover:border-gold'
                }`}
            >
              Real Estate & Food
            </button>
          </div>

          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search stalls..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white border-2 border-gold/30 text-coffee placeholder-coffee/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-body"
            />
          </div>
        </div>

        {/* Stalls Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin h-10 w-10 border-4 border-gold border-t-transparent rounded-full" />
          </div>
        ) : (
          <div className="bg-white border-2 border-gold/30 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4">
              {filteredStalls.map((stall) => {
                const status = statusMap.get(stall.id) || 'available'
                const isUpdating = updating === stall.id

                return (
                  <button
                    key={stall.id}
                    onClick={() => toggleStatus(stall.id)}
                    disabled={isUpdating}
                    className={`relative p-3 border-2 transition-all duration-200 ${status === 'booked'
                        ? 'bg-maroon/10 border-maroon/50 hover:bg-maroon/20'
                        : 'bg-teal/10 border-teal/50 hover:bg-teal/20'
                      } ${isUpdating ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
                  >
                    <div className="text-sm font-body font-semibold text-coffee truncate">
                      {stall.label}
                    </div>
                    <div className={`text-xs mt-1 font-body font-semibold ${status === 'booked' ? 'text-maroon' : 'text-teal'
                      }`}>
                      {status === 'booked' ? 'Booked' : 'Available'}
                    </div>
                    <div className="text-xs text-coffee/60 mt-1 font-body">
                      {stall.category}
                    </div>

                    {isUpdating && (
                      <div className="absolute inset-0 flex items-center justify-center bg-sand/80">
                        <div className="animate-spin h-5 w-5 border-2 border-gold border-t-transparent rounded-full" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {filteredStalls.length === 0 && (
              <div className="text-center py-10 text-coffee/60 font-body">
                No stalls found matching &ldquo;{searchTerm}&rdquo;
              </div>
            )}
          </div>
        )}

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-coffee/70 font-body">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-teal/20 border-2 border-teal/50" />
            <span>Click to mark as Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-maroon/20 border-2 border-maroon/50" />
            <span>Click to mark as Available</span>
          </div>
        </div>
      </main>
    </div>
  )
}
