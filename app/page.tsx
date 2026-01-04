'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Header } from "@/components/layout/Header";
import LazyLoad from "@/components/layout/LazyLoad";
import { About } from "@/components/sections/About";
import { AboutModern } from "@/components/sections/AboutModern";
import { AboutCyber } from "@/components/sections/AboutCyber";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Companies } from "@/components/sections/Companies";
import { Skills } from "@/components/sections/Skills";
import ContactFooter from "@/components/sections/ContactFooter";

// Carregamento dinâmico dos 3D
const Scene = dynamic(() => import("@/components/3d/Scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-xs font-mono text-red-500/50 tracking-widest animate-pulse">
      [ INITIALIZING SYSTEM... ]
    </div>
  ),
});

const SceneMacbook = dynamic(() => import("@/components/3d/SceneMacbook"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

const SceneCyber = dynamic(() => import("@/components/3d/SceneCyber"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export default function Home() {
  return (
    <div className="relative w-full bg-zinc-950 text-white">
      
      <Header />

      {/* --- SEÇÃO 1: HERO --- */}
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-red-900 px-6 text-white">
        
        {/* MOBILE: Imagem Centralizada (Comportamento de Objeto 3D) */}
        <div className="absolute inset-0 z-0 md:hidden flex items-center justify-center pointer-events-none">
           {/* DICA: Use um PNG com fundo transparente do seu objeto 3D aqui */}
           <Image 
             src="/images/hero-mobile.png" 
             alt="Hero Object" 
             width={600} 
             height={600}
             className="object-contain w-[85%] h-auto max-w-[500px] opacity-90 scale-130"
             priority
           />
        </div>

        {/* DESKTOP: Cena 3D */}
        <div id="home" className="absolute inset-0 z-10 hidden md:block">
           <LazyLoad>
            <Scene />
          </LazyLoad>
        </div>

        {/* Textos */}
        <div className="absolute z-20 pointer-events-none w-full px-6 top-24 flex justify-between items-start md:top-6 md:right-50 md:w-auto md:px-0 md:justify-start md:gap-20">
          <div className="font-body p-0 md:p-4 text-[10px] md:text-xs font-light tracking-wider uppercase flex flex-col">
            <p className="text-left">UXUI DESIGNER</p>
            <p className="text-left">SOFTWARE ENGINEER</p>
          </div>
          <div className="font-body p-0 md:p-4 text-[10px] md:text-xs font-light tracking-wider uppercase flex flex-col text-right md:text-left">
            <p>DONE</p>
            <p>IS BETTER THAN PERFECT.</p>
          </div>
        </div>
      </section>

      <About />

      {/* --- SEÇÃO 2: MACBOOK --- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-red-900">
        
        {/* MOBILE: Macbook Centralizado */}
        <div className="absolute inset-0 z-0 md:hidden flex items-center justify-center pointer-events-none">
           <Image 
             src="/images/macbook-mobile.png" 
             alt="Macbook Developer" 
             width={500} 
             height={500}
             className="object-contain w-[80%] h-auto max-w-[450px] scale-150"
           />
        </div>

        {/* DESKTOP: 3D Interativo */}
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <LazyLoad>
            <SceneMacbook />
          </LazyLoad>
        </div>
      </section>

      <AboutModern />

      {/* --- SEÇÃO 3: CYBER --- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-red-900">
        
        {/* MOBILE: Cyber Setup Centralizado */}
        <div className="absolute inset-0 z-0 md:hidden flex items-center justify-center pointer-events-none">
           <Image 
             src="/images/cyber-mobile.png" 
             alt="Cyber Setup" 
             width={600}
             height={600}
             className="object-contain w-[90%] h-auto max-w-[600px] translate-x-4 scale-120 opacity-80"
           />
        </div>

        {/* DESKTOP: 3D Cyber */}
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <LazyLoad>
            <SceneCyber />
          </LazyLoad> 
        </div>
      </section>

      <AboutCyber />
      <Projects />
      <Process />
      <Companies />
      <Skills />
      <ContactFooter />
    </div>
  );
}