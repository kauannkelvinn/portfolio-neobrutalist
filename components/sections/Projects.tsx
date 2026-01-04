"use client";

import { Marquee } from "../ui/Marquee";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "@/data/projects";
import FadeIn from "@/components/ui/FadeIn";
import LiquidSpotlightButton from "../ui/LiquidSpotlightButton";

export function Projects() {
  return (
    <section id="work" className="bg-zinc-950 min-h-screen relative z-20 pb-32">
      <FadeIn delay={0.1}>
        <div className="mb-24 pt-12">
          <Marquee />
        </div>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <FadeIn>
            <h2 className="font-body font-extrabold text-3xl md:text-5xl uppercase text-brand-white leading-none">
              Selected
              <br />
              Works
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <p className="font-body  text-zinc-400 max-w-sm text-lg md:text-right pb-2">
              Uma coleção de experimentos, produtos e sistemas desenvolvidos com
              foco em performance e experiência do usuário.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard
                index={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} direction="up">
          <div className="mt-24 flex justify-center">
            <a
              href="https://github.com/kauannkelvinn"
              target="_blank"
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-brand-red translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
              <div className="relative bg-white text-black font-heading px-12 py-4 border-2 border-black hover:-translate-y-1 hover:-translate-x-1 transition-transform cursor-pointer">
                Ver GitHub Completo
              </div>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
