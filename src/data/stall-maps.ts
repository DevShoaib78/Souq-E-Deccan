// =============================================================================
// STALL MAP DATA - PRECISELY ALIGNED OVERLAYS
// =============================================================================
// All positions are percentages relative to the image container.
// Fine-tuned to match actual stall positions in layout images.
// =============================================================================

import type { StallData, LayoutType } from '@/types/booking'

// =============================================================================
// LIFESTYLE LAYOUT STALLS (Layout 11)
// =============================================================================
// V-shaped layout with numbered stalls
// Coordinates calibrated against actual image pixel positions
// =============================================================================

const createLifestyleStall = (
  id: string,
  label: string,
  left: number,
  top: number,
  width: number,
  height: number,
  status: 'available' | 'booked' = 'available'
): StallData => ({
  id: `L-${id}`,
  label,
  layout: 'lifestyle',
  category: 'lifestyle',
  status,
  position: { left, top, width, height },
  stallType: 'one-side-open',
  size: '3x2m',
})

// Standard stall dimensions (percentage)
const SW = 2.6    // Standard stall width
const SH = 2.5    // Standard stall height
const SW2 = 3.0   // Two-side-open stall width (wider)

// ============ TOP ROW (C106 to 98C) ============
// These are the horizontal stalls at the very top
const lifestyleTopRow: StallData[] = [
  createLifestyleStall('C106', 'C 106', 31.0, 5.5, SW2, SH),
  createLifestyleStall('B106', 'B 106', 34.5, 5.5, SW2, SH),
  createLifestyleStall('A106', 'A 106', 38.0, 5.5, SW2, SH),
  createLifestyleStall('106', '106', 41.5, 5.5, SW, SH),
  createLifestyleStall('105', '105', 44.5, 5.5, SW, SH),
  createLifestyleStall('104', '104', 47.5, 5.5, SW, SH),
  createLifestyleStall('103', '103', 50.5, 5.5, SW, SH),
  createLifestyleStall('102', '102', 53.5, 5.5, SW, SH),
  createLifestyleStall('101', '101', 56.5, 5.5, SW, SH),
  createLifestyleStall('100', '100', 59.5, 5.5, SW, SH),
  createLifestyleStall('99', '99', 62.5, 5.5, SW, SH),
  createLifestyleStall('98', '98', 65.5, 5.5, SW, SH),
  createLifestyleStall('98A', '98 A', 68.5, 5.5, SW2, SH),
  createLifestyleStall('98B', '98 B', 72.0, 5.5, SW2, SH),
  createLifestyleStall('98C', '98 C', 75.5, 5.5, SW2, SH),
]

// ============ LEFT WING - OUTER EDGE ============
const lifestyleLeftOuter: StallData[] = [
  createLifestyleStall('117', '117', 27.0, 9.0, SW, SH),
  createLifestyleStall('118', '118', 24.0, 13.0, SW, SH),
  createLifestyleStall('142', '142', 21.0, 19.5, SW, SH),
  createLifestyleStall('143', '143', 18.5, 26.0, SW, SH),
  createLifestyleStall('144', '144', 16.0, 32.5, SW, SH),
  createLifestyleStall('168', '168', 13.0, 40.0, SW, SH),
  createLifestyleStall('169', '169', 10.5, 47.5, SW, SH),
  createLifestyleStall('170', '170', 8.0, 54.5, SW, SH),
  createLifestyleStall('194', '194', 6.5, 63.0, SW, SH),
  createLifestyleStall('195', '195', 5.5, 69.5, SW, SH),
  createLifestyleStall('196', '196', 5.0, 75.5, SW, SH),
  createLifestyleStall('197', '197', 6.5, 81.5, SW, SH),
  createLifestyleStall('198', '198', 9.5, 85.5, SW, SH),
  createLifestyleStall('199', '199', 13.5, 87.0, SW, SH),
  createLifestyleStall('200', '200', 17.5, 87.5, SW2, SH),
  createLifestyleStall('201', '201', 21.5, 88.0, SW2, SH),
]

// ============ LEFT WING - INNER ROWS ============

// Row 107-116
const lifestyleLeftInner1: StallData[] = [
  createLifestyleStall('107', '107', 35.5, 10.5, SW, SH),
  createLifestyleStall('108', '108', 39.0, 10.5, SW, SH),
  createLifestyleStall('109', '109', 41.5, 12.0, SW, SH),
  createLifestyleStall('110', '110', 44.5, 12.0, SW, SH),
  createLifestyleStall('111', '111', 47.5, 12.0, SW, SH),
  createLifestyleStall('112', '112', 35.0, 13.5, SW, SH),
  createLifestyleStall('113', '113', 38.5, 13.5, SW, SH),
  createLifestyleStall('114', '114', 41.0, 15.0, SW, SH),
  createLifestyleStall('115', '115', 44.0, 15.0, SW, SH),
  createLifestyleStall('116', '116', 47.0, 15.0, SW, SH),
]

// Row 119-128
const lifestyleLeftInner2: StallData[] = [
  createLifestyleStall('119', '119', 29.5, 17.5, SW, SH),
  createLifestyleStall('120', '120', 33.0, 18.5, SW, SH),
  createLifestyleStall('121', '121', 36.0, 19.5, SW, SH),
  createLifestyleStall('122', '122', 39.0, 20.5, SW, SH),
  createLifestyleStall('123', '123', 42.0, 21.0, SW2, SH),
  createLifestyleStall('124', '124', 29.0, 20.5, SW, SH),
  createLifestyleStall('125', '125', 32.5, 21.5, SW, SH),
  createLifestyleStall('126', '126', 35.5, 22.5, SW, SH),
  createLifestyleStall('127', '127', 38.5, 23.5, SW, SH),
  createLifestyleStall('128', '128', 41.5, 24.0, SW2, SH),
  // Center stalls
  createLifestyleStall('129', '129', 49.5, 25.0, SW, SH),
  createLifestyleStall('130', '130', 49.0, 31.5, SW, SH),
  createLifestyleStall('131', '131', 48.5, 38.0, SW, SH),
]

// Row 132-141
const lifestyleLeftInner3: StallData[] = [
  createLifestyleStall('132', '132', 31.0, 28.5, SW2, SH),
  createLifestyleStall('133', '133', 34.5, 30.0, SW, SH),
  createLifestyleStall('134', '134', 37.5, 31.0, SW, SH),
  createLifestyleStall('135', '135', 40.5, 32.0, SW, SH),
  createLifestyleStall('136', '136', 43.5, 33.0, SW, SH),
  createLifestyleStall('137', '137', 30.5, 31.5, SW2, SH),
  createLifestyleStall('138', '138', 34.0, 33.0, SW, SH),
  createLifestyleStall('139', '139', 37.0, 34.0, SW, SH),
  createLifestyleStall('140', '140', 40.0, 35.0, SW, SH),
  createLifestyleStall('141', '141', 43.0, 36.0, SW, SH),
]

// Row 145-157
const lifestyleLeftInner4: StallData[] = [
  createLifestyleStall('145', '145', 25.0, 37.5, SW, SH),
  createLifestyleStall('146', '146', 28.0, 39.0, SW, SH),
  createLifestyleStall('147', '147', 31.0, 40.5, SW, SH),
  createLifestyleStall('148', '148', 34.0, 42.0, SW, SH),
  createLifestyleStall('149', '149', 37.0, 43.5, SW, SH),
  createLifestyleStall('150', '150', 24.5, 40.5, SW, SH),
  createLifestyleStall('151', '151', 27.5, 42.0, SW, SH),
  createLifestyleStall('152', '152', 30.5, 43.5, SW, SH),
  createLifestyleStall('153', '153', 33.5, 45.0, SW, SH),
  createLifestyleStall('154', '154', 36.5, 46.5, SW, SH),
  createLifestyleStall('155', '155', 45.0, 44.0, SW, SH),
  createLifestyleStall('156', '156', 44.5, 50.5, SW, SH),
  createLifestyleStall('157', '157', 44.0, 57.0, SW, SH),
]

// Row 158-167
const lifestyleLeftInner5: StallData[] = [
  createLifestyleStall('158', '158', 23.5, 51.5, SW, SH),
  createLifestyleStall('159', '159', 26.5, 53.5, SW, SH),
  createLifestyleStall('160', '160', 29.5, 55.5, SW, SH),
  createLifestyleStall('161', '161', 32.5, 57.0, SW, SH),
  createLifestyleStall('162', '162', 35.5, 59.0, SW, SH),
  createLifestyleStall('163', '163', 23.0, 54.5, SW, SH),
  createLifestyleStall('164', '164', 26.0, 56.5, SW, SH),
  createLifestyleStall('165', '165', 29.0, 58.5, SW, SH),
  createLifestyleStall('166', '166', 32.0, 60.5, SW, SH),
  createLifestyleStall('167', '167', 35.0, 62.5, SW, SH),
]

// Row 171-183
const lifestyleLeftInner6: StallData[] = [
  createLifestyleStall('171', '171', 18.0, 61.0, SW, SH),
  createLifestyleStall('172', '172', 21.0, 63.0, SW, SH),
  createLifestyleStall('173', '173', 24.0, 65.0, SW, SH),
  createLifestyleStall('174', '174', 27.0, 67.0, SW, SH),
  createLifestyleStall('175', '175', 30.0, 68.5, SW2, SH),
  createLifestyleStall('176', '176', 17.5, 64.0, SW, SH),
  createLifestyleStall('177', '177', 20.5, 66.0, SW, SH),
  createLifestyleStall('178', '178', 23.5, 68.0, SW, SH),
  createLifestyleStall('179', '179', 26.5, 70.0, SW, SH),
  createLifestyleStall('180', '180', 29.5, 72.0, SW2, SH),
  createLifestyleStall('181', '181', 37.0, 70.0, SW, SH),
  createLifestyleStall('182', '182', 36.5, 74.5, SW, SH),
  createLifestyleStall('183', '183', 36.0, 79.5, SW, SH),
]

// Row 184-193
const lifestyleLeftInner7: StallData[] = [
  createLifestyleStall('184', '184', 14.5, 72.5, SW, SH),
  createLifestyleStall('185', '185', 16.5, 78.0, SW, SH),
  createLifestyleStall('186', '186', 20.0, 79.5, SW, SH),
  createLifestyleStall('187', '187', 23.5, 80.5, SW, SH),
  createLifestyleStall('188', '188', 27.0, 81.5, SW, SH),
  createLifestyleStall('189', '189', 14.0, 80.0, SW, SH),
  createLifestyleStall('190', '190', 17.5, 81.5, SW, SH),
  createLifestyleStall('191', '191', 21.0, 83.0, SW, SH),
  createLifestyleStall('192', '192', 24.5, 84.0, SW, SH),
  createLifestyleStall('193', '193', 28.0, 85.0, SW, SH),
]

// ============ RIGHT WING - OUTER EDGE ============
const lifestyleRightOuter: StallData[] = [
  createLifestyleStall('87', '87', 79.5, 9.0, SW, SH),
  createLifestyleStall('86', '86', 82.0, 13.0, SW, SH),
  createLifestyleStall('62', '62', 84.5, 19.5, SW, SH),
  createLifestyleStall('61', '61', 87.0, 26.0, SW, SH),
  createLifestyleStall('60', '60', 89.0, 32.5, SW, SH),
  createLifestyleStall('36', '36', 91.0, 40.0, SW, SH),
  createLifestyleStall('35', '35', 92.5, 47.5, SW, SH),
  createLifestyleStall('34', '34', 93.5, 54.5, SW, SH),
  createLifestyleStall('33', '33', 94.5, 60.5, SW, SH),
  createLifestyleStall('08', '08', 94.5, 66.5, SW, SH),
  createLifestyleStall('07', '07', 94.0, 73.0, SW, SH),
  createLifestyleStall('06', '06', 93.5, 79.0, SW, SH),
  createLifestyleStall('05', '05', 91.5, 85.0, SW, SH),
  createLifestyleStall('04', '04', 88.0, 88.0, SW, SH),
  createLifestyleStall('03', '03', 84.0, 88.5, SW, SH),
  createLifestyleStall('02', '02', 80.0, 89.0, SW2, SH),
  createLifestyleStall('01', '01', 76.0, 89.5, SW2, SH),
]

// ============ RIGHT WING - INNER ROWS ============

// Row 93-92
const lifestyleRightInner1: StallData[] = [
  createLifestyleStall('93', '93', 76.5, 9.0, SW2, SH),
  createLifestyleStall('94', '94', 72.5, 10.5, SW, SH),
  createLifestyleStall('95', '95', 69.5, 10.5, SW, SH),
  createLifestyleStall('96', '96', 66.5, 10.5, SW, SH),
  createLifestyleStall('97', '97', 63.0, 13.0, SW, SH),
  createLifestyleStall('88', '88', 76.0, 12.0, SW, SH),
  createLifestyleStall('89', '89', 72.0, 13.5, SW, SH),
  createLifestyleStall('90', '90', 69.0, 13.5, SW, SH),
  createLifestyleStall('91', '91', 66.0, 13.5, SW, SH),
  createLifestyleStall('92', '92', 62.5, 16.0, SW, SH),
]

// Row 81-80
const lifestyleRightInner2: StallData[] = [
  createLifestyleStall('81', '81', 67.0, 21.0, SW, SH),
  createLifestyleStall('82', '82', 70.0, 21.0, SW, SH),
  createLifestyleStall('83', '83', 73.0, 21.0, SW, SH),
  createLifestyleStall('84', '84', 76.0, 21.0, SW, SH),
  createLifestyleStall('85', '85', 79.0, 21.0, SW, SH),
  createLifestyleStall('76', '76', 66.5, 24.0, SW, SH),
  createLifestyleStall('77', '77', 69.5, 24.0, SW, SH),
  createLifestyleStall('78', '78', 72.5, 24.0, SW, SH),
  createLifestyleStall('79', '79', 75.5, 24.0, SW, SH),
  createLifestyleStall('80', '80', 78.5, 24.0, SW, SH),
  // Center column
  createLifestyleStall('75', '75', 63.0, 25.5, SW, SH),
  createLifestyleStall('74', '74', 63.0, 31.0, SW, SH),
  createLifestyleStall('73', '73', 63.0, 37.0, SW, SH),
]

// Row 68-67
const lifestyleRightInner3: StallData[] = [
  createLifestyleStall('68', '68', 77.0, 30.0, SW2, SH),
  createLifestyleStall('69', '69', 73.5, 31.0, SW, SH),
  createLifestyleStall('70', '70', 70.5, 32.0, SW, SH),
  createLifestyleStall('71', '71', 67.5, 33.0, SW, SH),
  createLifestyleStall('72', '72', 64.5, 34.0, SW, SH),
  createLifestyleStall('63', '63', 76.5, 33.0, SW2, SH),
  createLifestyleStall('64', '64', 73.0, 34.0, SW, SH),
  createLifestyleStall('65', '65', 70.0, 35.0, SW, SH),
  createLifestyleStall('66', '66', 67.0, 36.0, SW, SH),
  createLifestyleStall('67', '67', 64.0, 37.0, SW, SH),
]

// Row 59-49
const lifestyleRightInner4: StallData[] = [
  createLifestyleStall('59', '59', 81.5, 39.0, SW, SH),
  createLifestyleStall('58', '58', 78.5, 39.0, SW, SH),
  createLifestyleStall('57', '57', 75.5, 39.0, SW, SH),
  createLifestyleStall('56', '56', 72.5, 39.0, SW, SH),
  createLifestyleStall('55', '55', 69.0, 41.5, SW, SH),
  createLifestyleStall('54', '54', 81.0, 42.0, SW, SH),
  createLifestyleStall('53', '53', 78.0, 43.0, SW, SH),
  createLifestyleStall('52', '52', 75.0, 44.5, SW, SH),
  createLifestyleStall('51', '51', 72.0, 45.5, SW, SH),
  createLifestyleStall('50', '50', 68.5, 44.5, SW, SH),
  createLifestyleStall('49', '49', 65.0, 47.0, SW, SH),
  createLifestyleStall('48', '48', 65.0, 52.5, SW, SH),
  createLifestyleStall('47', '47', 65.0, 58.0, SW, SH),
]

// Row 46-41
const lifestyleRightInner5: StallData[] = [
  createLifestyleStall('46', '46', 68.5, 56.5, SW, SH),
  createLifestyleStall('45', '45', 71.5, 55.5, SW, SH),
  createLifestyleStall('44', '44', 74.5, 54.5, SW, SH),
  createLifestyleStall('43', '43', 77.5, 53.5, SW, SH),
  createLifestyleStall('42', '42', 80.5, 52.5, SW2, SH),
  createLifestyleStall('41', '41', 69.0, 59.5, SW, SH),
  createLifestyleStall('40', '40', 72.0, 58.5, SW, SH),
  createLifestyleStall('39', '39', 75.0, 57.5, SW, SH),
  createLifestyleStall('38', '38', 78.0, 56.5, SW, SH),
  createLifestyleStall('37', '37', 81.0, 55.5, SW2, SH),
]

// Row 29-21
const lifestyleRightInner6: StallData[] = [
  createLifestyleStall('29', '29', 74.5, 65.0, SW, SH),
  createLifestyleStall('30', '30', 77.5, 64.0, SW, SH),
  createLifestyleStall('31', '31', 80.5, 63.0, SW, SH),
  createLifestyleStall('32', '32', 83.5, 62.0, SW, SH),
  createLifestyleStall('28', '28', 86.5, 64.5, SW, SH),
  createLifestyleStall('27', '27', 83.5, 67.0, SW, SH),
  createLifestyleStall('26', '26', 80.5, 68.5, SW, SH),
  createLifestyleStall('25', '25', 74.0, 68.5, SW, SH),
  createLifestyleStall('24', '24', 71.0, 70.5, SW, SH),
  createLifestyleStall('23', '23', 68.0, 72.5, SW, SH),
  createLifestyleStall('22', '22', 67.5, 77.0, SW, SH),
  createLifestyleStall('21', '21', 70.0, 81.0, SW, SH),
]

// Row 20-09
const lifestyleRightInner7: StallData[] = [
  createLifestyleStall('20', '20', 73.5, 79.5, SW, SH),
  createLifestyleStall('19', '19', 76.5, 78.5, SW, SH),
  createLifestyleStall('18', '18', 79.5, 77.5, SW, SH),
  createLifestyleStall('17', '17', 82.5, 76.5, SW2, SH),
  createLifestyleStall('16', '16', 85.5, 75.5, SW2, SH),
  createLifestyleStall('15', '15', 85.0, 82.5, SW, SH),
  createLifestyleStall('14', '14', 76.0, 84.5, SW, SH),
  createLifestyleStall('13', '13', 79.0, 83.5, SW, SH),
  createLifestyleStall('12', '12', 82.0, 82.5, SW, SH),
  createLifestyleStall('11', '11', 85.0, 79.0, SW, SH),
  createLifestyleStall('10', '10', 88.0, 75.5, SW, SH),
  createLifestyleStall('09', '09', 86.0, 78.5, SW, SH),
]

// Combine all lifestyle stalls
export const lifestyleStalls: StallData[] = [
  ...lifestyleTopRow,
  ...lifestyleLeftOuter,
  ...lifestyleLeftInner1,
  ...lifestyleLeftInner2,
  ...lifestyleLeftInner3,
  ...lifestyleLeftInner4,
  ...lifestyleLeftInner5,
  ...lifestyleLeftInner6,
  ...lifestyleLeftInner7,
  ...lifestyleRightOuter,
  ...lifestyleRightInner1,
  ...lifestyleRightInner2,
  ...lifestyleRightInner3,
  ...lifestyleRightInner4,
  ...lifestyleRightInner5,
  ...lifestyleRightInner6,
  ...lifestyleRightInner7,
]

// =============================================================================
// REAL ESTATE & FOOD LAYOUT STALLS (Layout 12)
// =============================================================================

const createRealEstateStall = (
  num: number,
  left: number,
  top: number,
  width: number,
  height: number,
  status: 'available' | 'booked' = 'available'
): StallData => ({
  id: `RE-S${num}`,
  label: `RE S ${num}`,
  layout: 'real-estate-food',
  category: 'real-estate',
  status,
  position: { left, top, width, height },
  stallType: 'standard',
})

const createFoodStall = (
  num: number,
  left: number,
  top: number,
  width: number,
  height: number,
  status: 'available' | 'booked' = 'available'
): StallData => ({
  id: `F-${num}`,
  label: `F${num}`,
  layout: 'real-estate-food',
  category: 'food',
  status,
  position: { left, top, width, height },
  stallType: 'standard',
})

// Stall dimensions for Real Estate & Food layout
const REW = 5.5   // RE stall width
const REH = 6.0   // RE stall height
const FW = 4.5    // Food stall width
const FH = 5.0    // Food stall height

// ============ REAL ESTATE STALLS ============

// Top row (near stage) - RE S 36-32
const realEstateTopRow: StallData[] = [
  createRealEstateStall(36, 51.0, 5.5, REW, REH),
  createRealEstateStall(35, 57.0, 5.5, REW, REH),
  createRealEstateStall(34, 63.0, 5.5, REW, REH),
  createRealEstateStall(33, 69.0, 5.5, REW, REH),
  createRealEstateStall(32, 75.0, 5.5, REW, REH),
]

// Right side - RE S 31
const realEstateRight1: StallData[] = [
  createRealEstateStall(31, 90.0, 11.5, REW, REH),
]

// Left column - RE S 5-1
const realEstateLeftCol: StallData[] = [
  createRealEstateStall(5, 5.5, 17.0, REW, REH),
  createRealEstateStall(4, 5.5, 24.5, REW, REH),
  createRealEstateStall(3, 5.5, 32.0, REW, REH),
  createRealEstateStall(2, 5.5, 39.5, REW, REH),
  createRealEstateStall(1, 5.5, 47.0, REW, REH),
]

// Inner left - RE S 6-8
const realEstateInnerLeft: StallData[] = [
  createRealEstateStall(6, 16.5, 32.0, REW, REH),
  createRealEstateStall(7, 16.5, 39.5, REW, REH),
  createRealEstateStall(8, 16.5, 47.0, REW, REH),
]

// Center-left - RE S 9-11
const realEstateCenterLeft: StallData[] = [
  createRealEstateStall(11, 29.0, 32.0, REW, REH),
  createRealEstateStall(10, 29.0, 39.5, REW, REH),
  createRealEstateStall(9, 29.0, 47.0, REW, REH),
]

// Center columns - RE S 12-21
const realEstateCenter: StallData[] = [
  createRealEstateStall(16, 43.0, 17.0, REW, REH),
  createRealEstateStall(17, 49.5, 17.0, REW, REH),
  createRealEstateStall(15, 43.0, 24.5, REW, REH),
  createRealEstateStall(18, 49.5, 24.5, REW, REH),
  createRealEstateStall(14, 43.0, 32.0, REW, REH),
  createRealEstateStall(19, 49.5, 32.0, REW, REH),
  createRealEstateStall(13, 43.0, 39.5, REW, REH),
  createRealEstateStall(20, 49.5, 39.5, REW, REH),
  createRealEstateStall(12, 43.0, 47.0, REW, REH),
  createRealEstateStall(21, 49.5, 47.0, REW, REH),
]

// Right center - RE S 22-27
const realEstateRightCenter: StallData[] = [
  createRealEstateStall(24, 61.0, 17.0, REW, REH),
  createRealEstateStall(25, 73.0, 17.0, REW, REH),
  createRealEstateStall(23, 61.0, 24.5, REW, REH),
  createRealEstateStall(26, 73.0, 24.5, REW, REH),
  createRealEstateStall(22, 61.0, 32.0, REW, REH),
  createRealEstateStall(27, 73.0, 32.0, REW, REH),
]

// Far right column - RE S 28-30
const realEstateRightCol: StallData[] = [
  createRealEstateStall(30, 90.0, 17.0, REW, REH),
  createRealEstateStall(29, 90.0, 24.5, REW, REH),
  createRealEstateStall(28, 90.0, 32.0, REW, REH),
]

// ============ FOOD STALLS ============

// Food column F1-F4
const foodCol1: StallData[] = [
  createFoodStall(1, 61.0, 39.5, FW, FH),
  createFoodStall(2, 61.0, 45.0, FW, FH),
  createFoodStall(3, 61.0, 50.5, FW, FH),
  createFoodStall(4, 61.0, 56.0, FW, FH),
]

// F5-F12 (2x4 grid)
const foodGrid1: StallData[] = [
  createFoodStall(8, 69.0, 39.5, FW, FH),
  createFoodStall(9, 74.5, 39.5, FW, FH),
  createFoodStall(7, 69.0, 45.0, FW, FH),
  createFoodStall(10, 74.5, 45.0, FW, FH),
  createFoodStall(6, 69.0, 50.5, FW, FH),
  createFoodStall(11, 74.5, 50.5, FW, FH),
  createFoodStall(5, 69.0, 56.0, FW, FH),
  createFoodStall(12, 74.5, 56.0, FW, FH),
]

// F13-F16 (right edge column)
const foodCol2: StallData[] = [
  createFoodStall(16, 90.0, 39.5, FW, FH),
  createFoodStall(15, 90.0, 45.0, FW, FH),
  createFoodStall(14, 90.0, 50.5, FW, FH),
  createFoodStall(13, 90.0, 56.0, FW, FH),
]

// F17-F23 (bottom horizontal row left)
const foodBottomRow1: StallData[] = [
  createFoodStall(17, 35.0, 64.0, FW, FH),
  createFoodStall(18, 39.5, 64.0, FW, FH),
  createFoodStall(19, 44.0, 64.0, FW, FH),
  createFoodStall(20, 48.5, 64.0, FW, FH),
  createFoodStall(21, 53.0, 64.0, FW, FH),
  createFoodStall(22, 57.5, 64.0, FW, FH),
  createFoodStall(23, 62.0, 64.0, FW, FH),
]

// F24-F26 (bottom horizontal row right)
const foodBottomRow2: StallData[] = [
  createFoodStall(24, 71.5, 64.0, FW, FH),
  createFoodStall(25, 76.0, 64.0, FW, FH),
  createFoodStall(26, 80.5, 64.0, FW, FH),
]

// F27-F30 (right edge below)
const foodRightEdge: StallData[] = [
  createFoodStall(27, 93.5, 70.5, FW, FH),
  createFoodStall(28, 93.5, 76.0, FW, FH),
  createFoodStall(29, 93.5, 81.5, FW, FH),
  createFoodStall(30, 93.5, 87.0, FW, FH),
]

// F31-F34 (bottom right corner)
const foodBottomCorner: StallData[] = [
  createFoodStall(31, 81.0, 93.0, FW, FH),
  createFoodStall(32, 76.5, 93.0, FW, FH),
  createFoodStall(33, 72.0, 93.0, FW, FH),
  createFoodStall(34, 67.5, 93.0, FW, FH),
]

// Combine all Real Estate & Food stalls
export const realEstateFoodStalls: StallData[] = [
  ...realEstateTopRow,
  ...realEstateRight1,
  ...realEstateLeftCol,
  ...realEstateInnerLeft,
  ...realEstateCenterLeft,
  ...realEstateCenter,
  ...realEstateRightCenter,
  ...realEstateRightCol,
  ...foodCol1,
  ...foodGrid1,
  ...foodCol2,
  ...foodBottomRow1,
  ...foodBottomRow2,
  ...foodRightEdge,
  ...foodBottomCorner,
]

// =============================================================================
// EXPORTED HELPERS
// =============================================================================

export function getStallsByLayout(layout: LayoutType): StallData[] {
  if (layout === 'lifestyle') {
    return lifestyleStalls
  }
  return realEstateFoodStalls
}

export function getStallById(stallId: string): StallData | undefined {
  const allStalls = [...lifestyleStalls, ...realEstateFoodStalls]
  return allStalls.find(stall => stall.id === stallId)
}

export function updateStallStatus(
  stalls: StallData[],
  stallId: string,
  newStatus: 'available' | 'booked'
): StallData[] {
  return stalls.map(stall =>
    stall.id === stallId ? { ...stall, status: newStatus } : stall
  )
}

export function getAvailableCount(stalls: StallData[]): number {
  return stalls.filter(stall => stall.status === 'available').length
}

export function getBookedCount(stalls: StallData[]): number {
  return stalls.filter(stall => stall.status === 'booked').length
}
