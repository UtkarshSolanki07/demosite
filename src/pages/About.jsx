import React from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart,
  Shield,
  Lightbulb,
  UserCheck,
  Leaf,
  Trophy,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Building2 },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Integrity & Transparency',
      description: 'We believe in honest communication and ethical business practices in every project we undertake.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Commitment to Quality',
      description: 'Our dedication to excellence ensures every project meets the highest standards of craftsmanship.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: UserCheck,
      title: 'Customer Focus',
      description: 'Your vision drives our work. We prioritize client satisfaction and long-term relationships.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Sustainability',
      description: 'We embrace cutting-edge technologies and eco-friendly practices for a better tomorrow.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Safety & Respect',
      description: 'Creating a safe work environment while respecting our team, clients, and communities.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Committed to sustainable building practices that protect our planet for future generations.',
      color: 'from-teal-500 to-green-500'
    }
  ]

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About EzyBuilds
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Transforming visions into reality with <span className="font-semibold text-blue-600">15+ years</span> of construction excellence. 
              We don't just build structures – we craft legacies that stand the test of time.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <Leaf className="w-5 h-5 text-emerald-500" />
                <span className="font-medium">Eco-Friendly</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/60 backdrop-blur">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To provide reliable and innovative construction solutions that exceed client expectations while fostering a safe and collaborative work environment. We are committed to building not just structures, but lasting relationships and sustainable communities.
              </p>
              <div className="space-y-3">
                {['Quality Excellence', 'Client Satisfaction', 'Safety First', 'Innovation Focus'].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To be recognized as the leading construction company that shapes skylines and communities through innovative design, sustainable practices, and unwavering commitment to quality. We envision a future where every project contributes to a better world.
              </p>
              <div className="space-y-3">
                {['Industry Leadership', 'Sustainable Future', 'Community Impact', 'Global Recognition'].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/40 backdrop-blur">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-xl">
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-xl mb-10 opacity-90 font-medium">
              Let's transform your vision into reality. Our expert team is ready to bring your ideas to life with precision, quality, and care. 
              <br/>Experience transparent communication and unwavering support at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:from-cyan-400 hover:to-indigo-500 focus:outline-none flex items-center gap-3 justify-center text-lg transition-all duration-200 group"
              >
                <span className="inline-block group-hover:translate-x-1 transition-transform">Start Your Project</span>
                <ArrowRight className="w-5 h-5 animate-bounce-x group-hover:text-yellow-300 duration-300" />
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-3 shadow-xl justify-center text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Today</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About