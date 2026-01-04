"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import LiquidSpotlightButton from "@/components/ui/LiquidSpotlightButton";

export default function ContactFooter() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-[90vh] bg-brand-black text-brand-white flex flex-col items-center justify-between px-4 py-20 overflow-hidden border-t border-white/10"
    >
      <div className="grow flex flex-col items-center justify-center w-full z-10">
        <div className="w-full text-center group cursor-default">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-display inline-block scale-x-[0.99] scale-y font-black text-[17vw] md:text-[14vw] uppercase leading-none mix-blend-difference text-center"
          >
            VAMOS <br />
            <span className="stroke-white">CONVERSAR?</span>
          </motion.h2>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8">
          <LiquidSpotlightButton href="mailto:kauankelvinfullstack@gmail.com">
            <Mail size={20} />
            <span>Enviar Email</span>
          </LiquidSpotlightButton>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-20 border-t border-white/5 pt-8 items-end">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <div className="scale-100 px-0 py-0 origin-left flex gap-4">
            <LiquidSpotlightButton href="https://www.linkedin.com/in/kauannkelvinn">
              <Linkedin size={13} /> 
            </LiquidSpotlightButton>

            <LiquidSpotlightButton href="https://www.github.com/kauannkelvinn">
              <Github size={13} />
            </LiquidSpotlightButton>
          </div>
        </div>

        <div className="text-center font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          <span>BRASIL</span>
        </div>

        <div className="text-center md:text-right flex flex-col gap-1 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          <span>DESIGN & CODE BY KAUAN KELVIN</span>
          <span>©2025 — ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </section>
  );
}
