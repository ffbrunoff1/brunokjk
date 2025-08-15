import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Obras', href: '#obras' },
    { label: 'Contato', href: '#contact' }
  ]

  const legalLinks = [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Cookies', href: '#' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Bruno KJK</h3>
                  <p className="text-gray-400 text-sm">Autor de Romance</p>
                </div>
              </motion.div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Criando histórias que tocam o coração e despertam emoções profundas. 
                Cada livro é uma jornada através do amor e dos sentimentos humanos mais verdadeiros.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 block"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">ffbrunoff@yahoo.com.br</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <BookOpen className="w-5 h-5 text-primary-400 mt-1" />
                  <div className="text-gray-300">
                    <p>Disponível para:</p>
                    <p className="text-sm">Palestras • Parcerias • Eventos</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <Heart className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Não Perca Nenhum Lançamento</h3>
              <p className="text-gray-300 mb-6">
                Inscreva-se na minha newsletter e seja o primeiro a saber sobre novos livros, 
                eventos especiais e conteúdo exclusivo.
              </p>
              
              <motion.a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                <span>Seguir na Amazon</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                © 2024 Bruno KJK. Todos os direitos reservados.
              </motion.div>

              <motion.div
                className="flex items-center space-x-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex space-x-4 text-sm">
                  {legalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                
                <div className="text-gray-400 text-sm">
                  Criado com{' '}
                  <a 
                    href="https://papum.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="italic hover:text-primary-400 transition-colors duration-200"
                  >
                    Papum
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}