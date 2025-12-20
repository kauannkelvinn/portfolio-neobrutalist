"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companies, stats } from "@/data/companies";
import FadeIn from "@/components/ui/FadeIn";

export function Companies() {
  return (
    <section id="statistics" className="bg-zinc-950 py-24 border-t-4 border-brand-white/10 relative z-20">
      
      <FadeIn>
        <div className="w-full overflow-hidden mb-32 relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-zinc-950 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-zinc-950 to-transparent pointer-events-none" />

            <div className="flex">
            <motion.div
                className="flex gap-16 md:gap-20 items-center pr-16 md:pr-32"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
                }}
            >
                {[...companies, ...companies, ...companies].map((company, index) => (
                <div key={index} className=" relative w-32 h-16 md:w-48 md:h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    />
                </div>
                ))}
            </motion.div>
            </div>
        </div>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} className="h-full">
                <div 
                className="bg-zinc-900 border-4 border-zinc-800 p-8 md:p-12 hover:border-brand-red hover:-translate-y-2 transition-all duration-300 group h-full"
                >
                <h3 className="font-heading text-6xl md:text-7xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors">
                    {stat.value}
                </h3>
                <p className="font-body text-zinc-400 uppercase tracking-widest text-sm md:text-base border-t border-zinc-700 pt-4 group-hover:border-brand-red/50 group-hover:text-white transition-colors">
                    {stat.label}
                </p>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>

    </section>
  );
}