'use client'

import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-bold text-white">
          Juan Carlos
        </span>

        <ul className="flex gap-8 text-sm text-gray-300 scroll-mt-24">
          <li>
            <a
              href="#"
              className="hover:text-white transition scroll-mt-24"
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-white transition scroll-mt-24"
            >
              Proyectos
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-white transition scroll-mt-24"
            >
              Experiencia
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-white transition scroll-mt-24"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
