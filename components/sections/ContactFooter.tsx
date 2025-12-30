"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function ContactFooter() {
  return (
    <section id="contact" className="relative w-full min-h-[90vh] bg-brand-black text-brand-white flex flex-col items-center justify-between px-4 py-20 overflow-hidden border-t border-white/10">

      <div className="grow flex flex-col items-center justify-center w-full z-10">

        <div className="w-full text-center group cursor-default">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-[15vw] uppercase leading-[0.8] tracking-tighter mix-blend-difference text-center"
          >
            VAMOS <br />
            <span className="text-transparent stroke-white group-hover:text-brand-red group-hover:stroke-none transition-all duration-500 ease-in-out">
              CONVERSAR?
            </span>
          </motion.h2>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="font-body text-zinc-500 text-center max-w-md text-sm md:text-lg uppercase tracking-widest">
            Projetos, Collabs ou apenas um &quot;Oi&quot;
          </p>
          <Link
            href="mailto:seu@email.com"
            // 👇 MUDANÇAS NO DESIGN:
            // bg-white/5 + backdrop-blur-md: Cria o efeito de vidro fosco.
            // border-white/10: Borda sutil e elegante.
            // hover:bg-brand-red: Acende em vermelho no hover.
            // hover:shadow-[...]: Adiciona um brilho neon vermelho ao redor.
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-display text-xl uppercase tracking-widest text-white transition-all duration-500 hover:bg-brand-red hover:border-brand-red hover:scale-105 hover:shadow-[0_0_30px_rgba(247,29,29,0.5)]"
          >
            {/* Ícone com animação leve */}
            <Mail size={20} className="text-zinc-400 group-hover:text-white transition-colors" />

            <span>Enviar Email</span>

            <ArrowUpRight className="w-5 h-5 text-zinc-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-20 font-mono text-[10px] md:text-xs text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-8 items-end">

        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/kauannkelvinn"
            target='_blank'
            className="flex items-center gap-2 hover:text-brand-white transition-colors"
          >
            <Linkedin size={14} /> LINKEDIN
          </a>
          <a
            href="https://www.github.com/kauannkelvinn"
            target='_blank'
            className="flex items-center gap-2 hover:text-brand-white transition-colors"
          >
            <Github size={14} /> GITHUB
          </a>
        </div>

        <div className="text-center">
          <span>FORTALEZA, CEARÁ — BRASIL</span>
        </div>

        <div className="text-center md:text-right flex flex-col gap-1">
          <span>DESIGN & CODE BY KAUAN KELVIN</span>
          <span>©2025 — ALL RIGHTS RESERVED</span>
        </div>
      </div>

    </section>
  );
}