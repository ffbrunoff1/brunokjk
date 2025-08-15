import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, ShoppingCart, Download, Gift, Quote, Sparkles } from 'lucide-react'

export default function Services() {
  const books = [
    {
      title: "Corações Entrelaçados",
      description: "Uma história envolvente sobre dois destinos que se encontram de forma inesperada, explorando os altos e baixos do amor verdadeiro.",
      genre: "Romance Contemporâneo",
      rating: 4.8,
      reviews: 156,
      features: ["Personagens cativantes", "Plot twist emocionante", "Final surpreendente"]
    },
    {
      title: "Sob as Estrelas de Paris",
      description: "Um romance internacional que leva os leitores numa jornada pela Cidade Luz, onde o amor floresce entre culturas diferentes.",
      genre: "Romance Internacional",
      rating: 4.9,
      reviews: 203,
      features: ["Ambientação europeia", "Romance multicultural", "Descrições envolventes"]
    },
    {
      title: "O Último Verão",
      description: "Uma narrativa tocante sobre segundas chances e o poder transformador do amor em momentos de mudança.",
      genre: "Romance Dramático",
      rating: 4.7,
      reviews: 98,
      features: ["Narrativa emocional", "Desenvolvimento profundo", "Mensagem inspiradora"]
    },
    {
      title: "Encontros do Destino",
      description: "Uma coletânea de histórias curtas que exploram diferentes facetas do amor moderno e suas complexidades.",
      genre: "Antologia Romântica",
      rating: 4.6,
      reviews: 134,
      features: ["Múltiplas histórias", "Estilos variados", "Leitura dinâmica"]
    }
  ]

  const services = [
    {
      icon: BookOpen,
      title: "Livros Publicados",
      description: "Acesso completo à minha biblioteca de romances, disponível em formato digital e físico",
      features: ["E-books instantâneos", "Edições impressas", "Atualizações exclusivas"]
    },
    {
      icon: Heart,
      title: "Newsletter Exclusiva",
      description: "Receba em primeira mão novidades sobre lançamentos, bastidores da escrita e conteúdo exclusivo",
      features: ["Lançamentos antecipados", "Bastidores da criação", "Conteúdo exclusivo"]
    },
    {
      icon: Gift,
      title: "Clube de Leitores",
      description: "Faça parte de uma comunidade apaixonada por romance com benefícios especiais e encontros virtuais",
      features: ["Descontos especiais", "Encontros virtuais", "Acesso prioritário"]
    }
  ]

  return (
    <section id="obras" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-2 mb-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-5 h-5 text-primary-500" />
            <span className="text-primary-700 font-medium">Minha Biblioteca</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Obras que Tocam o <span className="text-gradient">Coração</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada livro é uma jornada única através dos sentimentos humanos mais profundos. 
            Descubra histórias que irão marcar sua vida para sempre.
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {books.map((book, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                {/* Book cover placeholder */}
                <motion.div
                  className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                  <div className="relative text-center">
                    <BookOpen className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">{book.title}</div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-4 h-4 text-accent-500" />
                  </motion.div>
                </motion.div>

                {/* Book info */}
                <div className="flex-grow space-y-4">
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {book.genre}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{book.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{book.description}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{book.rating}</span>
                    <span className="text-sm text-gray-500">({book.reviews} avaliações)</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {book.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://www.amazon.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2 mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Comprar na Amazon</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Conecte-se com Minha <span className="text-gradient">Comunidade</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Faça parte de uma comunidade apaixonada por romance e tenha acesso a conteúdos exclusivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 justify-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="btn-secondary w-full mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saiba Mais
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para se Apaixonar por Uma Nova História?
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Explore minha coleção completa de romances e descubra por que milhares de leitores 
              já se emocionaram com minhas histórias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Ver Todos os Livros</span>
              </motion.a>
              
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Amostra Grátis</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}