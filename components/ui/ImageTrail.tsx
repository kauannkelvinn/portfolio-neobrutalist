"use client";

import { useAnimate } from "framer-motion";
import React, { useRef } from "react";

const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614728853913-1e22ba863009?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=200&auto=format&fit=crop",
  ];
  export const ImageTrail = ({ children }: { children: React.ReactNode }) => {
    const [scope, animate] = useAnimate();
    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageIndex = useRef(0);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e;
      const distance = calculateDistance(
        clientX,
        clientY,
        lastRenderPosition.current.x,
        lastRenderPosition.current.y
      );
  
      if (distance >= 100) {
        lastRenderPosition.current = { x: clientX, y: clientY };
        renderImage(clientX, clientY);
      }
    };
  
    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
      const deltaX = x2 - x1;
      const deltaY = y2 - y1;
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };
  
    const renderImage = async (x: number, y: number) => {
      const selector = `.trail-image-${imageIndex.current}`;
      const el = document.querySelector(selector) as HTMLElement;
  
      if (!el) return;
  
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.zIndex = imageIndex.current.toString();
  
      animate(
        selector,
        { opacity: 1, scale: 1 },
        { duration: 0.4, ease: "easeOut" }
      );
  
      setTimeout(() => {
        animate(
          selector,
          { opacity: 0, scale: 0.5 },
          { duration: 0.4, ease: "easeIn" }
        );
      }, 1000);
  
      imageIndex.current = (imageIndex.current + 1) % images.length;
    };
  
    return (
      <div
        ref={scope}
        onMouseMove={handleMouseMove}
        className="relative w-full overflow-hidden"
      >
        {children}
  
        {images.map((img, index) => (
          <img
            key={index}
            className={`trail-image-${index} pointer-events-none fixed h-40 w-auto rounded-lg object-cover opacity-0 border-2 border-brand-white shadow-2xl mix-blend-hard-light`}
            src={img}
            alt={`trail-${index}`}
            style={{ transform: "translate(-50%, -50%) scale(0.5)" }}
          />
        ))}
      </div>
    );
  };