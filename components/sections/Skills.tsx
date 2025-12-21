"use client";

import Image from "next/image";
import { skillCategories, certificates } from "@/data/skills";
import FadeIn from "@/components/ui/FadeIn";

export function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 text-white py-32 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="flex-1">
            <FadeIn>
                <h2 className="font-heading font-extrabold text-fluid-body mb-16 uppercase">
                Arsenal <br /> <span className="text-brand-red">Técnico</span>
                </h2>
            </FadeIn>
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
               {skillCategories.map((category, index) => (
                 <FadeIn key={category.title} delay={index * 0.1}>
                   <div>
                     <h3 className="font-heading text-brand-red mb-6 uppercase tracking-[3] text-sm border-b border-brand-red/20 pb-2 inline-block">{category.title}</h3>
                     <ul className="font-body space-y-3 font-bold tracking-tight text-2xl md:text-3xl uppercase">
                        {category.skills.map(skill => <li key={skill} className="hover:text-brand-red transition-colors cursor-pointer">{skill}</li>)}
                     </ul>
                   </div>
                 </FadeIn>
               ))}
            </div>
          </div>

          <div className="flex-1">
            <FadeIn delay={0.2}>
                <div className="flex items-end justify-between mb-12 border-b border-white/20 pb-4">
                  <h3 className="font-heading font-extrabold tracking-wide text-4xl uppercase">Certificados</h3>
                  <span className="font-body text-xs text-brand-red animate-pulse">SYNCING DATA...</span>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <FadeIn key={`cert-${index}`} delay={0.3 + (index * 0.1)}>
                    <div
                      className={`relative group aspect-video bg-zinc-900 overflow-hidden cursor-pointer transition-all duration-500 border
                        ${cert.status === 'locked' 
                          ? 'border-zinc-800'
                          : 'border-zinc-800 hover:border-brand-red' 
                        }`}
                    >
                      {cert.image ? (
                        <div className="relative w-full h-full p-4">
                            <Image 
                              src={cert.image}
                              alt={cert.name}
                              fill
                              className={`object-contain transition-all duration-700
                                ${cert.status === 'locked' 
                                  ? 'grayscale opacity-20 brightness-50 blur-[2px]'
                                  : 'opacity-100 grayscale-0 group-hover:scale-105'
                                }`}
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                           <span className="text-zinc-700 font-mono text-xs">[ NO_SIGNAL ]</span>
                        </div>
                      )}

                      {cert.status === 'locked' && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                            <div className="bg-black/50 p-3 rounded-full border border-white/10 backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent flex flex-col items-center justify-end pb-6 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center z-30">
                          <p className="font-heading text-sm uppercase text-white leading-tight mb-1">
                            {cert.status === 'locked' ? '???' : cert.name}
                          </p>
                          <p className="font-body text-[10px] text-brand-red font-bold">
                            {cert.status === 'locked' ? 'LOCKED ASSET' : cert.issuer}
                          </p>
                      </div>

                      <div className="absolute top-2 right-2 z-30">
                          {cert.status === 'locked' ? (
                            <span className="text-[10px] font-mono bg-black/90 px-2 py-1 text-zinc-600 border border-zinc-800">LOCKED</span>
                          ) : (
                            <span className="text-[10px] font-mono bg-brand-red px-2 py-1 text-black font-bold">VERIFIED</span>
                          )}
                      </div>
                      
                    </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}