'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'



export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl px-6"
        >
          <h1 className="text-5xl font-bold mb-6">
            Juan Carlos Cruz Hernandez
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Software Engineer · Web Developer · Tecnologías Emergentes
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-black transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-black transition"
            >
              Contacto
            </a>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
