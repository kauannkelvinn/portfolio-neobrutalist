"use client";

import { ImageTrail } from "../ui/ImageTrail";

export function AboutCyber() {
  return (
    // Fundo preto absoluto para manter a imersão dark
    <section className="bg-brand-black text-brand-white relative z-20 overflow-hidden">
      
      <ImageTrail>
        <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative z-10">
            
          {/* TÍTULO: Estilo Glitch/Hacker */}
          <h2 className="font-extrabold text-[2rem] md:text-[4rem] -tracking-tighter leading-[0.9] uppercase text-center mb-16 mix-blend-difference hover:text-green-500 transition-colors duration-300">
            Segurança <br/>
            <span className="text-brand-gray/50">&</span> <span className="text-green-500">Robustez</span>
          </h2>

          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 font-mono text-sm md:text-base border-t border-green-900/30 pt-12">
            
            {/* Coluna 1: A Narrativa */}
            <div className="space-y-6 text-brand-gray">
              <p>
                <strong className="text-green-400 block mb-2 font-extralight text-xl tracking-wider">SECURE BY DESIGN</strong>
                O interesse em cibersegurança não é apenas um hobby; é uma filosofia. Entender como sistemas são quebrados é o primeiro passo para construir sistemas indestrutíveis.
              </p>
              <p>
                Aquele terminal verde que você viu acima simboliza minha busca constante por vulnerabilidades antes que outros as encontrem. Desenvolvo pensando no Worst Case Scenario.
              </p>
            </div>
            
            {/* Coluna 2: Skills Técnicas de Segurança/Infra */}
            <div className="flex flex-col justify-between">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-green-500 rounded-sm group-hover:animate-ping"></span>
                    <span>OWASP Top 10 & Práticas de Segurança</span>
                </li>
                <li className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-green-500 rounded-sm group-hover:animate-ping"></span>
                    <span>Autenticação Robusta (OAuth, JWT, RBAC)</span>
                </li>
                <li className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-green-500 rounded-sm group-hover:animate-ping"></span>
                    <span>Cloud Infrastructure & CI/CD Seguro</span>
                </li>
              </ul>
              
              <div className="mt-10 pt-10 border-t border-green-900/30">
                 <p className="text-xs uppercase tracking-widest text-green-700 mb-2">Status do Sistema</p>
                 <div className="flex items-center gap-2 text-green-400 animate-pulse">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="font-mono text-sm">MONITORAMENTO ATIVO</p>
                 </div>
              </div>
            </div>

          </div>
          
          {/* Elemento Decorativo de Fundo (Grid Matrix sutil) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
          </div>

        </div>
      </ImageTrail>

    </section>
  );
}