'use client'

import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(
        () => {
            alert('mensaje enviado correctamente')
            formRef.current?.reset()
        },
        (error) => {
            console.error(error)
            alert('error al enviar el mensaje')
        }
    )
}

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Contacto
        </motion.h2>

        <p className="text-center text-gray-400 mb-12">
          ¿Tienes un proyecto, vacante o idea? Hablemos.
        </p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Mensaje"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
          />

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Enviar Mensaje
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
