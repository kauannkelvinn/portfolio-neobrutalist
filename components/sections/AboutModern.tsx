'use client'

import FadeIn from "@/components/ui/FadeIn"

export function AboutModern() {
  return (
    <section className="bg-red-900 text-brand-white relative z-20">
      <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative z-10">

        <FadeIn>
            <h2 className="font-heading font-extrabold text-2xl md:text-6xl leading-[0.9] uppercase text-center mb-16 mix-blend-difference">
            Engenharia <br />
            <span className="text-brand-gray/50">&</span> <span className="text-brand-white">Código</span>
            </h2>
        </FadeIn>

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 font-mono text-sm md:text-base border-t border-brand-white/10 pt-12">

          <div className="space-y-6 font-body text-brand-gray">
            <FadeIn delay={0.2}>
                <p>
                <strong className="font-heading text-brand-white block mb-2 text-xl">O PRESENTE</strong>
                A curiosidade evoluiu para competência técnica. Hoje, aquele hacker do computador bege constrói aplicações escaláveis utilizando o ecossistema moderno do JavaScript.
                </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
                <p>
                O MacBook que você viu acima é minha ferramenta de criação. Nele, transformo regras de negócio complexas em código limpo, performático e testável.
                </p>
            </FadeIn>
          </div>

          <div className="font-body flex flex-col justify-between">
            <ul className="space-y-4">
              <FadeIn delay={0.4}>
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Arquitetura de Software & Design Patterns</span>
                  </li>
              </FadeIn>
              <FadeIn delay={0.5}>
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Next.js, React, TypeScript, Node.js</span>
                  </li>
              </FadeIn>
              <FadeIn delay={0.6}>
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Performance Web & Acessibilidade</span>
                  </li>
              </FadeIn>
            </ul>

            <FadeIn delay={0.7}>
                <div className="mt-10 pt-10 border-t border-brand-white/10">
                <p className="font-heading text-xs uppercase tracking-widest text-brand-gray mb-2">Filosofia de Codigo</p>
                <p>Make it work, make it right, make it fast.</p>
                </div>
            </FadeIn>
          </div>

        </div>


      </div>
    </section>
  )
}