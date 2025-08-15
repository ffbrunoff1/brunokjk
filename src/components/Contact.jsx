import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, MapPin, Clock, Phone, BookOpen, Heart, CheckCircle, AlertCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recipientEmail: 'ffbrunoff@yahoo.com.br',
          token: token
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
    }
  }

  const contactInfo = [
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta",
      description: "9h às 18h (horário de Brasília)"
    },
    {
      icon: BookOpen,
      title: "Colaborações",
      content: "Parcerias & Projetos",
      description: "Aberto a novas oportunidades"
    }
  ]

  const reasons = [
    {
      icon: Heart,
      title: "Palestras & Eventos",
      description: "Convites para palestras sobre escrita criativa e literatura"
    },
    {
      icon: BookOpen,
      title: "Parcerias Editoriais",
      description: "Colaborações com editoras e projetos literários"
    },
    {
      icon: MessageCircle,
      title: "Feedback dos Leitores",
      description: "Compartilhe sua experiência com meus livros"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
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
            className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-5 h-5 text-primary-500" />
            <span className="text-primary-700 font-medium">Entre em Contato</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos Conversar sobre <span className="text-gradient">Literatura</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estou sempre disponível para conversar sobre meus livros, projetos futuros ou 
            qualquer assunto relacionado ao universo da literatura romântica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Conte-me sobre seu interesse em meus livros, ideias para parcerias ou qualquer assunto que gostaria de discutir..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {submitStatus && (
                  <motion.div
                    className={`p-4 rounded-xl flex items-center space-x-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>
                      {submitStatus === 'success' 
                        ? 'Mensagem enviada com sucesso! Responderei em breve.' 
                        : 'Erro ao enviar mensagem. Tente novamente.'
                      }
                    </span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
                </motion.button>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                />
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg card-hover"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-primary-600 font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Por que Entrar em Contato?</h3>
              
              <div className="space-y-4">
                {reasons.map((reason, index) => {
                  const IconComponent = reason.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{reason.title}</h4>
                        <p className="text-sm text-gray-600">{reason.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 text-white text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h4 className="text-xl font-semibold mb-2">Resposta Garantida</h4>
              <p className="opacity-90">
                Leio pessoalmente todas as mensagens e respondo em até 24 horas. 
                Sua opinião e interesse são muito importantes para mim!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}