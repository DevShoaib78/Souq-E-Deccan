/**
 * Supabase Database Types
 * 
 * These types define the structure of our database tables.
 * They're used for type-safe database queries.
 */

export type StallStatus = 'available' | 'booked'
export type LayoutType = 'lifestyle' | 'real-estate-food'
export type StallType = 'one-side-open' | 'two-side-open' | 'standard'
export type Category = 'lifestyle' | 'real-estate' | 'food'

export interface StallPosition {
  left: number
  top: number
  width: number
  height: number
  rotation?: number
}

export interface StallRow {
  id: string
  layout: LayoutType
  label: string
  category: Category
  status: StallStatus
  position: StallPosition
  stall_type: StallType
  size: string
  created_at: string
  updated_at: string
}

export interface Database {
  public: {
    Tables: {
      stalls: {
        Row: StallRow
        Insert: Omit<StallRow, 'created_at' | 'updated_at'> & {
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Omit<StallRow, 'id'>>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      stall_status: StallStatus
      layout_type: LayoutType
      stall_type: StallType
      category: Category
    }
  }
}



