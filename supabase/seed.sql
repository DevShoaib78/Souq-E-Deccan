-- ============================================================================
-- SOUQ-E-DECCAN STALL DATA SEED
-- ============================================================================
-- Run this SQL after running schema.sql to populate stalls data
-- ============================================================================

-- Clear existing data (if any)
DELETE FROM stalls;

-- ============================================================================
-- LIFESTYLE ZONE STALLS
-- ============================================================================

-- Top Row
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('L-C106', 'lifestyle', 'C 106', 'lifestyle', 'available', '{"left": 18.3, "top": 3.2, "width": 4.1, "height": 3.5}', 'two-side-open', '3x2m'),
('L-B106', 'lifestyle', 'B 106', 'lifestyle', 'available', '{"left": 22.5, "top": 3.2, "width": 4.1, "height": 3.5}', 'two-side-open', '3x2m'),
('L-A106', 'lifestyle', 'A 106', 'lifestyle', 'available', '{"left": 26.8, "top": 3.2, "width": 4.1, "height": 3.5}', 'two-side-open', '3x2m'),
('L-106', 'lifestyle', '106', 'lifestyle', 'available', '{"left": 31.0, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-105', 'lifestyle', '105', 'lifestyle', 'available', '{"left": 34.2, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-104', 'lifestyle', '104', 'lifestyle', 'available', '{"left": 37.4, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-103', 'lifestyle', '103', 'lifestyle', 'available', '{"left": 40.6, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-102', 'lifestyle', '102', 'lifestyle', 'available', '{"left": 43.8, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-101', 'lifestyle', '101', 'lifestyle', 'available', '{"left": 47.0, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-100', 'lifestyle', '100', 'lifestyle', 'available', '{"left": 50.2, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-99', 'lifestyle', '99', 'lifestyle', 'available', '{"left": 53.4, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-98', 'lifestyle', '98', 'lifestyle', 'available', '{"left": 56.6, "top": 3.2, "width": 3.1, "height": 3.5}', 'one-side-open', '3x2m'),
('L-98A', 'lifestyle', '98 A', 'lifestyle', 'available', '{"left": 59.8, "top": 3.2, "width": 4.1, "height": 3.5}', 'two-side-open', '3x2m'),
('L-98B', 'lifestyle', '98 B', 'lifestyle', 'available', '{"left": 64.0, "top": 3.2, "width": 4.1, "height": 3.5}', 'two-side-open', '3x2m'),
('L-98C', 'lifestyle', '98 C', 'lifestyle', 'available', '{"left": 68.2, "top": 3.2, "width": 4.1, "height": 3.5}', 'two-side-open', '3x2m');

-- Left Wing Outer
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('L-117', 'lifestyle', '117', 'lifestyle', 'available', '{"left": 14.1, "top": 7.1, "width": 2.5, "height": 4.0, "rotation": -20}', 'one-side-open', '3x2m'),
('L-118', 'lifestyle', '118', 'lifestyle', 'available', '{"left": 12.0, "top": 11.9, "width": 2.5, "height": 4.0, "rotation": -28}', 'one-side-open', '3x2m'),
('L-142', 'lifestyle', '142', 'lifestyle', 'available', '{"left": 10.0, "top": 19.0, "width": 2.5, "height": 4.0, "rotation": -35}', 'one-side-open', '3x2m'),
('L-143', 'lifestyle', '143', 'lifestyle', 'available', '{"left": 7.8, "top": 26.0, "width": 2.5, "height": 4.0, "rotation": -42}', 'one-side-open', '3x2m'),
('L-144', 'lifestyle', '144', 'lifestyle', 'available', '{"left": 5.6, "top": 33.5, "width": 2.5, "height": 4.0, "rotation": -48}', 'one-side-open', '3x2m'),
('L-168', 'lifestyle', '168', 'lifestyle', 'available', '{"left": 3.9, "top": 41.5, "width": 2.5, "height": 4.0, "rotation": -52}', 'one-side-open', '3x2m'),
('L-169', 'lifestyle', '169', 'lifestyle', 'available', '{"left": 2.2, "top": 49.5, "width": 2.5, "height": 4.0, "rotation": -58}', 'one-side-open', '3x2m'),
('L-170', 'lifestyle', '170', 'lifestyle', 'available', '{"left": 1.0, "top": 57.5, "width": 2.5, "height": 4.0, "rotation": -65}', 'one-side-open', '3x2m'),
('L-194', 'lifestyle', '194', 'lifestyle', 'available', '{"left": 0.4, "top": 65.0, "width": 2.5, "height": 4.0, "rotation": -72}', 'one-side-open', '3x2m'),
('L-196', 'lifestyle', '196', 'lifestyle', 'available', '{"left": 1.0, "top": 73.5, "width": 2.5, "height": 4.0, "rotation": -80}', 'one-side-open', '3x2m'),
('L-197', 'lifestyle', '197', 'lifestyle', 'available', '{"left": 2.8, "top": 80.5, "width": 2.5, "height": 3.5, "rotation": -85}', 'one-side-open', '3x2m'),
('L-198', 'lifestyle', '198', 'lifestyle', 'available', '{"left": 5.5, "top": 86.0, "width": 2.5, "height": 3.5}', 'one-side-open', '3x2m'),
('L-199', 'lifestyle', '199', 'lifestyle', 'available', '{"left": 9.0, "top": 88.0, "width": 2.5, "height": 3.5}', 'one-side-open', '3x2m'),
('L-200', 'lifestyle', '200', 'lifestyle', 'available', '{"left": 12.3, "top": 89.5, "width": 3.8, "height": 3.2}', 'two-side-open', '3x2m'),
('L-201', 'lifestyle', '201', 'lifestyle', 'available', '{"left": 16.5, "top": 90.2, "width": 3.8, "height": 3.2}', 'two-side-open', '3x2m');

-- Left Wing Inner Rows (abbreviated for space - full list should include all stalls)
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('L-107', 'lifestyle', '107', 'lifestyle', 'available', '{"left": 19.5, "top": 8.4, "width": 3.2, "height": 3.0, "rotation": -18}', 'one-side-open', '3x2m'),
('L-108', 'lifestyle', '108', 'lifestyle', 'available', '{"left": 23.0, "top": 8.0, "width": 3.2, "height": 3.0, "rotation": -15}', 'one-side-open', '3x2m'),
('L-109', 'lifestyle', '109', 'lifestyle', 'available', '{"left": 26.8, "top": 9.5, "width": 3.2, "height": 3.0, "rotation": -12}', 'one-side-open', '3x2m'),
('L-110', 'lifestyle', '110', 'lifestyle', 'available', '{"left": 30.5, "top": 9.5, "width": 3.2, "height": 3.0, "rotation": -10}', 'one-side-open', '3x2m'),
('L-111', 'lifestyle', '111', 'lifestyle', 'available', '{"left": 34.2, "top": 9.5, "width": 3.2, "height": 3.0, "rotation": -8}', 'one-side-open', '3x2m');

-- ============================================================================
-- REAL ESTATE & FOOD ZONE STALLS
-- ============================================================================

-- Real Estate Top Row
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('RE-S36', 'real-estate-food', 'RE S 36', 'real-estate', 'available', '{"left": 47.7, "top": 4.6, "width": 5.9, "height": 5.4}', 'standard', '3x2m'),
('RE-S35', 'real-estate-food', 'RE S 35', 'real-estate', 'available', '{"left": 54.0, "top": 4.6, "width": 5.9, "height": 5.4}', 'standard', '3x2m'),
('RE-S34', 'real-estate-food', 'RE S 34', 'real-estate', 'available', '{"left": 60.3, "top": 4.6, "width": 5.9, "height": 5.4}', 'standard', '3x2m'),
('RE-S33', 'real-estate-food', 'RE S 33', 'real-estate', 'available', '{"left": 66.6, "top": 4.6, "width": 5.9, "height": 5.4}', 'standard', '3x2m'),
('RE-S32', 'real-estate-food', 'RE S 32', 'real-estate', 'available', '{"left": 72.9, "top": 4.6, "width": 5.9, "height": 5.4}', 'standard', '3x2m');

-- Real Estate Right Column
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('RE-S31', 'real-estate-food', 'RE S 31', 'real-estate', 'available', '{"left": 85.7, "top": 13.0, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S30', 'real-estate-food', 'RE S 30', 'real-estate', 'available', '{"left": 85.7, "top": 18.8, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S29', 'real-estate-food', 'RE S 29', 'real-estate', 'available', '{"left": 85.7, "top": 24.6, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S28', 'real-estate-food', 'RE S 28', 'real-estate', 'available', '{"left": 85.7, "top": 30.8, "width": 5.0, "height": 5.4}', 'standard', '3x2m');

-- Real Estate Left Column
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('RE-S5', 'real-estate-food', 'RE S 5', 'real-estate', 'available', '{"left": 5.7, "top": 18.8, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S4', 'real-estate-food', 'RE S 4', 'real-estate', 'available', '{"left": 5.7, "top": 24.6, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S3', 'real-estate-food', 'RE S 3', 'real-estate', 'available', '{"left": 5.7, "top": 30.8, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S2', 'real-estate-food', 'RE S 2', 'real-estate', 'available', '{"left": 5.7, "top": 37.0, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S1', 'real-estate-food', 'RE S 1', 'real-estate', 'available', '{"left": 5.7, "top": 43.2, "width": 5.0, "height": 5.4}', 'standard', '3x2m');

-- Real Estate Inner and Center (abbreviated)
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('RE-S6', 'real-estate-food', 'RE S 6', 'real-estate', 'available', '{"left": 17.5, "top": 30.8, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S7', 'real-estate-food', 'RE S 7', 'real-estate', 'available', '{"left": 17.5, "top": 37.0, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S8', 'real-estate-food', 'RE S 8', 'real-estate', 'available', '{"left": 17.5, "top": 43.2, "width": 5.0, "height": 5.4}', 'two-side-open', '3x2m'),
('RE-S11', 'real-estate-food', 'RE S 11', 'real-estate', 'available', '{"left": 30.0, "top": 30.8, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S10', 'real-estate-food', 'RE S 10', 'real-estate', 'available', '{"left": 30.0, "top": 37.0, "width": 5.0, "height": 5.4}', 'standard', '3x2m'),
('RE-S9', 'real-estate-food', 'RE S 9', 'real-estate', 'available', '{"left": 30.0, "top": 43.2, "width": 5.0, "height": 5.4}', 'standard', '3x2m');

-- Real Estate Center Twin Columns
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('RE-S16', 'real-estate-food', 'RE S 16', 'real-estate', 'available', '{"left": 41.5, "top": 18.8, "width": 4.8, "height": 5.4}', 'standard', '3x2m'),
('RE-S17', 'real-estate-food', 'RE S 17', 'real-estate', 'available', '{"left": 47.5, "top": 18.8, "width": 4.8, "height": 5.4}', 'two-side-open', '3x2m'),
('RE-S15', 'real-estate-food', 'RE S 15', 'real-estate', 'available', '{"left": 41.5, "top": 24.6, "width": 4.8, "height": 5.4}', 'standard', '3x2m'),
('RE-S18', 'real-estate-food', 'RE S 18', 'real-estate', 'available', '{"left": 47.5, "top": 24.6, "width": 4.8, "height": 5.4}', 'standard', '3x2m'),
('RE-S14', 'real-estate-food', 'RE S 14', 'real-estate', 'available', '{"left": 41.5, "top": 30.8, "width": 4.8, "height": 5.4}', 'standard', '3x2m'),
('RE-S19', 'real-estate-food', 'RE S 19', 'real-estate', 'available', '{"left": 47.5, "top": 30.8, "width": 4.8, "height": 5.4}', 'standard', '3x2m'),
('RE-S13', 'real-estate-food', 'RE S 13', 'real-estate', 'available', '{"left": 41.5, "top": 37.0, "width": 4.8, "height": 5.4}', 'standard', '3x2m'),
('RE-S20', 'real-estate-food', 'RE S 20', 'real-estate', 'available', '{"left": 47.5, "top": 37.0, "width": 4.8, "height": 5.4}', 'standard', '3x2m'),
('RE-S12', 'real-estate-food', 'RE S 12', 'real-estate', 'available', '{"left": 41.5, "top": 43.2, "width": 4.8, "height": 5.4}', 'standard', '3x2m'),
('RE-S21', 'real-estate-food', 'RE S 21', 'real-estate', 'available', '{"left": 47.5, "top": 43.2, "width": 4.8, "height": 5.4}', 'standard', '3x2m');

-- Real Estate Second Column from Right
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('RE-S24', 'real-estate-food', 'RE S 24', 'real-estate', 'available', '{"left": 60.5, "top": 18.8, "width": 5.5, "height": 5.4}', 'standard', '3x2m'),
('RE-S23', 'real-estate-food', 'RE S 23', 'real-estate', 'available', '{"left": 60.5, "top": 24.6, "width": 5.5, "height": 5.4}', 'standard', '3x2m'),
('RE-S22', 'real-estate-food', 'RE S 22', 'real-estate', 'available', '{"left": 60.5, "top": 30.8, "width": 5.5, "height": 5.4}', 'standard', '3x2m'),
('RE-S25', 'real-estate-food', 'RE S 25', 'real-estate', 'available', '{"left": 72.5, "top": 18.8, "width": 5.5, "height": 5.4}', 'standard', '3x2m'),
('RE-S26', 'real-estate-food', 'RE S 26', 'real-estate', 'available', '{"left": 72.5, "top": 24.6, "width": 5.5, "height": 5.4}', 'standard', '3x2m'),
('RE-S27', 'real-estate-food', 'RE S 27', 'real-estate', 'available', '{"left": 72.5, "top": 30.8, "width": 5.5, "height": 5.4}', 'standard', '3x2m');

-- Food Stalls
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('F-F1', 'real-estate-food', 'F1', 'food', 'available', '{"left": 60.5, "top": 37.0, "width": 5.0, "height": 4.8}', 'standard', '3x2m'),
('F-F2', 'real-estate-food', 'F2', 'food', 'available', '{"left": 60.5, "top": 42.2, "width": 5.0, "height": 4.8}', 'standard', '3x2m'),
('F-F3', 'real-estate-food', 'F3', 'food', 'available', '{"left": 60.5, "top": 47.4, "width": 5.0, "height": 4.8}', 'standard', '3x2m'),
('F-F4', 'real-estate-food', 'F4', 'food', 'available', '{"left": 60.5, "top": 52.6, "width": 5.0, "height": 4.8}', 'standard', '3x2m'),
('F-F5', 'real-estate-food', 'F5', 'food', 'available', '{"left": 69.5, "top": 52.6, "width": 4.2, "height": 4.8}', 'standard', '3x2m'),
('F-F6', 'real-estate-food', 'F6', 'food', 'available', '{"left": 69.5, "top": 47.4, "width": 4.2, "height": 4.8}', 'standard', '3x2m'),
('F-F7', 'real-estate-food', 'F7', 'food', 'available', '{"left": 69.5, "top": 42.2, "width": 4.2, "height": 4.8}', 'standard', '3x2m'),
('F-F8', 'real-estate-food', 'F8', 'food', 'available', '{"left": 69.5, "top": 37.0, "width": 4.2, "height": 4.8}', 'standard', '3x2m'),
('F-F9', 'real-estate-food', 'F9', 'food', 'available', '{"left": 74.2, "top": 37.0, "width": 4.2, "height": 4.8}', 'standard', '3x2m'),
('F-F10', 'real-estate-food', 'F10', 'food', 'available', '{"left": 74.2, "top": 42.2, "width": 4.2, "height": 4.8}', 'standard', '3x2m'),
('F-F11', 'real-estate-food', 'F11', 'food', 'available', '{"left": 74.2, "top": 47.4, "width": 4.2, "height": 4.8}', 'standard', '3x2m'),
('F-F12', 'real-estate-food', 'F12', 'food', 'available', '{"left": 74.2, "top": 52.6, "width": 4.2, "height": 4.8}', 'standard', '3x2m'),
('F-F13', 'real-estate-food', 'F13', 'food', 'available', '{"left": 85.7, "top": 52.6, "width": 4.5, "height": 4.8}', 'standard', '3x2m'),
('F-F14', 'real-estate-food', 'F14', 'food', 'available', '{"left": 85.7, "top": 47.4, "width": 4.5, "height": 4.8}', 'standard', '3x2m'),
('F-F15', 'real-estate-food', 'F15', 'food', 'available', '{"left": 85.7, "top": 42.2, "width": 4.5, "height": 4.8}', 'standard', '3x2m'),
('F-F16', 'real-estate-food', 'F16', 'food', 'available', '{"left": 85.7, "top": 37.0, "width": 4.5, "height": 4.8}', 'standard', '3x2m');

-- Food Bottom Row
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('F-F17', 'real-estate-food', 'F17', 'food', 'available', '{"left": 31.0, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F18', 'real-estate-food', 'F18', 'food', 'available', '{"left": 35.5, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F19', 'real-estate-food', 'F19', 'food', 'available', '{"left": 40.0, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F20', 'real-estate-food', 'F20', 'food', 'available', '{"left": 44.5, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F21', 'real-estate-food', 'F21', 'food', 'available', '{"left": 49.0, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F22', 'real-estate-food', 'F22', 'food', 'available', '{"left": 53.5, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F23', 'real-estate-food', 'F23', 'food', 'available', '{"left": 58.0, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F24', 'real-estate-food', 'F24', 'food', 'available', '{"left": 69.5, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F25', 'real-estate-food', 'F25', 'food', 'available', '{"left": 74.0, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m'),
('F-F26', 'real-estate-food', 'F26', 'food', 'available', '{"left": 78.5, "top": 58.0, "width": 4.2, "height": 4.5}', 'standard', '3x2m');

-- Food Far Right Column
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('F-F27', 'real-estate-food', 'F27', 'food', 'available', '{"left": 85.7, "top": 64.0, "width": 4.5, "height": 4.5}', 'standard', '3x2m'),
('F-F28', 'real-estate-food', 'F28', 'food', 'available', '{"left": 85.7, "top": 69.0, "width": 4.5, "height": 4.5}', 'standard', '3x2m'),
('F-F29', 'real-estate-food', 'F29', 'food', 'available', '{"left": 85.7, "top": 74.0, "width": 4.5, "height": 4.5}', 'standard', '3x2m'),
('F-F30', 'real-estate-food', 'F30', 'food', 'available', '{"left": 85.7, "top": 79.0, "width": 4.5, "height": 4.5}', 'standard', '3x2m');

-- Food Bottom Right Row
INSERT INTO stalls (id, layout, label, category, status, position, stall_type, size) VALUES
('F-F31', 'real-estate-food', 'F31', 'food', 'available', '{"left": 73.4, "top": 85.5, "width": 4.5, "height": 4.5}', 'standard', '3x2m'),
('F-F32', 'real-estate-food', 'F32', 'food', 'available', '{"left": 68.6, "top": 85.5, "width": 4.5, "height": 4.5}', 'standard', '3x2m'),
('F-F33', 'real-estate-food', 'F33', 'food', 'available', '{"left": 63.8, "top": 85.5, "width": 4.5, "height": 4.5}', 'standard', '3x2m'),
('F-F34', 'real-estate-food', 'F34', 'food', 'available', '{"left": 59.0, "top": 85.5, "width": 4.5, "height": 4.5}', 'standard', '3x2m');

-- ============================================================================
-- NOTE: This is an abbreviated seed file. 
-- For the full seed with all ~200 lifestyle stalls, run the seed-all.ts script
-- ============================================================================



