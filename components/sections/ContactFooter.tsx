'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { sendEmail } from '@/actions/send-email'
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'

export default function ContactFooter() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    
    const formData = new FormData(event.currentTarget)
    const res = await sendEmail(null, formData)
    
    if (res?.success) {
      setMessage('Mensagem enviada! Entrarei em contato em breve.')
      ;(event.target as HTMLFormElement).reset()
    } else {
      setMessage(res?.message || 'Erro ao enviar. Tente novamente.')
    }
    setPending(false)
  }

  return (
    <section className="relative w-full bg-black text-white pt-20 flex flex-col justify-between min-h-screen">
      
      <div className="container mx-auto px-4 md:px-6 grow flex flex-col justify-center items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl"
        >
          <div className="mb-12 text-center">
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Vamos <span className="text-red-600">Conversar?</span>
            </h2>
            <p className="font-body text-zinc-400 text-lg">
              Tem um projeto em mente ou quer apenas trocar uma ideia?
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 border border-red-600/0 group-hover:border-red-600/30 transition-colors duration-500 rounded-xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold font-heading uppercase tracking-wider text-red-500">Nome</label>
                  <input 
                    name="name" 
                    required 
                    type="text" 
                    className="w-full bg-black/50 border border-zinc-700 focus:border-red-500 text-white p-3 rounded-md outline-none transition-all placeholder:text-zinc-600"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold font-heading uppercase tracking-wider text-red-500">Email</label>
                  <input 
                    name="email" 
                    required 
                    type="email" 
                    className="w-full bg-black/50 border border-zinc-700 focus:border-red-500 text-white p-3 rounded-md outline-none transition-all placeholder:text-zinc-600"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold font-heading uppercase tracking-wider text-red-500">Mensagem</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4}
                  className="w-full bg-black/50 border border-zinc-700 focus:border-red-500 text-white p-3 rounded-md outline-none transition-all resize-none placeholder:text-zinc-600"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button 
                disabled={pending}
                type="submit" 
                className="font-heading w-full bg-white text-black font-black uppercase tracking-widest py-4 hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {pending ? 'Enviando...' : 'Enviar Mensagem'}
                {!pending && <ArrowUpRight size={20} />}
              </button>

              {message && (
                <p className="text-center text-sm font-medium mt-4 text-zinc-300 animate-pulse">
                  {message}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      <footer className="w-full bg-[#7f1d1d] text-black mt-24 py-12 border-t-4 border-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            
            <div className="space-y-4">
               {['Home', 'Work', 'Skills', 'Contact'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} className="block text-2xl md:text-4xl font-black font-heading uppercase tracking-tighter hover:text-white transition-colors cursor-pointer border-b-2 border-black/20 hover:border-white w-max">
                   {item}
                 </a>
               ))}
            </div>

            <div className="flex flex-col gap-6 md:items-end">
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                  <Github size={24} />
                </a>
              </div>
              
              <div className="font-heading flex flex-col md:items-end font-bold uppercase tracking-widest text-sm opacity-80">
                <span>Developed by Kauan Kelvin</span>
                <span>All Rights Reserved</span>
                <span className="mt-2 text-white">Brazil 2025</span>
              </div>
            </div>
          </div>
          
          <div className="w-full h-1 bg-black/20 mt-12 mb-2" />
        </div>
      </footer>
    </section>
  )
}