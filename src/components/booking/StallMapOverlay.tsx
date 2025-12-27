'use client'

import { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ZoomOut, Move } from 'lucide-react'
import type { StallData, LayoutType } from '@/types/booking'
import { LAYOUT_CONFIGS } from '@/types/booking'

// Aspect ratios for each layout (width / height)
const LAYOUT_ASPECT_RATIOS: Record<LayoutType, number> = {
  'lifestyle': 1224 / 1010,         // ~1.21:1
  'real-estate-food': 1160 / 1001,  // ~1.16:1
}

interface StallMapOverlayProps {
  layout: LayoutType
  stalls: StallData[]
  selectedStallId: string | null
  onStallSelect: (stall: StallData) => void
  onStallDeselect: () => void
  onBookedStallClick?: () => void
}

export function StallMapOverlay({
  layout,
  stalls,
  selectedStallId,
  onStallSelect,
  onStallDeselect,
  onBookedStallClick,
}: StallMapOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [hoveredStall, setHoveredStall] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const layoutConfig = useMemo(
    () => LAYOUT_CONFIGS.find(c => c.id === layout),
    [layout]
  )

  // Get the aspect ratio for the current layout
  const aspectRatio = useMemo(() => LAYOUT_ASPECT_RATIOS[layout], [layout])

  // Reset zoom and position when layout changes
  useEffect(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
    setImageLoaded(false)
  }, [layout])

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.25, 3))
  }, [])

  const handleZoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - 0.25, 0.5))
  }, [])

  const handleResetZoom = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  // Pan handling
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }, [scale, position])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }, [isDragging, dragStart])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch handling for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (scale > 1 && e.touches.length === 1) {
      const touch = e.touches[0]
      setIsDragging(true)
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y })
    }
  }, [scale, position])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0]
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      })
    }
  }, [isDragging, dragStart])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Stall click handler
  const handleStallClick = useCallback((stall: StallData, e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    
    if (stall.status === 'booked') {
      // Notify parent that a booked stall was clicked
      onBookedStallClick?.()
      return // Don't allow selection of booked stalls
    }

    if (selectedStallId === stall.id) {
      onStallDeselect()
    } else {
      onStallSelect(stall)
    }
  }, [selectedStallId, onStallSelect, onStallDeselect, onBookedStallClick])

  // Get stall styling based on status
  const getStallStyles = useCallback((stall: StallData) => {
    const isSelected = selectedStallId === stall.id
    const isHovered = hoveredStall === stall.id
    const isBooked = stall.status === 'booked'

    if (isBooked) {
      return {
        backgroundColor: 'rgba(220, 38, 38, 0.4)',
        borderColor: 'rgba(220, 38, 38, 0.8)',
        cursor: 'not-allowed',
      }
    }

    if (isSelected) {
      return {
        backgroundColor: 'rgba(46, 124, 122, 0.6)',
        borderColor: 'rgba(46, 124, 122, 1)',
        boxShadow: '0 0 0 3px rgba(46, 124, 122, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
      }
    }

    if (isHovered) {
      return {
        backgroundColor: 'rgba(201, 162, 77, 0.4)',
        borderColor: 'rgba(201, 162, 77, 0.9)',
        cursor: 'pointer',
      }
    }

    return {
      backgroundColor: 'rgba(201, 162, 77, 0.15)',
      borderColor: 'rgba(201, 162, 77, 0.5)',
      cursor: 'pointer',
    }
  }, [selectedStallId, hoveredStall])

  if (!layoutConfig) return null

  return (
    <div className="relative w-full">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="p-2 bg-white/90 backdrop-blur-sm border border-gold/30 text-coffee hover:bg-gold hover:text-maroon transition-all duration-200 shadow-md"
          aria-label="Zoom in"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 bg-white/90 backdrop-blur-sm border border-gold/30 text-coffee hover:bg-gold hover:text-maroon transition-all duration-200 shadow-md"
          aria-label="Zoom out"
        >
          <ZoomOut size={20} />
        </button>
        {scale !== 1 && (
          <button
            onClick={handleResetZoom}
            className="p-2 bg-white/90 backdrop-blur-sm border border-gold/30 text-coffee hover:bg-gold hover:text-maroon transition-all duration-200 shadow-md"
            aria-label="Reset zoom"
          >
            <Move size={20} />
          </button>
        )}
      </div>

      {/* Zoom Level Indicator */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-gold/30 font-body text-sm text-coffee">
        {Math.round(scale * 100)}%
      </div>

      {/* Map Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden bg-sand-100 border border-gold/20 touch-none"
        style={{
          cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Transformable Content */}
        <div
          className="relative w-full transition-transform duration-150"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center center',
          }}
        >
          {/* Layout Image Container - Uses dynamic aspect ratio */}
          <div 
            ref={imageContainerRef}
            className="relative w-full"
            style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
          >
            <Image
              src={layoutConfig.imagePath}
              alt={`${layoutConfig.name} Layout`}
              fill
              className="object-contain"
              priority
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />

            {/* Stall Overlays - Positioned relative to image container */}
            {imageLoaded && stalls.map((stall) => {
              const styles = getStallStyles(stall)
              const isBooked = stall.status === 'booked'
              const isSelected = selectedStallId === stall.id

              return (
                <motion.button
                  key={stall.id}
                  className="absolute border-[1.5px] md:border-2 transition-colors duration-200 flex items-center justify-center"
                  style={{
                    left: `${stall.position.left}%`,
                    top: `${stall.position.top}%`,
                    width: `${stall.position.width}%`,
                    height: `${stall.position.height}%`,
                    transform: stall.position.rotation
                      ? `rotate(${stall.position.rotation}deg)`
                      : undefined,
                    ...styles,
                  }}
                  onClick={(e) => handleStallClick(stall, e)}
                  onMouseEnter={() => !isBooked && setHoveredStall(stall.id)}
                  onMouseLeave={() => setHoveredStall(null)}
                  whileTap={!isBooked ? { scale: 0.95 } : undefined}
                  aria-label={`${stall.label} - ${isBooked ? 'Booked' : isSelected ? 'Selected' : 'Available'}`}
                  disabled={isBooked}
                >
                  {/* Booked X indicator */}
                  {isBooked && (
                    <X className="text-red-600" size={10} strokeWidth={3} />
                  )}

                  {/* Selected checkmark */}
                  {isSelected && !isBooked && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-white"
                    >
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <p className="mt-3 text-center font-body text-xs text-coffee/50">
        {scale > 1 ? 'Drag to pan • ' : ''}Tap a stall to select • Pinch or use controls to zoom
      </p>

      {/* Stall Tooltip on Hover (Desktop) */}
      <AnimatePresence>
        {hoveredStall && !selectedStallId && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2 bg-maroon text-white font-body text-sm rounded shadow-lg pointer-events-none"
          >
            {stalls.find(s => s.id === hoveredStall)?.label} - Tap to select
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

