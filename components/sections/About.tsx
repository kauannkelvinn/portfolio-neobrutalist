'use client'

import FadeIn from "@/components/ui/FadeIn"
import Counter from "../ui/Counter";

export function About() {
  return (
    <section id="about" className="bg-red-900 text-brand-white relative z-20">

      <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative z-10">
        <FadeIn>
          <h1 className="font-heading text-fluid-h2 font-extrabold leading-[0.8] text-center mb-16 md:mb-24 mix-blend-difference cursor-pointer">
            <span className="font-display text-6xl tracking-tighter">QUEM</span><br />
            <span className="font-display text-6xl tracking-tighter">SOU EU?</span>
          </h1>
        </FadeIn>

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 font-mono text-sm md:text-base border-t border-brand-white/10 pt-12">

          <div className="font-body space-y-6 text-brand-gray">
            <FadeIn delay={0.2}>
              <p>
                <strong className="text-brand-white font-display block mb-2 text-2xl tracking-tighter">O INICIO NO CÓDIGO</strong>
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

            <div className="font-display mt-10 grid grid-cols-2 gap-8">
              <FadeIn delay={0.5}>
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-white">
                    <Counter value={2} suffix="+" />
                  </h3>
                  <span className="text-xs text-brand-gray uppercase tracking-widest">Anos de XP</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-white">
                    <Counter value={10} suffix="+" />
                  </h3>
                  <span className="text-xs text-brand-gray uppercase tracking-widest">Projetos</span>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>    

      </div>
    </section>
  );
}