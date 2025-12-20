import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  index: number;
}

export function ProjectCard({ title, description, tags, link, index }: ProjectProps) {
  return (
    <div className="group relative block bg-zinc-900 border-4 border-brand-white/10 hover:border-brand-red transition-all duration-300 h-full">
      
      <Link 
        href={link} 
        className="absolute inset-0 z-20"
        aria-label={`Ver projeto ${title}`}
      >
        <span className="sr-only">Ver Projeto</span>
      </Link>

      <div className="absolute inset-0 bg-brand-red translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

      <div className="p-6 md:p-10 flex flex-col h-full bg-zinc-900 relative z-10">
        
        <span className="font-heading text-brand-red text-xs mb-4 block opacity-80">
          {(index + 1).toString().padStart(2, '0')} PROJECT
        </span>

        <div className="flex justify-between items-start mb-6">
          <h3 className="font-heading font-extrabold text-xl md:text-2xl uppercase leading-[0.9] text-brand-white group-hover:text-brand-red transition-colors max-w-[80%]">
            {title}
          </h3>
          <div className="bg-brand-white text-brand-black p-1 rounded-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
             <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>

        <p className="font-body text-sm text-zinc-400 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-white/10 group-hover:border-brand-red/30 transition-colors">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="font-heading text-[10px] md:text-xs uppercase tracking-wider border border-white/20 px-2 py-1 rounded-sm text-zinc-300 group-hover:border-brand-red group-hover:text-brand-red transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}