'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTransition } from '@/app/context/TransitionContext'

export default function PageTransition() {
  const { isTransitioning } = useTransition()

  return (
    <AnimatePresence mode='wait'>
      {isTransitioning && (
        <>
          <motion.div
            className="fixed inset-0 z-9999 bg-brand-black origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          
          <motion.div
            className="fixed inset-0 z-9998 bg-brand-red origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
        </>
      )}
    </AnimatePresence>
  )
}