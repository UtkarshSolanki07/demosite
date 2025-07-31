import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { 
  User,  Mail, Phone, MapPin, Calendar, Edit, Save, X,Camera,Building,Briefcase,Star,DollarSign,CheckCircle,Clock,
  Star as StarIcon
} from 'lucide-react'
import { mockClients, mockProjects } from '../../mockData/data.js'

const Profile = () => {
  const { user } = useUser()
  const [isEditing, setIsEditing] = useState(false)
  const [clientData, setClientData] = useState(null)
  const [clientProjects, setClientProjects] = useState([])
  const [formData, setFormData] = useState({})
  const [avatarFile, setAvatarFile] = useState(null)
  
  // Ref for hidden file input
  const fileInputRef = React.useRef(null)
  
  // Load avatar from localStorage on mount
  React.useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar')
    if (savedAvatar) {
      setAvatarFile(savedAvatar)
      setFormData(prev => ({ ...prev, avatar: savedAvatar }))
    }
  }, [])
  
  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  
  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarFile(reader.result)
        setFormData(prev => ({ ...prev, avatar: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    // Find client data based on email
    const currentClient = mockClients.find(c => c.email === user?.emailAddresses[0]?.emailAddress)
    if (currentClient) {
      setClientData(currentClient)
      // Get client's projects
      const projects = mockProjects.filter(project => 
        currentClient.projects.includes(project.id)
      )
      setClientProjects(projects)
      setFormData({
        firstName: currentClient.firstName,
        lastName: currentClient.lastName,
        phone: currentClient.phone,
        company: currentClient.company,
        position: currentClient.position,
        address: currentClient.address,
        preferredContact: currentClient.preferredContact
      })
    } else {
      const defaultClient = {
        firstName: user?.firstName || 'Demo',
        lastName: user?.lastName || 'Client',
        email: user?.emailAddresses[0]?.emailAddress || 'demo@client.com',
        phone: '+1 (555) 000-0000',
        company: 'Demo Company',
        position: 'Manager',
        joinDate: new Date().toISOString(),
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        projects: [],
        totalSpent: 0,
        completedProjects: 0,
        activeProjects: 0,
        averageRating: null,
        status: 'Active',
        address: '123 Demo St, Demo City, DC 12345',
        preferredContact: 'email'
      }
      setClientData(defaultClient)
      setClientProjects([])
      setFormData({
        firstName: defaultClient.firstName,
        lastName: defaultClient.lastName,
        phone: defaultClient.phone,
        company: defaultClient.company,
        position: defaultClient.position,
        address: defaultClient.address,
        preferredContact: defaultClient.preferredContact
      })
    }
  }, [user])

  const handleSave = () => {
    // In a real app, this would update the client data via API
    setClientData(prev => ({
      ...prev,
      ...formData,
      avatar: avatarFile || prev.avatar,
    }))
    if (avatarFile) {
      localStorage.setItem('userAvatar', avatarFile)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      firstName: clientData.firstName,
      lastName: clientData.lastName,
      phone: clientData.phone,
      company: clientData.company,
      position: clientData.position,
      address: clientData.address,
      preferredContact: clientData.preferredContact
    })
    setIsEditing(false)
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!clientData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
              <p className="text-gray-600">Your client profile and project history with EzyBuilds</p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isEditing 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-secondary text-white hover:bg-secondary/90'
              }`}
            >
              {isEditing ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Avatar Section */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={avatarFile || clientData.avatar}
                    alt={`${clientData.firstName} ${clientData.lastName}`}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg cursor-pointer"
                    onClick={isEditing ? handleAvatarClick : undefined}
                  />
                  {isEditing && (
                    <>
                      <button
                        type="button"
                        onClick={handleAvatarClick}
                        className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full shadow-lg hover:bg-secondary/90 transition-colors"
                      >
                        <Camera className="w-4 h-4" />
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleAvatarChange}
                        className="hidden"
                      />
                    </>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mt-4">
                  {clientData.firstName} {clientData.lastName}
                </h2>
                <p className="text-gray-600">{clientData.position}</p>
                <p className="text-sm text-gray-500">{clientData.company}</p>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {clientData.status}
                  </span>
                </div>
              </div>

              {/* Client Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Completed Projects</span>
                  </div>
                  <span className="font-semibold text-gray-900">{clientData.completedProjects}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Active Projects</span>
                  </div>
                  <span className="font-semibold text-gray-900">{clientData.activeProjects}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Total Spent</span>
                  </div>
                  <span className="font-semibold text-gray-900">{formatCurrency(clientData.totalSpent)}</span>
                </div>
                {clientData.averageRating && (
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm text-gray-600">Average Rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-900">{clientData.averageRating}</span>
                      <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>
              <div className="space-y-6">
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{clientData.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{clientData.lastName}</p>
                    )}
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-900">{clientData.email}</p>
                  </div>
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <p className="text-gray-900">{clientData.phone}</p>
                    </div>
                  )}
                </div>
                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  {isEditing ? (
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-gray-400" />
                      <p className="text-gray-900">{clientData.company}</p>
                    </div>
                  )}
                </div>
                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position
                  </label>
                  {isEditing ? (
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                      <p className="text-gray-900">{clientData.position}</p>
                    </div>
                  )}
                </div>
                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  {isEditing ? (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <textarea
                        value={formData.address}
                        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                        rows={2}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <p className="text-gray-900">{clientData.address}</p>
                    </div>
                  )}
                </div>
                {/* Join Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Since
                  </label>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-900">{formatDate(clientData.joinDate)}</p>
                  </div>
                </div>
              </div>
              {/* Save Button */}
              {isEditing && (
                <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            {/* Project History */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Project History with EzyBuilds</h3>
              {clientProjects.length > 0 ? (
                <div className="space-y-4">
                  {clientProjects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{project.title}</h4>
                          <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Budget:</span>
                          <p className="font-medium">{formatCurrency(project.budget)}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Progress:</span>
                          <p className="font-medium">{project.progress}%</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Completed:</span>
                          <p className="font-medium">{formatDate(project.endDate)}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Project Manager:</span>
                          <p className="font-medium">{project.projectManager}</p>
                        </div>
                      </div>
                      {project.rating && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-600">Your Rating:</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon 
                                  key={i} 
                                  className={`w-4 h-4 ${i < project.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          {project.review && (
                            <p className="text-sm text-gray-700 italic">"{project.review}"</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h4>
                  <p className="text-gray-600">You haven't contracted any projects with EzyBuilds yet.</p>
                  <a 
                    href="/dashboard" 
                    className="inline-block mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Start Your First Project
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Profile 