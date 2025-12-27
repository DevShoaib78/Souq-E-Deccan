/**
 * Generate Seed SQL Script
 * 
 * This script reads all stalls from stall-maps.ts and generates
 * a complete SQL seed file for Supabase.
 * 
 * Run with: npx ts-node scripts/generate-seed.ts
 */

import { getAllStalls } from '../src/data/stall-maps'

function escapeSQL(str: string): string {
  return str.replace(/'/g, "''")
}

function generateSeedSQL(): string {
  const stalls = getAllStalls()
  
  let sql = `-- ============================================================================
-- SOUQ-E-DECCAN COMPLETE STALL DATA SEED
-- ============================================================================
-- Auto-generated from stall-maps.ts
-- Total stalls: ${stalls.length}
-- ============================================================================

-- Clear existing data
DELETE FROM stalls;

-- Insert all stalls
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
`

  const values = stalls.map((stall, index) => {
    const position = JSON.stringify(stall.position).replace(/'/g, "''")
    const stallType = stall.stallType || 'standard'
    const isLast = index === stalls.length - 1
    
    return `('${escapeSQL(stall.id)}', '${stall.layout}', '${escapeSQL(stall.label)}', '${stall.category}', 'available', '${position}', '${stallType}', '${stall.size}')${isLast ? ';' : ','}`
  })

  sql += values.join('\n')

  sql += `

-- ============================================================================
-- SEED COMPLETE
-- Total records inserted: ${stalls.length}
-- ============================================================================
`

  return sql
}

// Output to console (can be redirected to file)
console.log(generateSeedSQL())



