import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Pen, Award, Users, Coffee, Quote } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: BookOpen,
      title: "10+ Livros Publicados",
      description: "Uma rica coleção de romances que conquistaram leitores apaixonados"
    },
    {
      icon: Award,
      title: "Bestseller Amazon",
      description: "Múltiplos títulos entre os mais vendidos na categoria romance"
    },
    {
      icon: Users,
      title: "Milhares de Leitores",
      description: "Uma comunidade crescente de fãs apaixonados pelas minhas histórias"
    },
    {
      icon: Heart,
      title: "Avaliações 5 Estrelas",
      description: "Reconhecimento constante pela qualidade emocional das narrativas"
    }
  ]

  const timeline = [
    {
      year: "2018",
      title: "Início da Jornada",
      description: "Primeiros passos no mundo da escrita, explorando o universo do romance contemporâneo"
    },
    {
      year: "2019",
      title: "Primeira Publicação",
      description: "Lançamento do primeiro livro, marcando o início de uma carreira promissora"
    },
    {
      year: "2021",
      title: "Reconhecimento",
      description: "Primeiros sucessos comerciais e reconhecimento da crítica especializada"
    },
    {
      year: "2024",
      title: "Consolidação",
      description: "Estabelecimento como uma das vozes emergentes do romance brasileiro"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Pen className="w-5 h-5 text-primary-500" />
            <span className="text-primary-700 font-medium">Sobre o Autor</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Minha Paixão por <span className="text-gradient">Contar Histórias</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada palavra que escrevo carrega a intenção de tocar corações e despertar emoções. 
            No universo do romance, encontro a liberdade de explorar os sentimentos mais profundos da alma humana.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary-200" />
              <blockquote className="text-lg text-gray-700 italic leading-relaxed pl-8">
                "Acredito que cada pessoa carrega dentro de si uma história única de amor, 
                e meu papel como escritor é dar vida a essas narrativas que tocam a essência do ser humano."
              </blockquote>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Minha jornada como autor começou com uma simples paixão: a crença de que o amor, 
                em todas as suas formas, é a força mais poderosa que move o mundo. Cada livro que escrevo 
                é uma exploração diferente dessa força universal.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Especializado no gênero romance, dedico-me a criar personagens autênticos e situações 
                que ressoam com as experiências reais dos leitores. Meus livros abordam desde romances 
                contemporâneos até narrativas que exploram os desafios do amor moderno.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Quando não estou escrevendo, gosto de observar as pessoas, viajar e colecionar 
                histórias cotidianas que frequentemente se transformam em inspiração para meus próximos projetos.
              </p>
            </div>

            <motion.div
              className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Coffee className="w-8 h-8 text-primary-500" />
              <div>
                <h4 className="font-semibold text-gray-900">Ritual de Escrita</h4>
                <p className="text-gray-600">Café forte, música ambiente e muita inspiração para criar histórias inesquecíveis</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Author image placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto">
                      <Pen className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-700">Bruno KJK</div>
                    <div className="text-gray-600">Escritor & Autor</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <BookOpen className="w-6 h-6 text-primary-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Heart className="w-6 h-6 text-accent-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conquistas e <span className="text-gradient">Reconhecimentos</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Minha <span className="text-gradient">Jornada Literária</span>
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        className="bg-white p-6 rounded-2xl shadow-lg card-hover"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="relative flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg z-10" />
                    </div>

                    <div className="w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}