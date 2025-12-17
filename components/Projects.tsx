'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Centro Deportivo',
    description: 'Sistema web para gestión de eventos, inscripciones y reportes, para el Centro Deportivo De Tijuana.',
    tech: ['PHP', 'JavaScript', 'HTML', 'mysql'],
    github: 'https://github.com/RodolfoHubster/Centro-Deportivo',
    demo: 'https://cimahub-fcitec.tij.uabc.mx/Centro-Deportivo/public/',
    image: '/projects/Centro-deportivo.png',
  },
  {
    title: 'Portafolio Personal',
    description: 'Cv web moderno con animaciones y diseño profesional.',
    tech: ['Next.js', 'Tailwind', 'Framer motion'],
    github: 'https://github.com/juancruz11-afk/Web-Personal.git',
    demo: 'http://localhost:3000/#',
    image: '/projects/Cv.png',
  },
  {
  title: 'AI Semantic Movie Recommender',
  description: 'Motor de búsqueda semántica que recomienda películas interpretando el lenguaje natural del usuario (NLP). Utiliza embeddings vectoriales para entender el contexto (ej: "tristeza en el espacio") en lugar de simples palabras clave. El sistema conecta con la API de TMDB para obtener proveedores de streaming en tiempo real.',
  tech: ['Python (FastAPI & Pandas)', 'Machine Learning (Scikit-learn & Sentence-Transformers)', 'Next.js 14 & Tailwind CSS'
  ],
  github: 'https://github.com/juancruz11-afk/Recomendacion-Pelicula.git',
  demo: 'https://recomendacion-pelicula.vercel.app',
  image: '/images/movie-project.png',
}

]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white transition"
                  >
                    github →
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white transition"
                  >
                    demo →
                  </a>
                )}

                {project.image && (
                  <a
                    href={project.image}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white transition"
                  >
                    image →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
