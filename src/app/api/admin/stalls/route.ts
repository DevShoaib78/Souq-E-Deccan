import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

/**
 * GET /api/admin/stalls
 * 
 * Get all stalls with their current status
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    
    // Verify authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get layout filter from query params
    const { searchParams } = new URL(request.url)
    const layout = searchParams.get('layout')

    let query = supabase.from('stalls').select('*')
    
    if (layout) {
      query = query.eq('layout', layout)
    }

    const { data, error } = await query.order('id')

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ stalls: data })

  } catch (error) {
    console.error('Error fetching stalls:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * PATCH /api/admin/stalls
 * 
 * Update stall status
 */
export async function PATCH(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    
    // Verify authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { stallId, status } = body

    if (!stallId || !status) {
      return NextResponse.json(
        { error: 'Missing required fields: stallId and status' },
        { status: 400 }
      )
    }

    if (!['available', 'booked'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be "available" or "booked"' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('stalls')
      .update({ status })
      .eq('id', stallId)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, stall: data })

  } catch (error) {
    console.error('Error updating stall:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


