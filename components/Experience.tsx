'use client'

import { motion } from 'framer-motion'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind css',
  'Node.js',
  'Mysql',
  'Git / GitHub',
]

const experience = [
  {
    role: 'Ingeniería en software y tecnologías emergentes',
    company: 'Universidad Autonoma De Baja California',
    period: '2019 - 2025',
    description:
      'Desarrollo de proyectos web, bases de datos, redes, y aplicaciones enfocadas en soluciones tecnológicas reales.',
  },
  {
    role: 'Desarrollador web',
    company: 'Proyectos académicos y personales',
    period: '2023 - Presente',
    description:
      'Creación de sistemas web con next.js, react y mysql, aplicando buenas prácticas y diseño moderno.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-24 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Experiencia & Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* experiencia */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Experiencia</h3>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l border-white/20 pl-6"
                >
                  <h4 className="text-lg font-semibold">
                    {item.role}
                  </h4>
                  <span className="text-sm text-gray-400">
                    {item.company} · {item.period}
                  </span>
                  <p className="text-gray-300 mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-white/10 text-sm text-gray-200 hover:bg-white/20 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
