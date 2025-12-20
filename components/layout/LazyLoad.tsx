'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface LazyLoadProps {
  children: React.ReactNode
  margin?: string 
}

export default function LazyLoad({ children, margin = "400px" }: LazyLoadProps) {
  const ref = useRef(null)
  
  // margin="400px": Começa a carregar um pouco antes de chegar na tela
  const isInView = useInView(ref, { 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    margin: margin as any, 
    once: false 
  })

  return (
    <div ref={ref} className="w-full h-full relative">
      {isInView ? (
        /* ESTADO 2: CARREGANDO / ONLINE
           Aqui entra o Canvas, o BootLoader e o Modelo 3D */
        <div className="w-full h-full">
          {children}
        </div>
      ) : (
        /* ESTADO 1: STANDBY (O Segredo para não parecer vazio)
           Isso aparece quando o usuário ainda está longe ou rolando muito rápido.
           Serve de âncora visual para ele saber que tem conteúdo ali. */
        <div className="flex flex-col items-center justify-center w-full h-full opacity-20 select-none">
           {/* Ícone de Radar / Alvo */}
           <div className="font-heading relative w-16 h-16 border border-white/50 rounded-full flex items-center justify-center animate-[spin_4s_linear_infinite]">
              <div className="w-full h-px bg-white/50 absolute"></div>
              <div className="h-full w-px bg-white/50 absolute"></div>
           </div>
           
           {/* Texto Técnico */}
           <div className="mt-4 font-heading text-[10px] tracking-[0.3em] text-white uppercase animate-pulse">
              System Standby
           </div>
           <div className="mt-1 font-heading text-[8px] text-white/50">
              SCROLL TO INITIALIZE
           </div>
        </div>
      )}
    </div>
  )
}