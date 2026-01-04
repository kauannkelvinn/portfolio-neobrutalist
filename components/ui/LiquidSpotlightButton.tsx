"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface LiquidSpotlightButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function LiquidSpotlightButton({ children, href, className = "" }: LiquidSpotlightButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative group"
    >
      <Link
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        target={href.startsWith("http") ? "_blank" : "_self"}
        className={`relative flex items-center justify-center overflow-hidden rounded-3xl bg-zinc-950 px-10 py-2 text-white shadow-2xl transition-colors duration-300 border-y border-white/10 border-x-transparent ${className}`}
      >
        
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.6),
                transparent 80%
              )
            `,
            maskImage: `linear-gradient(#000, #000), linear-gradient(#000, #000)`,
            maskClip: "content-box, border-box",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        <div className="relative z-10 flex items-center gap-3 font-body text-lg font-bold text-zinc-400 transition-colors group-hover:text-white">
          {children}
        </div>
      </Link>
    </motion.div>
  );
}