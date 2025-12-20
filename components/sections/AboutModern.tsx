"use client";

import { ImageTrail } from "../ui/ImageTrail";

export function AboutModern() {
    return (
        <section className="bg-brand-black text-brand-white relative z-20">
      
      <ImageTrail>
        <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative z-10">
            
          <h2 className="font-heading font-extrabold  text-2xl md:text-6xl leading-[0.9] uppercase text-center mb-16 mix-blend-difference">
            Engenharia <br/>
            <span className="text-brand-gray/50">&</span> <span className="text-brand-white">Código</span>
          </h2>

          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 font-mono text-sm md:text-base border-t border-brand-white/10 pt-12">
            
            <div className="space-y-6 font-body text-brand-gray">
              <p>
                <strong className="font-heading text-brand-white block mb-2 text-xl">O PRESENTE</strong>
                A curiosidade evoluiu para competência técnica. Hoje, aquele hacker do computador bege constrói aplicações escaláveis utilizando o ecossistema moderno do JavaScript.
              </p>
              <p>
                O MacBook que você viu acima é minha ferramenta de criação. Nele, transformo regras de negócio complexas em código limpo, performático e testável.
              </p>
            </div>
            
            <div className="font-body flex flex-col justify-between">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Arquitetura de Software & Design Patterns</span>
                </li>
                <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Next.js, React, TypeScript, Node.js</span>
                </li>
                <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Performance Web & Acessibilidade</span>
                </li>
              </ul>
              
              <div className="mt-10 pt-10 border-t border-brand-white/10">
                 <p className="font-heading text-xs uppercase tracking-widest text-brand-gray mb-2">Filosofia de Codigo</p>
                 <p>Make it work, make it right, make it fast.</p>
              </div>
            </div>

          </div>
          
          <div className="mt-32 text-center opacity-50">
             <div className="w-px h-20 bg-linear-to-b from-transparent via-brand-red to-transparent mx-auto"></div>
          </div>

        </div>
      </ImageTrail>

    </section>
    )
}