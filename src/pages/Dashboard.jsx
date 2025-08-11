import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { 
  Building, MapPin, Calendar, DollarSign, FileText, Send, CheckCircle,
  AlertCircle, Clock, Star, Users, Award, Sparkles, Shield, Trophy
} from 'lucide-react'
import { supabase } from '../utils/supabaseClient'

// Mock project types data
const projectTypes = [
  { id: 1, name: 'Residential Construction', description: 'Homes, apartments, condos' },
  { id: 2, name: 'Commercial Building', description: 'Offices, retail, warehouses' },
  { id: 3, name: 'Renovation & Remodeling', description: 'Updates and improvements' },
  { id: 4, name: 'Infrastructure', description: 'Roads, bridges, utilities' },
  { id: 5, name: 'Industrial Construction', description: 'Factories, plants, facilities' }
]

const stringToBigInt = (str) => {
  let hash = 0n
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31n + BigInt(str.charCodeAt(i))) % 9223372036854775807n
  }
  return hash
}

const Dashboard = () => {
  const { user } = useUser()
  const [formData, setFormData] = useState({
    projectTitle: '', projectType: '', description: '', location: '',
    budget: '', timeline: '', startDate: '', contactPreference: 'email', additionalNotes: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleBudgetChange = (e) => {
    const number = e.target.value.replace(/[^0-9]/g, '')
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(number)
    setFormData(prev => ({ ...prev, budget: formatted }))
  }

const handleSubmit = async () => {
    setIsSubmitting(true)
    const numericId = stringToBigInt(user.id)
    const contractData = {
      user_id: numericId.toString(),
      project_title: formData.projectTitle,
      project_type: formData.projectType,
      descrption: formData.description,
      location: formData.location,
      budget: formData.budget,
      timeline: formData.timeline,
      start_date: formData.startDate,
      additional_notes: formData.additionalNotes,
      contact_pref: formData.contactPreference,
    }

    const { error } = await supabase.from('Contracts').upsert([contractData], { onConflict: 'user_id' })

    if (error) {
      console.error('Error saving contract:', error)
      setIsSubmitting(false)
      return
    }

    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setCurrentStep(1)
    setFormData({
      projectTitle: '', projectType: '', description: '', location: '',
      budget: '', timeline: '', startDate: '', contactPreference: 'email', additionalNotes: ''
    })
  }

  // Success page component
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
            Request Submitted!
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for your project request. Our expert team will review your requirements and get back to you within 24-48 hours.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { icon: '📧', text: 'Confirmation email sent' },
              { icon: '📞', text: 'Personal consultation call' },
              { icon: '📋', text: 'Detailed proposal prepared' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="flex items-center justify-center gap-3 text-gray-700"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <button
            onClick={resetForm}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    )
  }

  const stepTitles = ['Project Details', 'Requirements', 'Contact Info']
  const stepIcons = [Building, DollarSign, Users]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 max-w-4xl py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Contract EzyBuilds
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into reality. Tell us about your project and we'll provide you with a detailed proposal and timeline.
          </p>
        </motion.div>

        {/* Enhanced Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step, index) => {
              const Icon = stepIcons[index]
              const isActive = step <= currentStep
              const isCompleted = step < currentStep
              
              return (
                <div key={step} className="flex items-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'bg-white text-gray-400 border-2 border-gray-200'
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>
                    )}
                  </motion.div>
                  {step < 3 && (
                    <div className={`w-20 h-1 mx-4 rounded-full transition-all duration-500 ${
                      step < currentStep ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="flex justify-center mt-6 text-sm">
            {stepTitles.map((title, index) => (
              <span key={index} className={`${index > 0 ? 'ml-24' : ''} ${
                currentStep > index ? 'text-blue-600 font-bold' : 'text-gray-500'
              }`}>
                {title}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
        >
          <div>
            {/* Step 1: Project Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Details</h3>
                  <p className="text-gray-600">Let's start with the basics of your project</p>
                </div>
                
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Modern Office Building Construction"
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type.id} value={type.name}>
                          {type.name} - {type.description}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Describe your project requirements, specifications, and any special considerations..."
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Downtown Business District, New York"
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Requirements */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Requirements</h3>
                  <p className="text-gray-600">Help us understand your timeline and budget</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Estimated Budget *
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleBudgetChange}
                      required
                      placeholder="$500,000"
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="1+ years">1+ years</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any additional requirements, special considerations, or questions..."
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 resize-none"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Info */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-gray-600">We're almost done! Let's finalize your contact preferences</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {user?.firstName?.charAt(0) || user?.emailAddresses[0]?.emailAddress?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-gray-600">
                        {user?.emailAddresses[0]?.emailAddress}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    We'll use your account information for communication. You can update your contact details in your profile.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Preferred Contact Method
                  </label>
                  <div className="grid gap-4">
                    {[
                      { value: 'email', label: 'Email', icon: '📧' },
                      { value: 'phone', label: 'Phone Call', icon: '📞' },
                      { value: 'both', label: 'Both Email and Phone', icon: '📱' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 cursor-pointer transition-all duration-300">
                        <input
                          type="radio"
                          name="contactPreference"
                          value={option.value}
                          checked={formData.contactPreference === option.value}
                          onChange={handleInputChange}
                          className="mr-4 scale-125"
                        />
                        <span className="text-xl mr-3">{option.icon}</span>
                        <span className="font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">What happens next?</h4>
                      <ul className="text-sm text-blue-800 space-y-2">
                        <li className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          We'll review your project requirements within 24-48 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Our team will prepare a detailed proposal and timeline
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          We'll schedule a consultation to discuss your project
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          You'll receive a comprehensive quote and contract
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
                >
                  Previous
                </button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Why Choose EzyBuilds Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Why Choose EzyBuilds?
            </h3>
            <p className="text-gray-600 text-lg">Trusted by thousands of clients for exceptional construction services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Trophy, 
                title: '15+ Years Experience', 
                description: 'Proven track record in construction and project management',
                color: 'from-yellow-400 to-orange-500'
              },
              { 
                icon: Users, 
                title: 'Expert Team', 
                description: 'Skilled professionals with industry certifications',
                color: 'from-blue-400 to-purple-500'
              },
              { 
                icon: Shield, 
                title: 'Quality Guarantee', 
                description: 'We stand behind our work with comprehensive warranties',
                color: 'from-green-400 to-blue-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard