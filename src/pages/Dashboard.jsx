import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { 
  Building, 
  MapPin, 
  Calendar, 
  DollarSign, 
  FileText, 
  Send, 
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  Users,
  Award
} from 'lucide-react'
import { projectTypes } from '../../mockData/data.js'

const Dashboard = () => {
  const { user } = useUser()
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectType: '',
    description: '',
    location: '',
    budget: '',
    timeline: '',
    startDate: '',
    contactPreference: 'email',
    additionalNotes: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const formatCurrency = (value) => {
    if (!value) return ''
    const number = value.replace(/[^0-9]/g, '')
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number)
  }

  const handleBudgetChange = (e) => {
    const formatted = formatCurrency(e.target.value)
    setFormData(prev => ({
      ...prev,
      budget: formatted
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your project request. Our team will review your requirements and get back to you within 24-48 hours.
          </p>
          <div className="space-y-3 text-sm text-gray-600">
            <p>📧 You'll receive a confirmation email shortly</p>
            <p>📞 We may call to discuss your project in detail</p>
            <p>📋 A detailed proposal will be prepared for your review</p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(1)
              setFormData({
                projectTitle: '',
                projectType: '',
                description: '',
                location: '',
                budget: '',
                timeline: '',
                startDate: '',
                contactPreference: 'email',
                additionalNotes: ''
              })
            }}
            className="mt-6 w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Contract EzyBuilds
          </h1>
          <p className="text-gray-600">
            Tell us about your project and we'll provide you with a detailed proposal and timeline.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-secondary text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-secondary' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 text-sm text-gray-600">
            <span className={currentStep >= 1 ? 'text-secondary font-medium' : ''}>Project Details</span>
            <span className="mx-4">•</span>
            <span className={currentStep >= 2 ? 'text-secondary font-medium' : ''}>Requirements</span>
            <span className="mx-4">•</span>
            <span className={currentStep >= 3 ? 'text-secondary font-medium' : ''}>Contact Info</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <form onSubmit={handleSubmit}>
            {/* Step 1: Project Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Modern Office Building Construction"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your project requirements, specifications, and any special considerations..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Downtown Business District, New York"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Requirements */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Requirements</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Budget *
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleBudgetChange}
                    required
                    placeholder="$500,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1+ years">1+ years</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any additional requirements, special considerations, or questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Info */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {user?.firstName?.charAt(0) || user?.emailAddresses[0]?.emailAddress?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-sm text-gray-600">
                        {user?.emailAddresses[0]?.emailAddress}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    We'll use your account information for communication. You can update your contact details in your profile.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === 'email'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === 'phone'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>Phone Call</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="both"
                        checked={formData.contactPreference === 'both'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>Both Email and Phone</span>
                    </label>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">What happens next?</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• We'll review your project requirements within 24-48 hours</li>
                        <li>• Our team will prepare a detailed proposal and timeline</li>
                        <li>• We'll schedule a consultation to discuss your project</li>
                        <li>• You'll receive a comprehensive quote and contract</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </motion.div>

        {/* Why Choose EzyBuilds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose EzyBuilds?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">15+ Years Experience</h4>
              <p className="text-gray-600">Proven track record in construction and project management</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">Skilled professionals with industry certifications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h4>
              <p className="text-gray-600">We stand behind our work with comprehensive warranties</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard 