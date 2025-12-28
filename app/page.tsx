'use client';

import dynamic from 'next/dynamic';
import CreativeBackground from "@/components/ui/CreativeBackground";
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

const Scene = dynamic(async () => {

  await new Promise((resolve) => setTimeout(resolve, 4000));

  return import("@/components/3d/Scene");
}, {
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
    <>
      <Header />
      <CreativeBackground />

      <main className="bg-zinc-950 text-white">
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-red-900 px-6 text-white">
          <div id="home" className="absolute inset-0 z-10">
            <LazyLoad>
              <Scene />
            </LazyLoad>
          </div>

          <div className="absolute z-10 pointer-events-none w-full px-6 top-24 flex justify-between items-start md:top-4 md:right-50 md:w-auto md:px-0 md:justify-start md:gap-20">

            <div className="p-0 md:p-4 text-[10px] md:text-xs font-light tracking-wider uppercase flex flex-col">
              <p className="text-left">UXUI DESIGNER</p>
              <p className="text-left">SOFTWARE ENGINEER</p>
            </div>

            <div className="p-0 md:p-4 text-[10px] md:text-xs font-light tracking-wider uppercase flex flex-col text-right md:text-left">
              <p>DONE</p>
              <p>IS BETTER THAN PERFECT.</p>
            </div>

          </div>
        </section>

        <About />

        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-red-900">
          <LazyLoad>
            <SceneMacbook />
          </LazyLoad>
        </section>

        <AboutModern />

        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-red-900">
          <LazyLoad>
            <SceneCyber />
          </LazyLoad>
        </section>

        <AboutCyber />
        <Projects />
        <Process />
        <Companies />
        <Skills />
        <ContactFooter />
      </main>
    </>
  );
}