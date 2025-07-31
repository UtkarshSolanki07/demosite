import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Building, Home, Factory, Wrench } from 'lucide-react'

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Residential",
      icon: <Home className="w-8 h-8" />,
      description: "Perfect for homes and small residential projects",
      price: "From $50,000",
      duration: "2-6 months",
      features: [
        "Custom home construction",
        "Renovation & remodeling",
        "Kitchen & bathroom updates",
        "Deck & patio construction",
        "Interior finishing",
        "Quality guarantee",
        "Project management",
        "Final inspection"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Commercial",
      icon: <Building className="w-8 h-8" />,
      description: "Ideal for office buildings and retail spaces",
      price: "From $200,000",
      duration: "6-18 months",
      features: [
        "Office building construction",
        "Retail space development",
        "Restaurant & hospitality",
        "Multi-story structures",
        "HVAC & electrical systems",
        "ADA compliance",
        "Building permits",
        "24/7 support"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Industrial",
      icon: <Factory className="w-8 h-8" />,
      description: "Large-scale industrial and warehouse projects",
      price: "From $500,000",
      duration: "12-24 months",
      features: [
        "Warehouse construction",
        "Factory & manufacturing",
        "Heavy machinery installation",
        "Industrial HVAC systems",
        "Loading dock facilities",
        "Safety compliance",
        "Custom specifications",
        "Ongoing maintenance"
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      name: "Design & Planning",
      price: "5-15% of project cost",
      description: "Architectural design, engineering, and project planning"
    },
    {
      name: "Permits & Inspections",
      price: "Included",
      description: "All necessary permits and regulatory compliance"
    },
    {
      name: "Project Management",
      price: "Included",
      description: "Dedicated project manager throughout construction"
    },
    {
      name: "Warranty & Support",
      price: "1-5 years included",
      description: "Comprehensive warranty and post-construction support"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in transparent, competitive pricing for all our construction services. 
            Get a detailed quote tailored to your specific project requirements.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`relative bg-white rounded-lg shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-secondary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-secondary">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ project</span>
                </div>
                <p className="text-sm text-gray-500">Typical duration: {plan.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Get Quote
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-secondary font-bold mb-2">{service.price}</p>
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
          <div className="bg-secondary rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-6 opacity-90">
              Get a detailed, personalized quote for your construction project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/dashboard"
                className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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