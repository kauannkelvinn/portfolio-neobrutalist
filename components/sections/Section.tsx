"use client";

import { skillCategories, certificates } from "@/data/skills";

export function Skills() {
  return (
    <section className="bg-zinc-950 text-white py-32 border-t-4 border-white/10 relative z-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row gap-16">

          <div className="flex-1">
            <h2 className="font-heading font-extrabold text-5xl md:text-5xl mb-16 uppercase">
              Arsenal <br /> <span className="text-brand-red">Técnico</span>
            </h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-headin text-brand-red mb-6 uppercase tracking-[3] text-sm border-b border-brand-red/20 pb-2 inline-block">
                    {category.title}
                  </h3>
                  <ul className="font-body space-y-3 font-bold tracking-tight text-2xl md:text-3xl uppercase">
                    {category.skills.map((skill) => (
                      <li key={skill} className="hover:text-brand-red transition-colors cursor-pointer">
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
              <h3 className="font-heading font-extrabold tracking-wide text-4xl uppercase">Certificados</h3>
              <span className="font-body text-xs text-brand-red animate-pulse">
                SYNCING DATA...
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div

                  key={`cert-${index}`}
                  className={`relative group aspect-video border-2 border-zinc-800 bg-zinc-900 overflow-hidden ${cert.status === 'locked' ? 'opacity-50 grayscale' : 'hover:border-brand-red'
                    }`}
                >
                  <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-body text-xs uppercase">
                    {cert.image ? (
                      <span>[IMG: {cert.name}]</span>
                    ) : (
                      <span>Image Not Found</span>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center">
                    <p className="font-heading text-xl uppercase text-white mb-1">{cert.name}</p>
                    <p className="font-body text-xs text-brand-red">{cert.issuer}</p>
                  </div>

                  <div className="absolute top-2 right-2">
                    {cert.status === 'locked' ? (
                      <span className="text-xs font-heading bg-black px-1 text-zinc-500">LOCKED</span>
                    ) : (
                      <span className="text-xs font-heading bg-brand-red px-1 text-black">VERIFIED</span>
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