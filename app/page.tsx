import CreativeBackground from "@/components/ui/CreativeBackground";
import { Header } from "@/components/layout/Header";
import LazyLoad from "@/components/layout/LazyLoad";
import Scene from "@/components/3d/Scene";
import SceneMacbook from "@/components/3d/SceneMacbook";
import { About } from "@/components/sections/About";
import { AboutModern } from "@/components/sections/AboutModern";
import SceneCyber from "@/components/3d/SceneCyber";
import { AboutCyber } from "@/components/sections/AboutCyber";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Companies } from "@/components/sections/Companies";
import { Skills } from "@/components/sections/Skills";
import ContactFooter from "@/components/sections/ContactFooter";

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

          <div className="absolute top-4 right-50 z-10 flex space-y-4 gap-20 pointer-events-none">
            <div className="hidden md:block p-4 text-xs font-light tracking-wider uppercase">
              <p className="text-start">UXUI DESIGNER</p>
              <p className="text-start">SOFTWARE ENGINEER</p>
            </div>
            <div className="hidden md:block p-4 text-xs font-light tracking-wider uppercase">
              <p className="text-start">DONE</p>
              <p className="text-start">IS BETTER THAN PERFECT.</p>
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