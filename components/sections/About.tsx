'use client'

import FadeIn from "@/components/ui/FadeIn"

export function About() {
  return (
    <section id="about" className="bg-brand-black text-brand-white relative z-20">

      <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative z-10">
        <FadeIn>
            <h1 className="font-heading text-fluid-h2 font-extrabold leading-[0.8] text-center mb-16 md:mb-24 mix-blend-difference cursor-pointer">
            <span className="font-body tracking-[7] font-light text-2xl">quem</span><br />
            <span className="tracking-[-3]">SOU EU?</span>
            </h1>
        </FadeIn>

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 font-mono text-sm md:text-base border-t border-brand-white/10 pt-12">

          <div className="font-body space-y-6 text-brand-gray">
            <FadeIn delay={0.2}>
                <p>
                <strong className="text-brand-white block mb-2 font-heading text-xl">O INICIO NO CÓDIGO</strong>
                Tudo começou com a curiosidade de entender como as coisas funcionavam por trás da tela. Aquele computador bege antigo (que você viu lá em cima) representa minhas primeiras linhas de código, onde o terminal era minha única interface.
                </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
                <p>
                Hoje, transformo essa paixão bruta em engenharia de software refinada, criando interfaces que não são apenas funcionais, mas <span className="text-brand-white decoration-brand-red underline decoration-2 underline-offset-4">memoráveis</span>.
                </p>
            </FadeIn>
          </div>

          <div className="font-body flex flex-col justify-between">
            <FadeIn delay={0.4}>
                <p className="text-brand-white/60 italic border-l-2 border-brand-red pl-4">
                Não é sobre escrever código. É sobre resolver problemas complexos com estilo e eficiência técnica.
                </p>
            </FadeIn>

            <div className="font-heading mt-10 grid grid-cols-2 gap-8">
              <FadeIn delay={0.5}>
                  <div>
                    <h3 className="text-2xl font-extrabold text-brand-white">2+</h3>
                    <span className="text-xs text-brand-gray uppercase tracking-widest">Anos de XP</span>
                  </div>
              </FadeIn>
              
              <FadeIn delay={0.6}>
                  <div>
                    <h3 className="text-2xl font-extrabold text-brand-white">10+</h3>
                    <span className="text-xs text-brand-gray uppercase tracking-widest">Projetos</span>
                  </div>
              </FadeIn>
            </div>
          </div>

        </div>

        <FadeIn delay={0.8} direction="up">
            <div className="mt-32 text-center animate-pulse opacity-50">
            <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gray">
                [ Mova o cursor para ver as memórias ]
            </p>
            </div>
        </FadeIn>

      </div>
    </section>
  );
}