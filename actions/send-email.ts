'use server'

import { z } from 'zod'
import { Resend } from 'resend'

export type FormState = {
  success: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState: FormState | null, formData: FormData): Promise<FormState> {
  const data = Object.fromEntries(formData.entries())
  
  const result = contactFormSchema.safeParse(data)

  if (!result.success) {
    return { 
      success: false, 
      errors: result.error.flatten().fieldErrors 
    }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'kauankelvin7777@gmail.com',
      subject: `Nova mensagem de ${result.data.name}`, 
      
      text: `Nome: ${result.data.name}\nEmail: ${result.data.email}\n\nMensagem:\n${result.data.message}`,
      
      replyTo: result.data.email, 
    })

    return { success: true, message: "Email enviado com sucesso!" }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return { success: false, message: "Erro ao enviar email. Tente novamente." }
  }
}