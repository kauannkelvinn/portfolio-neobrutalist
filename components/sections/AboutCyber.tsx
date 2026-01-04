'use client'

import FadeIn from "@/components/ui/FadeIn"

export function AboutCyber() {
  return (
    <section className="bg-brand-black text-brand-white relative z-20 overflow-hidden">
      <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative z-10">

        <FadeIn>
            <h2 className="font-mono uppercase font-light text-2xl md:text-4xl tracking-[10] leading-[2] text-center mb-16 mix-blend-difference hover:text-green-500 transition-colors duration-300">
            segurança <span className="text-brand-gray/50">&</span>  <br />
            <span className="inline-block scale-y-[2] scale-x-[1.50] text-[3rem] md:text-[11rem] font-display tracking-[0.80] text-green-">ROBUSTEZ</span>
            </h2>
        </FadeIn>

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 font-mono text-sm md:text-base border-t border-green-900/30 pt-12">

          <div className="font-body space-y-6 text-brand-gray">
            <FadeIn delay={0.2}>
                <p>
                <strong className="font-mono font-extralight text-white block mb-2 text-xl tracking-wider">SECURE BY DESIGN</strong>
                O interesse em cibersegurança não é apenas um hobby; é uma filosofia. Entender como sistemas são quebrados é o primeiro passo para construir sistemas indestrutíveis.
                </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
                <p>
                Aquele terminal verde que você viu acima simboliza minha busca constante por vulnerabilidades antes que outros as encontrem. Desenvolvo pensando no Worst Case Scenario.
                </p>
            </FadeIn>
          </div>

          <div className="font-body flex flex-col justify-between">
            <ul className="space-y-4">
              <FadeIn delay={0.4}>
                  <li className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-green-500 rounded-sm group-hover:animate-ping"></span>
                    <span>OWASP Top 10 & Práticas de Segurança</span>
                  </li>
              </FadeIn>
              <FadeIn delay={0.5}>
                  <li className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-green-500 rounded-sm group-hover:animate-ping"></span>
                    <span>Autenticação Robusta (OAuth, JWT, RBAC)</span>
                  </li>
              </FadeIn>
              <FadeIn delay={0.6}>
                  <li className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-green-500 rounded-sm group-hover:animate-ping"></span>
                    <span>Cloud Infrastructure & CI/CD Seguro</span>
                  </li>
              </FadeIn>
            </ul>

            <FadeIn delay={0.8}>
                <div className="mt-10 pt-10 border-t border-green-900/30">
                <p className="font-body font-light text-xs uppercase tracking-widest text-green-700 mb-2">Status do Sistema</p>
                <div className="flex items-center gap-2 text-green-400 animate-pulse">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="font-heading text-sm">MONITORAMENTO ATIVO</p>
                </div>
                </div>
            </FadeIn>
          </div>

        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
        </div>

      </div>
    </section>
  )
}