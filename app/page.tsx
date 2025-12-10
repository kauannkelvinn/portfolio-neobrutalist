import CreativeBackground from "@/components/ui/CreativeBackground";
import { Header } from "@/components/layout/Header";
import Scene from "@/components/3d/Scene";

export default function Home() {
  return (
    <>
      <Header />
      <CreativeBackground />

      <main className="bg-zinc-950 text-white">
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-red-900 px-6 text-white">
          <div className="absolute inset-0 z-10"> 
            <Scene />
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
      </main>
    </>
  );
}