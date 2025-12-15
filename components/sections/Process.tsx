"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { processSteps } from "@/data/process";
import { Plus, Minus } from "lucide-react";

export function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-red text-brand-black py-24 relative z-20 border-t-4 border-brand-black">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 border-b-4 border-brand-black pb-8">
            <h2 className="font-display text-[4rem] md:text-[6rem] leading-none uppercase">
                Metodologia
            </h2>
            <p className="font-mono text-xl md:text-2xl mt-4 font-bold opacity-80">
                DO START AO DEPLOY
            </p>
        </div>

        <div className="flex flex-col border-t-4 border-brand-black">
          {processSteps.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={step.id} 
                className="border-b-4 border-brand-black group cursor-pointer transition-colors hover:bg-black hover:text-brand-red"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between py-8 md:py-10 px-2 md:px-4">
                    <div className="flex items-center gap-6 md:gap-12">
                        <span className="font-mono text-2xl md:text-3xl font-bold opacity-50 group-hover:opacity-100">
                            {step.id}
                        </span>
                        <h3 className="font-display text-3xl md:text-6xl uppercase leading-none">
                            {step.title}
                        </h3>
                    </div>
                    
                    <div className="text-2xl md:text-4xl">
                        {isOpen ? <Minus strokeWidth={3} /> : <Plus strokeWidth={3} />}
                    </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-14 md:pl-28 pr-6 max-w-4xl">
                        <p className="font-mono text-lg md:text-xl leading-relaxed font-medium">
                            {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}