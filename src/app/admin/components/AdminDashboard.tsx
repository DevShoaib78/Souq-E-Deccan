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
      data?.forEach(row => {
        newStatusMap.set(row.id, row.status as 'available' | 'booked')
      })
      
      setStatusMap(newStatusMap)
      setStalls(getStallsByLayout(selectedLayout))
      setLoading(false)
    }
    
    fetchStatuses()
  }, [selectedLayout])

  // Toggle stall status
  async function toggleStatus(stallId: string) {
    const currentStatus = statusMap.get(stallId) || 'available'
    const newStatus = currentStatus === 'available' ? 'booked' : 'available'
    
    setUpdating(stallId)
    
    const supabase = getSupabaseClient()
    const { error } = await supabase
      .from('stalls')
      .update({ status: newStatus })
      .eq('id', stallId)
    
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
    if (!confirm('This will reset all stalls to "available". Continue?')) {
      return
    }
    
    setSeeding(true)
    try {
      const response = await fetch('/api/admin/seed', { method: 'POST' })
      const data = await response.json()
      
      if (data.success) {
        alert(`Successfully seeded ${data.count} stalls!`)
        // Refresh the page to reload data
        window.location.reload()
      } else {
        alert(`Seed failed: ${data.error}`)
      }
    } catch (err) {
      alert('Failed to seed database')
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-amber-400">Souq-e-Deccan</h1>
            <p className="text-slate-400 text-sm">Admin Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300 text-sm hidden sm:inline">{userEmail}</span>
            <button
              onClick={handleSeedDatabase}
              disabled={seeding}
              className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg text-sm transition-colors"
            >
              {seeding ? 'Seeding...' : 'Seed DB'}
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
            <p className="text-slate-400 text-sm mb-1">Total Stalls</p>
            <p className="text-3xl font-bold text-white">{totalStalls}</p>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
            <p className="text-emerald-400 text-sm mb-1">Available</p>
            <p className="text-3xl font-bold text-emerald-400">{availableCount}</p>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
            <p className="text-red-400 text-sm mb-1">Booked</p>
            <p className="text-3xl font-bold text-red-400">{bookedCount}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Layout Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedLayout('lifestyle')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedLayout === 'lifestyle'
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Lifestyle Zone
            </button>
            <button
              onClick={() => setSelectedLayout('real-estate-food')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedLayout === 'real-estate-food'
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
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
              className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>
        </div>

        {/* Stalls Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin h-10 w-10 border-4 border-amber-500 border-t-transparent rounded-full" />
          </div>
        ) : (
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4">
              {filteredStalls.map((stall) => {
                const status = statusMap.get(stall.id) || 'available'
                const isUpdating = updating === stall.id
                
                return (
                  <button
                    key={stall.id}
                    onClick={() => toggleStatus(stall.id)}
                    disabled={isUpdating}
                    className={`relative p-3 rounded-lg border-2 transition-all duration-200 ${
                      status === 'booked'
                        ? 'bg-red-500/20 border-red-500/50 hover:bg-red-500/30'
                        : 'bg-emerald-500/20 border-emerald-500/50 hover:bg-emerald-500/30'
                    } ${isUpdating ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
                  >
                    <div className="text-sm font-semibold text-white truncate">
                      {stall.label}
                    </div>
                    <div className={`text-xs mt-1 ${
                      status === 'booked' ? 'text-red-400' : 'text-emerald-400'
                    }`}>
                      {status === 'booked' ? 'Booked' : 'Available'}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stall.category}
                    </div>
                    
                    {isUpdating && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-lg">
                        <div className="animate-spin h-5 w-5 border-2 border-amber-500 border-t-transparent rounded-full" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
            
            {filteredStalls.length === 0 && (
              <div className="text-center py-10 text-slate-400">
                No stalls found matching "{searchTerm}"
              </div>
            )}
          </div>
        )}

        {/* Legend */}
        <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-emerald-500/30 border border-emerald-500/50 rounded" />
            <span>Click to mark as Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500/30 border border-red-500/50 rounded" />
            <span>Click to mark as Available</span>
          </div>
        </div>
      </main>
    </div>
  )
}

