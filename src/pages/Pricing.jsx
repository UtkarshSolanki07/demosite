import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Star, Building, Home, Factory, Wrench } from 'lucide-react'

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Residential",
      icon: <Home className="w-8 h-8" />,
      description: "Ideal for homes, flats, and small residential projects",
      price: "From ₹40 Lakhs*",
      duration: "2-6 months",
      features: [
        "Custom home construction",
        "Renovation & remodeling",
        "Kitchen & bathroom modernization",
        "Deck & terrace construction",
        "Interior finishing",
        "Quality guarantee",
        "Project management",
        "Handover & inspection"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Commercial",
      icon: <Building className="w-8 h-8" />,
      description: "Offices, retail, and commercial spaces",
      price: "From ₹1.5 Crore*",
      duration: "6-18 months",
      features: [
        "Office building construction",
        "Retail & outlet development",
        "Restaurant & hospitality",
        "Multi-story structures",
        "Electrical & HVAC systems",
        "Govt compliance",
        "Building approvals",
        "24/7 support"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Industrial",
      icon: <Factory className="w-8 h-8" />,
      description: "Warehouses and industrial plants",
      price: "From ₹3 Crore*",
      duration: "12-24 months",
      features: [
        "Warehouse construction",
        "Factory & manufacturing",
        "Heavy machine installation",
        "Industrial HVAC",
        "Logistics & loading docks",
        "Safety compliance",
        "Custom specs",
        "Annual maintenance"
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      name: "Design & Planning",
      price: "5-10% of project cost",
      description: "Architectural design, engineering and planning"
    },
    {
      name: "Permits & Approvals",
      price: "Included",
      description: "MCD, RERA and other statutory approvals"
    },
    {
      name: "Project Management",
      price: "Included",
      description: "Dedicated manager for end-to-end coordination"
    },
    {
      name: "Warranty & Support",
      price: "1-5 years included",
      description: "Construction warranty & post-handover support"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  // Feature list animation variant
  const featuresVariants = {
    hidden: { opacity: 0, y: 30, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.38, staggerChildren: 0.05 } },
    exit: { opacity: 0, y: 30, height: 0, transition: { duration: 0.28 } }
  }
  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-[900] tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-5">
            Transparent Indian Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Honest rates for every requirement – for homes, offices, and industries in Delhi NCR. <br/>
            Get a clear, custom quote without hidden charges.
          </p>
        </motion.div>
        {/* Pricing Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
        >
          {pricingPlans.map(plan => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`relative bg-white/95 rounded-2xl shadow-xl p-10 group border-2 transition-all duration-300 cursor-pointer overflow-hidden ${plan.popular ? 'border-purple-700 ring-2 ring-purple-300 scale-105 drop-shadow-2xl z-10' : 'border-gray-100 hover:border-blue-400 hover:scale-105'}`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-1 rounded-full text-sm font-bold shadow-lg">Most Popular</span>
                </div>
              )}
              <div className="text-center mb-6 pointer-events-none select-none">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200/70 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-200">
                  <div className="text-blue-700 group-hover:text-purple-700">{plan.icon}</div>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-md text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-3xl font-[900] text-purple-700 group-hover:text-blue-700 transition-colors">{plan.price}</span>
                  <span className="text-gray-600 ml-2 text-base font-medium">/ project</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Typical duration: {plan.duration}</p>
              </div>
              <AnimatePresence>
                <motion.ul
                  key={plan.id}
                  className="absolute left-0 right-0 bottom-0 p-8 pt-2 bg-white/95 flex flex-col gap-3 rounded-b-2xl z-30 shadow-md border-t border-blue-100 group-hover:block hidden"
                  initial="hidden"
                  whileIn="visible"
                  animate="visible"
                  exit="hidden"
                  variants={featuresVariants}
                >
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      variants={featureItemVariants}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
              <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-colors text-lg shadow group-hover:scale-105">
                Get Quote
              </button>
              <div className="absolute left-0 right-0 bottom-0 h-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:opacity-60 transition-all duration-300"/>
            </motion.div>
          ))}
        </motion.div>
        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 rounded-2xl shadow-xl p-10 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional & Included Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-1">{service.name}</h3>
                <p className="text-purple-700 font-semibold mb-2">{service.price}</p>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Why Choose Our Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Costs</h3>
            <p className="text-gray-600">
              Transparent pricing with no surprise fees. Everything is clearly outlined in your contract.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Premium materials and expert craftsmanship backed by comprehensive warranties.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
            <p className="text-gray-600">
              Every project is unique. We provide customized quotes based on your specific needs.
            </p>
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-6 opacity-90">
              Get a detailed, personalized quote for your building project in Delhi NCR or PAN India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/dashboard"
                className="bg-white text-[#6F3DFF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Quote
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing
