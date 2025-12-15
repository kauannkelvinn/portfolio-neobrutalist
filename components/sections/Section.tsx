"use client";

// import Image from "next/image";
import { skillCategories, certificates } from "@/data/skills";

export function Skills() {
  return (
    <section className="bg-zinc-950 text-white py-32 border-t-4 border-white/10 relative z-20">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="flex-1">
            <h2 className="font-display text-5xl md:text-7xl mb-16 uppercase">
              Arsenal <br/> <span className="text-brand-red">Técnico</span>
            </h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-mono text-brand-red mb-6 uppercase tracking-widest text-sm border-b border-brand-red/20 pb-2 inline-block">
                    {category.title}
                  </h3>
                  <ul className="space-y-3 font-bold text-2xl md:text-3xl uppercase">
                    {category.skills.map((skill) => (
                      <li key={skill} className="hover:text-brand-red transition-colors cursor-default">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-end justify-between mb-12 border-b-4 border-white pb-4">
               <h3 className="font-extrabold tracking-wide text-4xl uppercase">Certificados</h3>
               <span className="font-mono text-xs text-brand-red animate-pulse">
                 SYNCING DATA...
               </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className={`relative group aspect-video border-2 border-zinc-800 bg-zinc-900 overflow-hidden ${
                    cert.status === 'locked' ? 'opacity-50 grayscale' : 'hover:border-brand-red'
                  }`}
                >
                  <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-xs uppercase">
                    {cert.image ? (                
                        <span>[IMG: {cert.name}]</span>
                    ) : (
                        <span>Image Not Found</span>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center">
                    <p className="font-display text-xl uppercase text-white mb-1">{cert.name}</p>
                    <p className="font-mono text-xs text-brand-red">{cert.issuer}</p>
                  </div>

                  <div className="absolute top-2 right-2">
                    {cert.status === 'locked' ? (
                        <span className="text-xs font-mono bg-black px-1 text-zinc-500">LOCKED</span>
                    ) : (
                        <span className="text-xs font-mono bg-brand-red px-1 text-black font-bold">VERIFIED</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}