import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Sparkles, Quote, ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-32 right-20 text-primary-300"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <BookOpen size={40} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-accent-300"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 3 }}
      >
        <Heart size={32} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 text-primary-200"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      >
        <Sparkles size={28} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm"
              variants={itemVariants}
            >
              <Quote className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-medium text-gray-700">Autor de Romance</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-gray-900">Olá, eu sou</span>
              <br />
              <span className="text-black">Bruno KJK</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Criador de histórias que tocam o coração e despertam emoções profundas. 
              Cada página é uma jornada através do amor, da paixão e dos sentimentos humanos mais verdadeiros.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                <span>Descobrir Meus Livros</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                <span>Conhecer Minha História</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-8 pt-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Obras Publicadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Leitores Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5★</div>
                <div className="text-sm text-gray-600">Avaliação Média</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main image placeholder */}
              <motion.div
                className="relative w-full h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <BookOpen className="w-16 h-16 text-primary-500 mx-auto" />
                    <div className="text-2xl font-bold text-gray-700">Bruno KJK</div>
                    <div className="text-gray-600">Autor de Romance</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Romance</div>
                    <div className="text-sm text-gray-600">Especialidade</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 2 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Bestseller</div>
                    <div className="text-sm text-gray-600">Amazon</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}