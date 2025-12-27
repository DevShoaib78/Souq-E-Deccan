// =============================================================================
// STALL MAP DATA - PIXEL-PERFECT OVERLAY MAPPING
// =============================================================================
// Coordinates measured from actual layout images:
//   - Lifestyle (Layout 11): 1224 × 1010 pixels
//   - Real Estate & Food (Layout 12): 1160 × 1001 pixels
// All values are percentages relative to image dimensions
// =============================================================================

import type { StallData, LayoutType } from '@/types/booking'

interface StallConfig {
  id: string
  label: string
  left: number      // percentage from left
  top: number       // percentage from top
  width: number     // percentage width
  height: number    // percentage height
  rotation?: number // degrees
  status?: 'available' | 'booked'
  stallType?: 'one-side-open' | 'two-side-open'
}

// =============================================================================
// LIFESTYLE LAYOUT (Layout 11) - V-SHAPED VENUE
// =============================================================================
// Image dimensions: 1224 x 1010 pixels
// Key measurements:
//   - Top row starts at x≈224px (18.3%), ends at x≈850px (69.4%)
//   - Top row y≈32px (3.2%), height≈35px (3.5%)
//   - Left wing angles at ~55° from vertical
//   - Right wing mirrors left wing
// =============================================================================

const createLifestyleStall = (config: StallConfig): StallData => ({
  id: `L-${config.id}`,
  label: config.label,
  layout: 'lifestyle',
  category: 'lifestyle',
  status: config.status || 'available',
  position: {
    left: config.left,
    top: config.top,
    width: config.width,
    height: config.height,
    rotation: config.rotation,
  },
  stallType: config.stallType || 'one-side-open',
  size: '3x2m',
})

// ============================================================================
// TOP ROW - Horizontal stalls (y≈3.2%, height≈3.5%)
// Stall widths: Orange≈4.1%, Red≈3.1%
// ============================================================================
const lifestyleTopRow: StallData[] = [
  // Orange stalls (two-side-open) - left side
  createLifestyleStall({ id: 'C106', label: 'C 106', left: 18.3, top: 3.2, width: 4.1, height: 3.5, stallType: 'two-side-open' }),
  createLifestyleStall({ id: 'B106', label: 'B 106', left: 22.5, top: 3.2, width: 4.1, height: 3.5, stallType: 'two-side-open' }),
  createLifestyleStall({ id: 'A106', label: 'A 106', left: 26.8, top: 3.2, width: 4.1, height: 3.5, stallType: 'two-side-open' }),
  // Red stalls (one-side-open) - center
  createLifestyleStall({ id: '106', label: '106', left: 31.0, top: 3.2, width: 3.1, height: 3.5 }),
  createLifestyleStall({ id: '105', label: '105', left: 34.2, top: 3.2, width: 3.1, height: 3.5 }),
  createLifestyleStall({ id: '104', label: '104', left: 37.4, top: 3.2, width: 3.1, height: 3.5 }),
  createLifestyleStall({ id: '103', label: '103', left: 40.6, top: 3.2, width: 3.1, height: 3.5 }),
  createLifestyleStall({ id: '102', label: '102', left: 43.8, top: 3.2, width: 3.1, height: 3.5 }),
  createLifestyleStall({ id: '101', label: '101', left: 47.0, top: 3.2, width: 3.1, height: 3.5 }),
  createLifestyleStall({ id: '100', label: '100', left: 50.2, top: 3.2, width: 3.1, height: 3.5 }),
  createLifestyleStall({ id: '99', label: '99', left: 53.4, top: 3.2, width: 3.1, height: 3.5 }),
  createLifestyleStall({ id: '98', label: '98', left: 56.6, top: 3.2, width: 3.1, height: 3.5 }),
  // Orange stalls (two-side-open) - right side
  createLifestyleStall({ id: '98A', label: '98 A', left: 59.8, top: 3.2, width: 4.1, height: 3.5, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '98B', label: '98 B', left: 64.0, top: 3.2, width: 4.1, height: 3.5, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '98C', label: '98 C', left: 68.2, top: 3.2, width: 4.1, height: 3.5, stallType: 'two-side-open' }),
]

// ============================================================================
// LEFT WING - OUTER EDGE (Stalls running down left diagonal)
// Rotation: approximately -55° to -75° depending on position
// ============================================================================
const lifestyleLeftOuter: StallData[] = [
  createLifestyleStall({ id: '117', label: '117', left: 14.1, top: 7.1, width: 2.5, height: 4.0, rotation: -20 }),
  createLifestyleStall({ id: '118', label: '118', left: 12.0, top: 11.9, width: 2.5, height: 4.0, rotation: -28 }),
  createLifestyleStall({ id: '142', label: '142', left: 10.0, top: 19.0, width: 2.5, height: 4.0, rotation: -35 }),
  createLifestyleStall({ id: '143', label: '143', left: 7.8, top: 26.0, width: 2.5, height: 4.0, rotation: -42 }),
  createLifestyleStall({ id: '144', label: '144', left: 5.6, top: 33.5, width: 2.5, height: 4.0, rotation: -48 }),
  createLifestyleStall({ id: '168', label: '168', left: 3.9, top: 41.5, width: 2.5, height: 4.0, rotation: -52 }),
  createLifestyleStall({ id: '169', label: '169', left: 2.2, top: 49.5, width: 2.5, height: 4.0, rotation: -58 }),
  createLifestyleStall({ id: '170', label: '170', left: 1.0, top: 57.5, width: 2.5, height: 4.0, rotation: -65 }),
  createLifestyleStall({ id: '194', label: '194', left: 0.4, top: 65.0, width: 2.5, height: 4.0, rotation: -72 }),
  createLifestyleStall({ id: '196', label: '196', left: 1.0, top: 73.5, width: 2.5, height: 4.0, rotation: -80 }),
  createLifestyleStall({ id: '197', label: '197', left: 2.8, top: 80.5, width: 2.5, height: 3.5, rotation: -85 }),
  createLifestyleStall({ id: '198', label: '198', left: 5.5, top: 86.0, width: 2.5, height: 3.5, rotation: 0 }),
  createLifestyleStall({ id: '199', label: '199', left: 9.0, top: 88.0, width: 2.5, height: 3.5, rotation: 0 }),
  // Orange bottom stalls
  createLifestyleStall({ id: '200', label: '200', left: 12.3, top: 89.5, width: 3.8, height: 3.2, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '201', label: '201', left: 16.5, top: 90.2, width: 3.8, height: 3.2, stallType: 'two-side-open' }),
]

// ============================================================================
// LEFT WING - INNER ROW 1 (107-111)
// ============================================================================
const lifestyleLeftInner1: StallData[] = [
  createLifestyleStall({ id: '107', label: '107', left: 19.5, top: 8.4, width: 3.2, height: 3.0, rotation: -18 }),
  createLifestyleStall({ id: '108', label: '108', left: 23.0, top: 8.0, width: 3.2, height: 3.0, rotation: -15 }),
  createLifestyleStall({ id: '109', label: '109', left: 26.8, top: 9.5, width: 3.2, height: 3.0, rotation: -12 }),
  createLifestyleStall({ id: '110', label: '110', left: 30.5, top: 9.5, width: 3.2, height: 3.0, rotation: -10 }),
  createLifestyleStall({ id: '111', label: '111', left: 34.2, top: 9.5, width: 3.2, height: 3.0, rotation: -8 }),
]

// ============================================================================
// LEFT WING - INNER ROW 2 (112-116)
// ============================================================================
const lifestyleLeftInner2: StallData[] = [
  createLifestyleStall({ id: '112', label: '112', left: 19.0, top: 12.0, width: 3.2, height: 3.0, rotation: -20 }),
  createLifestyleStall({ id: '113', label: '113', left: 22.5, top: 11.8, width: 3.2, height: 3.0, rotation: -18 }),
  createLifestyleStall({ id: '114', label: '114', left: 26.2, top: 12.8, width: 3.2, height: 3.0, rotation: -15 }),
  createLifestyleStall({ id: '115', label: '115', left: 29.9, top: 12.8, width: 3.2, height: 3.0, rotation: -12 }),
  createLifestyleStall({ id: '116', label: '116', left: 33.6, top: 12.8, width: 3.2, height: 3.0, rotation: -10 }),
]

// ============================================================================
// LEFT WING - INNER ROW 3 (119-123)
// ============================================================================
const lifestyleLeftInner3: StallData[] = [
  createLifestyleStall({ id: '119', label: '119', left: 14.7, top: 16.5, width: 3.2, height: 3.0, rotation: -28 }),
  createLifestyleStall({ id: '120', label: '120', left: 18.2, top: 16.2, width: 3.2, height: 3.0, rotation: -25 }),
  createLifestyleStall({ id: '121', label: '121', left: 21.8, top: 17.0, width: 3.2, height: 3.0, rotation: -22 }),
  createLifestyleStall({ id: '122', label: '122', left: 25.4, top: 17.0, width: 3.2, height: 3.0, rotation: -20 }),
  createLifestyleStall({ id: '123', label: '123', left: 29.0, top: 17.2, width: 3.2, height: 3.0, rotation: -18 }),
]

// ============================================================================
// LEFT WING - INNER ROW 4 (124-128)
// ============================================================================
const lifestyleLeftInner4: StallData[] = [
  createLifestyleStall({ id: '124', label: '124', left: 14.2, top: 20.2, width: 3.2, height: 3.0, rotation: -30 }),
  createLifestyleStall({ id: '125', label: '125', left: 17.8, top: 19.8, width: 3.2, height: 3.0, rotation: -28 }),
  createLifestyleStall({ id: '126', label: '126', left: 21.3, top: 20.5, width: 3.2, height: 3.0, rotation: -25 }),
  createLifestyleStall({ id: '127', label: '127', left: 24.9, top: 20.5, width: 3.2, height: 3.0, rotation: -22 }),
  createLifestyleStall({ id: '128', label: '128', left: 28.5, top: 20.8, width: 3.2, height: 3.0, rotation: -20 }),
]

// Edge stalls 129-131
const lifestyleLeftEdge1: StallData[] = [
  createLifestyleStall({ id: '129', label: '129', left: 32.5, top: 21.5, width: 2.8, height: 3.0, rotation: -15 }),
  createLifestyleStall({ id: '130', label: '130', left: 34.8, top: 27.5, width: 2.8, height: 3.0, rotation: -18 }),
  createLifestyleStall({ id: '131', label: '131', left: 36.5, top: 34.0, width: 2.8, height: 3.0, rotation: -15 }),
]

// ============================================================================
// LEFT WING - INNER ROW 5 (132-136)
// ============================================================================
const lifestyleLeftInner5: StallData[] = [
  createLifestyleStall({ id: '132', label: '132', left: 16.8, top: 26.5, width: 3.2, height: 3.0, rotation: -38 }),
  createLifestyleStall({ id: '133', label: '133', left: 20.3, top: 26.2, width: 3.2, height: 3.0, rotation: -35 }),
  createLifestyleStall({ id: '134', label: '134', left: 23.8, top: 27.0, width: 3.2, height: 3.0, rotation: -32 }),
  createLifestyleStall({ id: '135', label: '135', left: 27.3, top: 27.0, width: 3.2, height: 3.0, rotation: -28 }),
  createLifestyleStall({ id: '136', label: '136', left: 30.8, top: 27.5, width: 3.2, height: 3.0, rotation: -25 }),
]

// ============================================================================
// LEFT WING - INNER ROW 6 (137-141)
// ============================================================================
const lifestyleLeftInner6: StallData[] = [
  createLifestyleStall({ id: '137', label: '137', left: 16.2, top: 30.2, width: 3.2, height: 3.0, rotation: -40 }),
  createLifestyleStall({ id: '138', label: '138', left: 19.8, top: 29.8, width: 3.2, height: 3.0, rotation: -38 }),
  createLifestyleStall({ id: '139', label: '139', left: 23.3, top: 30.5, width: 3.2, height: 3.0, rotation: -35 }),
  createLifestyleStall({ id: '140', label: '140', left: 26.8, top: 30.5, width: 3.2, height: 3.0, rotation: -32 }),
  createLifestyleStall({ id: '141', label: '141', left: 30.3, top: 31.0, width: 3.2, height: 3.0, rotation: -28 }),
]

// ============================================================================
// LEFT WING - INNER ROW 7 (145-149)
// ============================================================================
const lifestyleLeftInner7: StallData[] = [
  createLifestyleStall({ id: '145', label: '145', left: 10.5, top: 37.5, width: 3.2, height: 3.0, rotation: -45 }),
  createLifestyleStall({ id: '146', label: '146', left: 14.0, top: 37.2, width: 3.2, height: 3.0, rotation: -42 }),
  createLifestyleStall({ id: '147', label: '147', left: 17.5, top: 37.8, width: 3.2, height: 3.0, rotation: -40 }),
  createLifestyleStall({ id: '148', label: '148', left: 21.0, top: 37.8, width: 3.2, height: 3.0, rotation: -38 }),
  createLifestyleStall({ id: '149', label: '149', left: 24.5, top: 38.2, width: 3.2, height: 3.0, rotation: -35 }),
]

// ============================================================================
// LEFT WING - INNER ROW 8 (150-154)
// ============================================================================
const lifestyleLeftInner8: StallData[] = [
  createLifestyleStall({ id: '150', label: '150', left: 10.0, top: 41.0, width: 3.2, height: 3.0, rotation: -48 }),
  createLifestyleStall({ id: '151', label: '151', left: 13.5, top: 40.8, width: 3.2, height: 3.0, rotation: -45 }),
  createLifestyleStall({ id: '152', label: '152', left: 17.0, top: 41.2, width: 3.2, height: 3.0, rotation: -42 }),
  createLifestyleStall({ id: '153', label: '153', left: 20.5, top: 41.2, width: 3.2, height: 3.0, rotation: -40 }),
  createLifestyleStall({ id: '154', label: '154', left: 24.0, top: 41.8, width: 3.2, height: 3.0, rotation: -38 }),
]

// Edge stalls 155-157
const lifestyleLeftEdge2: StallData[] = [
  createLifestyleStall({ id: '155', label: '155', left: 28.2, top: 43.5, width: 2.8, height: 3.0, rotation: -32 }),
  createLifestyleStall({ id: '156', label: '156', left: 31.0, top: 49.0, width: 2.8, height: 3.0, rotation: -28 }),
  createLifestyleStall({ id: '157', label: '157', left: 33.2, top: 55.0, width: 2.8, height: 3.0, rotation: -25 }),
]

// ============================================================================
// LEFT WING - INNER ROW 9 (158-161)
// ============================================================================
const lifestyleLeftInner9: StallData[] = [
  createLifestyleStall({ id: '158', label: '158', left: 7.8, top: 50.0, width: 3.2, height: 3.0, rotation: -55 }),
  createLifestyleStall({ id: '159', label: '159', left: 11.3, top: 49.5, width: 3.2, height: 3.0, rotation: -52 }),
  createLifestyleStall({ id: '160', label: '160', left: 14.8, top: 50.2, width: 3.2, height: 3.0, rotation: -50 }),
  createLifestyleStall({ id: '161', label: '161', left: 18.3, top: 50.2, width: 3.2, height: 3.0, rotation: -48 }),
]

// ============================================================================
// LEFT WING - INNER ROW 10 (163-167, 162)
// ============================================================================
const lifestyleLeftInner10: StallData[] = [
  createLifestyleStall({ id: '163', label: '163', left: 7.2, top: 53.5, width: 3.2, height: 3.0, rotation: -58 }),
  createLifestyleStall({ id: '164', label: '164', left: 10.8, top: 53.2, width: 3.2, height: 3.0, rotation: -55 }),
  createLifestyleStall({ id: '165', label: '165', left: 14.3, top: 53.8, width: 3.2, height: 3.0, rotation: -52 }),
  createLifestyleStall({ id: '166', label: '166', left: 17.8, top: 53.8, width: 3.2, height: 3.0, rotation: -50 }),
  createLifestyleStall({ id: '167', label: '167', left: 21.3, top: 54.2, width: 3.2, height: 3.0, rotation: -48 }),
  createLifestyleStall({ id: '162', label: '162', left: 24.8, top: 55.0, width: 3.2, height: 3.0, rotation: -45 }),
]

// ============================================================================
// LEFT WING - INNER ROW 11 (171-175)
// ============================================================================
const lifestyleLeftInner11: StallData[] = [
  createLifestyleStall({ id: '171', label: '171', left: 5.0, top: 60.5, width: 3.2, height: 3.0, rotation: -62 }),
  createLifestyleStall({ id: '172', label: '172', left: 8.5, top: 60.0, width: 3.2, height: 3.0, rotation: -60 }),
  createLifestyleStall({ id: '173', label: '173', left: 12.0, top: 60.5, width: 3.2, height: 3.0, rotation: -58 }),
  createLifestyleStall({ id: '174', label: '174', left: 15.5, top: 60.5, width: 3.2, height: 3.0, rotation: -55 }),
  createLifestyleStall({ id: '175', label: '175', left: 19.0, top: 61.0, width: 3.2, height: 3.0, rotation: -52 }),
]

// ============================================================================
// LEFT WING - INNER ROW 12 (176-180)
// ============================================================================
const lifestyleLeftInner12: StallData[] = [
  createLifestyleStall({ id: '176', label: '176', left: 4.5, top: 64.0, width: 3.2, height: 3.0, rotation: -65 }),
  createLifestyleStall({ id: '177', label: '177', left: 8.0, top: 63.5, width: 3.2, height: 3.0, rotation: -62 }),
  createLifestyleStall({ id: '178', label: '178', left: 11.5, top: 64.0, width: 3.2, height: 3.0, rotation: -60 }),
  createLifestyleStall({ id: '179', label: '179', left: 15.0, top: 64.0, width: 3.2, height: 3.0, rotation: -58 }),
  createLifestyleStall({ id: '180', label: '180', left: 18.5, top: 64.5, width: 3.2, height: 3.0, rotation: -55 }),
]

// Edge stalls 181-183
const lifestyleLeftEdge3: StallData[] = [
  createLifestyleStall({ id: '181', label: '181', left: 22.8, top: 63.0, width: 2.8, height: 3.0, rotation: -48 }),
  createLifestyleStall({ id: '182', label: '182', left: 25.2, top: 69.0, width: 2.8, height: 3.0, rotation: -45 }),
  createLifestyleStall({ id: '183', label: '183', left: 27.5, top: 75.5, width: 2.8, height: 3.0, rotation: -42 }),
]

// ============================================================================
// LEFT WING - INNER ROW 13 (184-187)
// ============================================================================
const lifestyleLeftInner13: StallData[] = [
  createLifestyleStall({ id: '184', label: '184', left: 4.8, top: 71.5, width: 3.2, height: 3.0, rotation: -70 }),
  createLifestyleStall({ id: '185', label: '185', left: 8.2, top: 71.0, width: 3.2, height: 3.0, rotation: -68 }),
  createLifestyleStall({ id: '186', label: '186', left: 11.7, top: 71.5, width: 3.2, height: 3.0, rotation: -65 }),
  createLifestyleStall({ id: '187', label: '187', left: 15.2, top: 71.8, width: 3.2, height: 3.0, rotation: -62 }),
]

// ============================================================================
// LEFT WING - INNER ROW 14 (189-193, 188)
// ============================================================================
const lifestyleLeftInner14: StallData[] = [
  createLifestyleStall({ id: '189', label: '189', left: 7.5, top: 75.0, width: 3.2, height: 3.0, rotation: -72 }),
  createLifestyleStall({ id: '190', label: '190', left: 11.0, top: 74.5, width: 3.2, height: 3.0, rotation: -70 }),
  createLifestyleStall({ id: '191', label: '191', left: 14.5, top: 75.0, width: 3.2, height: 3.0, rotation: -68 }),
  createLifestyleStall({ id: '192', label: '192', left: 18.0, top: 75.5, width: 3.2, height: 3.0, rotation: -65 }),
  createLifestyleStall({ id: '188', label: '188', left: 21.5, top: 76.0, width: 3.2, height: 3.0, rotation: -60 }),
  createLifestyleStall({ id: '193', label: '193', left: 25.0, top: 77.0, width: 3.2, height: 3.0, rotation: -55 }),
]

// ============================================================================
// RIGHT WING - OUTER EDGE (Stalls running down right diagonal)
// ============================================================================
const lifestyleRightOuter: StallData[] = [
  createLifestyleStall({ id: '87', label: '87', left: 83.4, top: 7.1, width: 2.5, height: 4.0, rotation: 20 }),
  createLifestyleStall({ id: '86', label: '86', left: 85.5, top: 11.9, width: 2.5, height: 4.0, rotation: 28 }),
  // Orange stalls
  createLifestyleStall({ id: '85', label: '85', left: 87.2, top: 17.5, width: 2.5, height: 4.0, rotation: 32, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '80', label: '80', left: 88.5, top: 22.5, width: 2.5, height: 4.0, rotation: 38, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '62', label: '62', left: 90.0, top: 30.0, width: 2.5, height: 4.0, rotation: 42 }),
  createLifestyleStall({ id: '61', label: '61', left: 91.2, top: 36.5, width: 2.5, height: 4.0, rotation: 48 }),
  createLifestyleStall({ id: '60', label: '60', left: 92.3, top: 43.5, width: 2.5, height: 4.0, rotation: 52 }),
  // Orange stalls
  createLifestyleStall({ id: '59', label: '59', left: 93.2, top: 49.0, width: 2.5, height: 4.0, rotation: 55, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '54', label: '54', left: 93.8, top: 54.5, width: 2.5, height: 4.0, rotation: 58, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '36', label: '36', left: 94.3, top: 60.5, width: 2.5, height: 4.0, rotation: 62 }),
  createLifestyleStall({ id: '35', label: '35', left: 94.6, top: 67.0, width: 2.5, height: 4.0, rotation: 68 }),
  createLifestyleStall({ id: '34', label: '34', left: 94.3, top: 72.5, width: 2.5, height: 4.0, rotation: 72 }),
  // Orange stalls
  createLifestyleStall({ id: '33', label: '33', left: 93.5, top: 77.5, width: 2.5, height: 4.0, rotation: 75, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '28', label: '28', left: 92.0, top: 82.0, width: 2.5, height: 4.0, rotation: 78, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '08', label: '08', left: 90.0, top: 86.0, width: 2.5, height: 3.5, rotation: 82 }),
  createLifestyleStall({ id: '07', label: '07', left: 87.0, top: 89.0, width: 2.5, height: 3.5, rotation: 85 }),
  createLifestyleStall({ id: '06', label: '06', left: 83.5, top: 91.0, width: 2.5, height: 3.5, rotation: 88 }),
  createLifestyleStall({ id: '05', label: '05', left: 80.0, top: 92.5, width: 2.5, height: 3.5, rotation: 0 }),
  // Orange bottom stalls
  createLifestyleStall({ id: '04', label: '04', left: 76.0, top: 93.0, width: 3.5, height: 3.0, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '03', label: '03', left: 72.2, top: 93.0, width: 3.5, height: 3.0, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '02', label: '02', left: 68.4, top: 93.0, width: 3.5, height: 3.0, stallType: 'two-side-open' }),
  createLifestyleStall({ id: '01', label: '01', left: 64.6, top: 93.0, width: 3.5, height: 3.0, stallType: 'two-side-open' }),
]

// ============================================================================
// RIGHT WING - INNER ROW 1 (93-97)
// ============================================================================
const lifestyleRightInner1: StallData[] = [
  createLifestyleStall({ id: '93', label: '93', left: 77.3, top: 8.4, width: 3.2, height: 3.0, rotation: 18 }),
  createLifestyleStall({ id: '94', label: '94', left: 73.8, top: 8.0, width: 3.2, height: 3.0, rotation: 15 }),
  createLifestyleStall({ id: '95', label: '95', left: 70.0, top: 8.0, width: 3.2, height: 3.0, rotation: 12 }),
  createLifestyleStall({ id: '96', label: '96', left: 66.5, top: 8.0, width: 3.2, height: 3.0, rotation: 10 }),
  createLifestyleStall({ id: '97', label: '97', left: 62.5, top: 8.0, width: 3.2, height: 3.0, rotation: 8 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 2 (88-92)
// ============================================================================
const lifestyleRightInner2: StallData[] = [
  createLifestyleStall({ id: '88', label: '88', left: 77.8, top: 12.0, width: 3.2, height: 3.0, rotation: 20 }),
  createLifestyleStall({ id: '89', label: '89', left: 74.3, top: 11.8, width: 3.2, height: 3.0, rotation: 18 }),
  createLifestyleStall({ id: '90', label: '90', left: 70.5, top: 11.5, width: 3.2, height: 3.0, rotation: 15 }),
  createLifestyleStall({ id: '91', label: '91', left: 67.0, top: 11.5, width: 3.2, height: 3.0, rotation: 12 }),
  createLifestyleStall({ id: '92', label: '92', left: 63.0, top: 11.5, width: 3.2, height: 3.0, rotation: 10 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 3 (81-84)
// ============================================================================
const lifestyleRightInner3: StallData[] = [
  createLifestyleStall({ id: '81', label: '81', left: 69.5, top: 20.5, width: 3.2, height: 3.0, rotation: 28 }),
  createLifestyleStall({ id: '82', label: '82', left: 73.0, top: 20.2, width: 3.2, height: 3.0, rotation: 25 }),
  createLifestyleStall({ id: '83', label: '83', left: 76.5, top: 20.2, width: 3.2, height: 3.0, rotation: 22 }),
  createLifestyleStall({ id: '84', label: '84', left: 80.0, top: 20.5, width: 3.2, height: 3.0, rotation: 20 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 4 (76-79)
// ============================================================================
const lifestyleRightInner4: StallData[] = [
  createLifestyleStall({ id: '76', label: '76', left: 69.0, top: 24.0, width: 3.2, height: 3.0, rotation: 30 }),
  createLifestyleStall({ id: '77', label: '77', left: 72.5, top: 23.8, width: 3.2, height: 3.0, rotation: 28 }),
  createLifestyleStall({ id: '78', label: '78', left: 76.0, top: 23.8, width: 3.2, height: 3.0, rotation: 25 }),
  createLifestyleStall({ id: '79', label: '79', left: 79.5, top: 24.0, width: 3.2, height: 3.0, rotation: 22 }),
]

// Edge stalls 75, 74, 73
const lifestyleRightEdge1: StallData[] = [
  createLifestyleStall({ id: '75', label: '75', left: 64.5, top: 22.5, width: 2.8, height: 3.0, rotation: 25 }),
  createLifestyleStall({ id: '74', label: '74', left: 62.3, top: 28.5, width: 2.8, height: 3.0, rotation: 22 }),
  createLifestyleStall({ id: '73', label: '73', left: 60.5, top: 35.0, width: 2.8, height: 3.0, rotation: 18 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 5 (68-72)
// ============================================================================
const lifestyleRightInner5: StallData[] = [
  createLifestyleStall({ id: '68', label: '68', left: 77.5, top: 30.5, width: 3.2, height: 3.0, rotation: 35 }),
  createLifestyleStall({ id: '69', label: '69', left: 74.0, top: 30.2, width: 3.2, height: 3.0, rotation: 32 }),
  createLifestyleStall({ id: '70', label: '70', left: 70.5, top: 30.5, width: 3.2, height: 3.0, rotation: 28 }),
  createLifestyleStall({ id: '71', label: '71', left: 67.0, top: 30.8, width: 3.2, height: 3.0, rotation: 25 }),
  createLifestyleStall({ id: '72', label: '72', left: 63.5, top: 31.2, width: 3.2, height: 3.0, rotation: 22 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 6 (63-67)
// ============================================================================
const lifestyleRightInner6: StallData[] = [
  createLifestyleStall({ id: '63', label: '63', left: 78.0, top: 34.0, width: 3.2, height: 3.0, rotation: 38 }),
  createLifestyleStall({ id: '64', label: '64', left: 74.5, top: 33.8, width: 3.2, height: 3.0, rotation: 35 }),
  createLifestyleStall({ id: '65', label: '65', left: 71.0, top: 34.0, width: 3.2, height: 3.0, rotation: 32 }),
  createLifestyleStall({ id: '66', label: '66', left: 67.5, top: 34.2, width: 3.2, height: 3.0, rotation: 28 }),
  createLifestyleStall({ id: '67', label: '67', left: 64.0, top: 34.8, width: 3.2, height: 3.0, rotation: 25 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 7 (55-58)
// ============================================================================
const lifestyleRightInner7: StallData[] = [
  createLifestyleStall({ id: '55', label: '55', left: 79.0, top: 42.5, width: 3.2, height: 3.0, rotation: 45 }),
  createLifestyleStall({ id: '56', label: '56', left: 75.5, top: 42.2, width: 3.2, height: 3.0, rotation: 42 }),
  createLifestyleStall({ id: '57', label: '57', left: 72.0, top: 42.5, width: 3.2, height: 3.0, rotation: 38 }),
  createLifestyleStall({ id: '58', label: '58', left: 68.5, top: 42.8, width: 3.2, height: 3.0, rotation: 35 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 8 (50-53)
// ============================================================================
const lifestyleRightInner8: StallData[] = [
  createLifestyleStall({ id: '50', label: '50', left: 79.5, top: 46.0, width: 3.2, height: 3.0, rotation: 48 }),
  createLifestyleStall({ id: '51', label: '51', left: 76.0, top: 45.8, width: 3.2, height: 3.0, rotation: 45 }),
  createLifestyleStall({ id: '52', label: '52', left: 72.5, top: 46.0, width: 3.2, height: 3.0, rotation: 42 }),
  createLifestyleStall({ id: '53', label: '53', left: 69.0, top: 46.2, width: 3.2, height: 3.0, rotation: 38 }),
]

// Edge stalls 49, 48, 47
const lifestyleRightEdge2: StallData[] = [
  createLifestyleStall({ id: '49', label: '49', left: 65.0, top: 47.0, width: 2.8, height: 3.0, rotation: 32 }),
  createLifestyleStall({ id: '48', label: '48', left: 63.0, top: 53.0, width: 2.8, height: 3.0, rotation: 28 }),
  createLifestyleStall({ id: '47', label: '47', left: 61.2, top: 59.5, width: 2.8, height: 3.0, rotation: 25 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 9 (42-46)
// ============================================================================
const lifestyleRightInner9: StallData[] = [
  createLifestyleStall({ id: '42', label: '42', left: 80.5, top: 52.5, width: 3.2, height: 3.0, rotation: 52 }),
  createLifestyleStall({ id: '43', label: '43', left: 77.0, top: 52.2, width: 3.2, height: 3.0, rotation: 48 }),
  createLifestyleStall({ id: '44', label: '44', left: 73.5, top: 52.5, width: 3.2, height: 3.0, rotation: 45 }),
  createLifestyleStall({ id: '45', label: '45', left: 70.0, top: 52.8, width: 3.2, height: 3.0, rotation: 42 }),
  createLifestyleStall({ id: '46', label: '46', left: 66.5, top: 53.2, width: 3.2, height: 3.0, rotation: 38 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 10 (37-41)
// ============================================================================
const lifestyleRightInner10: StallData[] = [
  createLifestyleStall({ id: '37', label: '37', left: 81.0, top: 56.0, width: 3.2, height: 3.0, rotation: 55 }),
  createLifestyleStall({ id: '38', label: '38', left: 77.5, top: 55.8, width: 3.2, height: 3.0, rotation: 52 }),
  createLifestyleStall({ id: '39', label: '39', left: 74.0, top: 56.0, width: 3.2, height: 3.0, rotation: 48 }),
  createLifestyleStall({ id: '40', label: '40', left: 70.5, top: 56.2, width: 3.2, height: 3.0, rotation: 45 }),
  createLifestyleStall({ id: '41', label: '41', left: 67.0, top: 56.8, width: 3.2, height: 3.0, rotation: 42 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 11 (29-32)
// ============================================================================
const lifestyleRightInner11: StallData[] = [
  createLifestyleStall({ id: '29', label: '29', left: 81.5, top: 64.5, width: 3.2, height: 3.0, rotation: 60 }),
  createLifestyleStall({ id: '30', label: '30', left: 78.0, top: 64.2, width: 3.2, height: 3.0, rotation: 58 }),
  createLifestyleStall({ id: '31', label: '31', left: 74.5, top: 64.5, width: 3.2, height: 3.0, rotation: 55 }),
  createLifestyleStall({ id: '32', label: '32', left: 71.0, top: 64.8, width: 3.2, height: 3.0, rotation: 52 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 12 (24-27)
// ============================================================================
const lifestyleRightInner12: StallData[] = [
  createLifestyleStall({ id: '24', label: '24', left: 82.0, top: 68.0, width: 3.2, height: 3.0, rotation: 62 }),
  createLifestyleStall({ id: '25', label: '25', left: 78.5, top: 67.8, width: 3.2, height: 3.0, rotation: 60 }),
  createLifestyleStall({ id: '26', label: '26', left: 75.0, top: 68.0, width: 3.2, height: 3.0, rotation: 58 }),
  createLifestyleStall({ id: '27', label: '27', left: 71.5, top: 68.2, width: 3.2, height: 3.0, rotation: 55 }),
]

// Edge stalls 23, 21
const lifestyleRightEdge3: StallData[] = [
  createLifestyleStall({ id: '23', label: '23', left: 64.5, top: 66.5, width: 2.8, height: 3.0, rotation: 45 }),
  createLifestyleStall({ id: '21', label: '21', left: 63.0, top: 73.5, width: 2.8, height: 3.0, rotation: 42 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 13 (14-20)
// ============================================================================
const lifestyleRightInner13: StallData[] = [
  createLifestyleStall({ id: '14', label: '14', left: 81.0, top: 80.0, width: 3.2, height: 3.0, rotation: 72 }),
  createLifestyleStall({ id: '15', label: '15', left: 77.5, top: 78.5, width: 3.2, height: 3.0, rotation: 70 }),
  createLifestyleStall({ id: '16', label: '16', left: 74.0, top: 77.5, width: 3.2, height: 3.0, rotation: 68 }),
  createLifestyleStall({ id: '17', label: '17', left: 70.5, top: 76.5, width: 3.2, height: 3.0, rotation: 65 }),
  createLifestyleStall({ id: '18', label: '18', left: 67.0, top: 76.0, width: 3.2, height: 3.0, rotation: 62 }),
  createLifestyleStall({ id: '19', label: '19', left: 64.0, top: 78.0, width: 3.2, height: 3.0, rotation: 58 }),
  createLifestyleStall({ id: '20', label: '20', left: 67.5, top: 79.5, width: 3.2, height: 3.0, rotation: 55 }),
]

// ============================================================================
// RIGHT WING - INNER ROW 14 (09-13)
// ============================================================================
const lifestyleRightInner14: StallData[] = [
  createLifestyleStall({ id: '09', label: '09', left: 74.0, top: 82.5, width: 3.2, height: 3.0, rotation: 75 }),
  createLifestyleStall({ id: '10', label: '10', left: 70.5, top: 81.5, width: 3.2, height: 3.0, rotation: 72 }),
  createLifestyleStall({ id: '11', label: '11', left: 67.0, top: 83.0, width: 3.2, height: 3.0, rotation: 70 }),
  createLifestyleStall({ id: '12', label: '12', left: 70.5, top: 84.5, width: 3.2, height: 3.0, rotation: 68 }),
  createLifestyleStall({ id: '13', label: '13', left: 74.5, top: 85.5, width: 3.2, height: 3.0, rotation: 65 }),
]

// Combine all lifestyle stalls
const lifestyleStalls: StallData[] = [
  ...lifestyleTopRow,
  ...lifestyleLeftOuter,
  ...lifestyleLeftInner1,
  ...lifestyleLeftInner2,
  ...lifestyleLeftInner3,
  ...lifestyleLeftInner4,
  ...lifestyleLeftEdge1,
  ...lifestyleLeftInner5,
  ...lifestyleLeftInner6,
  ...lifestyleLeftInner7,
  ...lifestyleLeftInner8,
  ...lifestyleLeftEdge2,
  ...lifestyleLeftInner9,
  ...lifestyleLeftInner10,
  ...lifestyleLeftInner11,
  ...lifestyleLeftInner12,
  ...lifestyleLeftEdge3,
  ...lifestyleLeftInner13,
  ...lifestyleLeftInner14,
  ...lifestyleRightOuter,
  ...lifestyleRightInner1,
  ...lifestyleRightInner2,
  ...lifestyleRightInner3,
  ...lifestyleRightInner4,
  ...lifestyleRightEdge1,
  ...lifestyleRightInner5,
  ...lifestyleRightInner6,
  ...lifestyleRightInner7,
  ...lifestyleRightInner8,
  ...lifestyleRightEdge2,
  ...lifestyleRightInner9,
  ...lifestyleRightInner10,
  ...lifestyleRightInner11,
  ...lifestyleRightInner12,
  ...lifestyleRightEdge3,
  ...lifestyleRightInner13,
  ...lifestyleRightInner14,
]

// =============================================================================
// REAL ESTATE & FOOD LAYOUT (Layout 12) - GRID-BASED VENUE
// =============================================================================
// Image dimensions: 1160 x 1001 pixels
// Grid-based layout with rectangular stalls
// =============================================================================

const createRealEstateStall = (config: StallConfig): StallData => ({
  id: `RE-${config.id}`,
  label: config.label,
  layout: 'real-estate-food',
  category: 'real-estate',
  status: config.status || 'available',
  position: {
    left: config.left,
    top: config.top,
    width: config.width,
    height: config.height,
    rotation: config.rotation,
  },
  stallType: config.stallType || 'standard',
  size: '3x2m',
})

const createFoodStall = (config: StallConfig): StallData => ({
  id: `F-${config.id}`,
  label: config.label,
  layout: 'real-estate-food',
  category: 'food',
  status: config.status || 'available',
  position: {
    left: config.left,
    top: config.top,
    width: config.width,
    height: config.height,
    rotation: config.rotation,
  },
  stallType: config.stallType || 'standard',
  size: '3x2m',
})

// ============================================================================
// REAL ESTATE - TOP ROW (near stage): RE S32 to RE S36
// Measured: row starts at x≈553, y≈46, each stall ~68px wide, ~54px tall
// ============================================================================
const realEstateTopRow: StallData[] = [
  createRealEstateStall({ id: 'S36', label: 'RE S 36', left: 47.7, top: 4.6, width: 5.9, height: 5.4 }),
  createRealEstateStall({ id: 'S35', label: 'RE S 35', left: 54.0, top: 4.6, width: 5.9, height: 5.4 }),
  createRealEstateStall({ id: 'S34', label: 'RE S 34', left: 60.3, top: 4.6, width: 5.9, height: 5.4 }),
  createRealEstateStall({ id: 'S33', label: 'RE S 33', left: 66.6, top: 4.6, width: 5.9, height: 5.4 }),
  createRealEstateStall({ id: 'S32', label: 'RE S 32', left: 72.9, top: 4.6, width: 5.9, height: 5.4 }),
]

// ============================================================================
// REAL ESTATE - RIGHT COLUMN: RE S28 to RE S31
// Measured: x≈994, width≈58, height≈54, spacing between rows ~58px
// ============================================================================
const realEstateRightColumn: StallData[] = [
  createRealEstateStall({ id: 'S31', label: 'RE S 31', left: 85.7, top: 13.0, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S30', label: 'RE S 30', left: 85.7, top: 18.8, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S29', label: 'RE S 29', left: 85.7, top: 24.6, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S28', label: 'RE S 28', left: 85.7, top: 30.8, width: 5.0, height: 5.4 }),
]

// ============================================================================
// REAL ESTATE - SECOND ROW FROM RIGHT: RE S22 to RE S27
// Two columns: S24/S23/S22 on left, S25/S26/S27 on right
// ============================================================================
const realEstateRightColumn2: StallData[] = [
  createRealEstateStall({ id: 'S24', label: 'RE S 24', left: 60.5, top: 18.8, width: 5.5, height: 5.4 }),
  createRealEstateStall({ id: 'S23', label: 'RE S 23', left: 60.5, top: 24.6, width: 5.5, height: 5.4 }),
  createRealEstateStall({ id: 'S22', label: 'RE S 22', left: 60.5, top: 30.8, width: 5.5, height: 5.4 }),
  createRealEstateStall({ id: 'S25', label: 'RE S 25', left: 72.5, top: 18.8, width: 5.5, height: 5.4 }),
  createRealEstateStall({ id: 'S26', label: 'RE S 26', left: 72.5, top: 24.6, width: 5.5, height: 5.4 }),
  createRealEstateStall({ id: 'S27', label: 'RE S 27', left: 72.5, top: 30.8, width: 5.5, height: 5.4 }),
]

// ============================================================================
// REAL ESTATE - LEFT COLUMN: RE S1 to RE S5
// Measured: x≈66, y starts at 188, width≈58, height≈54
// ============================================================================
const realEstateLeftColumn: StallData[] = [
  createRealEstateStall({ id: 'S5', label: 'RE S 5', left: 5.7, top: 18.8, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S4', label: 'RE S 4', left: 5.7, top: 24.6, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S3', label: 'RE S 3', left: 5.7, top: 30.8, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S2', label: 'RE S 2', left: 5.7, top: 37.0, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S1', label: 'RE S 1', left: 5.7, top: 43.2, width: 5.0, height: 5.4 }),
]

// ============================================================================
// REAL ESTATE - INNER LEFT: RE S6, S7, S8
// Located to the right of S3-S1
// ============================================================================
const realEstateInnerLeft: StallData[] = [
  createRealEstateStall({ id: 'S6', label: 'RE S 6', left: 17.5, top: 30.8, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S7', label: 'RE S 7', left: 17.5, top: 37.0, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S8', label: 'RE S 8', left: 17.5, top: 43.2, width: 5.0, height: 5.4, stallType: 'two-side-open' }),
]

// ============================================================================
// REAL ESTATE - CENTER COLUMN 1: RE S9, S10, S11
// Located to the right of S6-S8
// ============================================================================
const realEstateCenter1: StallData[] = [
  createRealEstateStall({ id: 'S11', label: 'RE S 11', left: 30.0, top: 30.8, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S10', label: 'RE S 10', left: 30.0, top: 37.0, width: 5.0, height: 5.4 }),
  createRealEstateStall({ id: 'S9', label: 'RE S 9', left: 30.0, top: 43.2, width: 5.0, height: 5.4 }),
]

// ============================================================================
// REAL ESTATE - CENTER TWIN COLUMNS: RE S12-S21
// S16/S15/S14/S13/S12 on left column, S17/S18/S19/S20/S21 on right column
// ============================================================================
const realEstateCenter2: StallData[] = [
  createRealEstateStall({ id: 'S16', label: 'RE S 16', left: 41.5, top: 18.8, width: 4.8, height: 5.4 }),
  createRealEstateStall({ id: 'S17', label: 'RE S 17', left: 47.5, top: 18.8, width: 4.8, height: 5.4, stallType: 'two-side-open' }),
  createRealEstateStall({ id: 'S15', label: 'RE S 15', left: 41.5, top: 24.6, width: 4.8, height: 5.4 }),
  createRealEstateStall({ id: 'S18', label: 'RE S 18', left: 47.5, top: 24.6, width: 4.8, height: 5.4 }),
  createRealEstateStall({ id: 'S14', label: 'RE S 14', left: 41.5, top: 30.8, width: 4.8, height: 5.4 }),
  createRealEstateStall({ id: 'S19', label: 'RE S 19', left: 47.5, top: 30.8, width: 4.8, height: 5.4 }),
  createRealEstateStall({ id: 'S13', label: 'RE S 13', left: 41.5, top: 37.0, width: 4.8, height: 5.4 }),
  createRealEstateStall({ id: 'S20', label: 'RE S 20', left: 47.5, top: 37.0, width: 4.8, height: 5.4 }),
  createRealEstateStall({ id: 'S12', label: 'RE S 12', left: 41.5, top: 43.2, width: 4.8, height: 5.4 }),
  createRealEstateStall({ id: 'S21', label: 'RE S 21', left: 47.5, top: 43.2, width: 4.8, height: 5.4 }),
]

// ============================================================================
// FOOD STALLS - LEFT COLUMN: F1 to F4
// Located in the food court area, below RE S22
// ============================================================================
const foodLeftColumn: StallData[] = [
  createFoodStall({ id: 'F1', label: 'F1', left: 60.5, top: 37.0, width: 5.0, height: 4.8 }),
  createFoodStall({ id: 'F2', label: 'F2', left: 60.5, top: 42.2, width: 5.0, height: 4.8 }),
  createFoodStall({ id: 'F3', label: 'F3', left: 60.5, top: 47.4, width: 5.0, height: 4.8 }),
  createFoodStall({ id: 'F4', label: 'F4', left: 60.5, top: 52.6, width: 5.0, height: 4.8 }),
]

// ============================================================================
// FOOD STALLS - CENTER GRID: F5 to F12
// 2x4 grid of food stalls in the center-right area
// ============================================================================
const foodCenterGrid: StallData[] = [
  createFoodStall({ id: 'F8', label: 'F8', left: 69.5, top: 37.0, width: 4.2, height: 4.8 }),
  createFoodStall({ id: 'F9', label: 'F9', left: 74.2, top: 37.0, width: 4.2, height: 4.8 }),
  createFoodStall({ id: 'F7', label: 'F7', left: 69.5, top: 42.2, width: 4.2, height: 4.8 }),
  createFoodStall({ id: 'F10', label: 'F10', left: 74.2, top: 42.2, width: 4.2, height: 4.8 }),
  createFoodStall({ id: 'F6', label: 'F6', left: 69.5, top: 47.4, width: 4.2, height: 4.8 }),
  createFoodStall({ id: 'F11', label: 'F11', left: 74.2, top: 47.4, width: 4.2, height: 4.8 }),
  createFoodStall({ id: 'F5', label: 'F5', left: 69.5, top: 52.6, width: 4.2, height: 4.8 }),
  createFoodStall({ id: 'F12', label: 'F12', left: 74.2, top: 52.6, width: 4.2, height: 4.8 }),
]

// ============================================================================
// FOOD STALLS - RIGHT COLUMN: F13 to F16
// Right-most food column, below RE S28
// ============================================================================
const foodRightColumn: StallData[] = [
  createFoodStall({ id: 'F16', label: 'F16', left: 85.7, top: 37.0, width: 4.5, height: 4.8 }),
  createFoodStall({ id: 'F15', label: 'F15', left: 85.7, top: 42.2, width: 4.5, height: 4.8 }),
  createFoodStall({ id: 'F14', label: 'F14', left: 85.7, top: 47.4, width: 4.5, height: 4.8 }),
  createFoodStall({ id: 'F13', label: 'F13', left: 85.7, top: 52.6, width: 4.5, height: 4.8 }),
]

// ============================================================================
// FOOD STALLS - BOTTOM ROW: F17 to F26
// Horizontal row of food stalls below the circular seating areas
// ============================================================================
const foodBottomRow: StallData[] = [
  createFoodStall({ id: 'F17', label: 'F17', left: 31.0, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F18', label: 'F18', left: 35.5, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F19', label: 'F19', left: 40.0, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F20', label: 'F20', left: 44.5, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F21', label: 'F21', left: 49.0, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F22', label: 'F22', left: 53.5, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F23', label: 'F23', left: 58.0, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F24', label: 'F24', left: 69.5, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F25', label: 'F25', left: 74.0, top: 58.0, width: 4.2, height: 4.5 }),
  createFoodStall({ id: 'F26', label: 'F26', left: 78.5, top: 58.0, width: 4.2, height: 4.5 }),
]

// ============================================================================
// FOOD STALLS - FAR RIGHT COLUMN: F27 to F30
// Right edge column, below the main food grid
// ============================================================================
const foodFarRightColumn: StallData[] = [
  createFoodStall({ id: 'F27', label: 'F27', left: 85.7, top: 64.0, width: 4.5, height: 4.5 }),
  createFoodStall({ id: 'F28', label: 'F28', left: 85.7, top: 69.0, width: 4.5, height: 4.5 }),
  createFoodStall({ id: 'F29', label: 'F29', left: 85.7, top: 74.0, width: 4.5, height: 4.5 }),
  createFoodStall({ id: 'F30', label: 'F30', left: 85.7, top: 79.0, width: 4.5, height: 4.5 }),
]

// ============================================================================
// FOOD STALLS - BOTTOM RIGHT ROW: F31 to F34
// Bottom row near the "Seating Area" label
// ============================================================================
const foodBottomRightRow: StallData[] = [
  createFoodStall({ id: 'F34', label: 'F34', left: 59.0, top: 85.5, width: 4.5, height: 4.5 }),
  createFoodStall({ id: 'F33', label: 'F33', left: 63.8, top: 85.5, width: 4.5, height: 4.5 }),
  createFoodStall({ id: 'F32', label: 'F32', left: 68.6, top: 85.5, width: 4.5, height: 4.5 }),
  createFoodStall({ id: 'F31', label: 'F31', left: 73.4, top: 85.5, width: 4.5, height: 4.5 }),
]

// Combine all real estate and food stalls
const realEstateFoodStalls: StallData[] = [
  ...realEstateTopRow,
  ...realEstateRightColumn,
  ...realEstateRightColumn2,
  ...realEstateLeftColumn,
  ...realEstateInnerLeft,
  ...realEstateCenter1,
  ...realEstateCenter2,
  ...foodLeftColumn,
  ...foodCenterGrid,
  ...foodRightColumn,
  ...foodBottomRow,
  ...foodFarRightColumn,
  ...foodBottomRightRow,
]

// =============================================================================
// EXPORTS
// =============================================================================

export function getStallsByLayout(layout: LayoutType): StallData[] {
  switch (layout) {
    case 'lifestyle':
      return lifestyleStalls
    case 'real-estate-food':
      return realEstateFoodStalls
    default:
      return []
  }
}

export function getAllStalls(): StallData[] {
  return [...lifestyleStalls, ...realEstateFoodStalls]
}

export function getStallById(id: string): StallData | undefined {
  return getAllStalls().find(stall => stall.id === id)
}

export const stallCounts = {
  lifestyle: lifestyleStalls.length,
  'real-estate-food': realEstateFoodStalls.length,
  total: lifestyleStalls.length + realEstateFoodStalls.length,
}
