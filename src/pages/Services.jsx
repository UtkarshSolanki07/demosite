import React from 'react'
import { Hammer, Building2, Users, RefreshCw, Sparkles, Briefcase, Home, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    name: 'Residential Construction',
    icon: Home,
    desc: 'Building and renovating homes with attention to detail and quality craftsmanship. From ground-up homes to luxury remodels.'
  },
  {
    name: 'Commercial Projects',
    icon: Briefcase,
    desc: 'Efficient, reliable construction for commercial buildings, retail spaces, and offices. Designed for your growth.'
  },
  {
    name: 'Custom Renovations',
    icon: RefreshCw,
    desc: 'Tailored renovation services to transform your space. We handle upgrades, expansions, and creative re-imaginings.'
  },
  {
    name: 'Green Building & Sustainability',
    icon: Sparkles,
    desc: 'Eco-friendly engineering, using sustainable materials and methods for a future-proof environment.'
  },
  {
    name: 'Project Management',
    icon: Users,
    desc: 'Full project oversight: budget, timeline, and quality control from start to handover, so you stay stress-free.'
  },
  {
    name: 'Consulting & Planning',
    icon: Hammer,
    desc: 'Strategy, design, and regulatory permits. We guide you with clarity and experience at every step.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-14 flex flex-col justify-between">
      <div className="container mx-auto px-4 flex-1">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-5">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Experience a breadth of construction solutions delivered with expertise and heart. Our team is devoted to excellence, transparency, and tailored client results.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px 0 rgba(64,85,221,0.09)' }}
              className="bg-white/90 shadow-lg hover:shadow-2xl border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center group transition-all duration-300 h-full"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-blue-500 to-purple-500 shadow group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h2>
              <p className="text-gray-600 text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <section className="mt-12 py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-xl">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl mb-10 opacity-90 font-medium">
              Reach out now for a free consultation with our experts. Our commitment is to guiding you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:from-cyan-400 hover:to-indigo-500 focus:outline-none flex items-center gap-3 justify-center text-lg transition-all duration-200 group"
              >
                <span className="inline-block group-hover:translate-x-1 transition-transform">Get Started</span>
                <ArrowRight className="w-5 h-5 animate-bounce-x group-hover:text-yellow-300 duration-300" />
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-3 shadow-xl justify-center text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Our Team</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
