import { NextResponse } from 'next/server'
import { createAdminSupabaseClient } from '@/lib/supabase/server'
import { getAllStalls } from '@/data/stall-maps'

/**
 * POST /api/admin/seed
 * 
 * Seeds the database with all stall data from stall-maps.ts
 * Only accessible to authenticated admin users
 */
export async function POST() {
  try {
    const supabase = await createAdminSupabaseClient()
    
    // Verify admin authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get all stalls from local data
    const stalls = getAllStalls()
    
    // Prepare data for insertion
    const stallsData = stalls.map(stall => ({
      id: stall.id,
      layout: stall.layout === 'lifestyle' ? 'lifestyle' : 'real-estate-food',
      label: stall.label,
      category: stall.category,
      status: 'available' as const,
      position: stall.position,
      stall_type: stall.stallType || 'standard',
      size: stall.size,
    }))

    // Clear existing stalls and insert new ones
    const { error: deleteError } = await supabase
      .from('stalls')
      .delete()
      .neq('id', '') // Delete all

    if (deleteError) {
      console.error('Error deleting existing stalls:', deleteError)
      return NextResponse.json(
        { error: 'Failed to clear existing data', details: deleteError.message },
        { status: 500 }
      )
    }

    // Insert in batches of 50 to avoid timeout
    const batchSize = 50
    let insertedCount = 0
    
    for (let i = 0; i < stallsData.length; i += batchSize) {
      const batch = stallsData.slice(i, i + batchSize)
      
      const { error: insertError } = await supabase
        .from('stalls')
        .insert(batch)

      if (insertError) {
        console.error('Error inserting stalls batch:', insertError)
        return NextResponse.json(
          { 
            error: 'Failed to insert stalls', 
            details: insertError.message,
            insertedSoFar: insertedCount 
          },
          { status: 500 }
        )
      }
      
      insertedCount += batch.length
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${insertedCount} stalls`,
      count: insertedCount,
    })

  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


