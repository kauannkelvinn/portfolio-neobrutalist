import { Marquee } from "../ui/Marquee";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="bg-zinc-950 min-h-screen relative z-20 pb-32">
      
      <div className="mb-24 pt-12">
        <Marquee />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-display text-5xl md:text-7xl uppercase text-brand-white leading-none">
                Selected <br/> <span className="text-brand-red">Works</span>
            </h2>
            <p className="font-mono text-zinc-400 max-w-sm text-sm md:text-right pb-2">
                Uma coleção de experimentos, produtos e sistemas desenvolvidos com foco em performance e experiência do usuário.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>

        <div className="mt-24 flex justify-center">
            <a href="https://github.com/kauannkelvinn" target="_blank" className="group relative inline-block">
                <div className="absolute inset-0 bg-brand-red translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                <div className="relative bg-white text-black font-display text-xl px-12 py-4 border-2 border-black uppercase tracking-widest hover:-translate-y-1 hover:-translate-x-1 transition-transform cursor-pointer">
                    Ver GitHub Completo
                </div>
            </a>
        </div>
      </div>

    </section>
  );
}