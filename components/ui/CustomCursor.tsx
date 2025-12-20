'use client'

import { motion } from 'framer-motion'
import useMousePosition from '@/app/hooks/useMousePosition'
import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')

      setIsHovering(!!isClickable)
    }

    window.addEventListener('mouseover', handleMouseOver)
    return () => window.removeEventListener('mouseover', handleMouseOver)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-white rounded-full pointer-events-none z-9999 mix-blend-difference"
        animate={{ x: x - 5, y: y - 5 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />

      <motion.div
        className="fixed top-0 left-0 border border-brand-white rounded-full pointer-events-none z-9998 mix-blend-difference"
        animate={{
          x: x - (isHovering ? 32 : 10),
          y: y - (isHovering ? 32 : 10),
          width: isHovering ? 64 : 20,
          height: isHovering ? 64 : 20,
          opacity: isHovering ? 1 : 0.5,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
      />
    </>
  )
}