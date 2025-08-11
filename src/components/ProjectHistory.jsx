import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import {
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  Building,
  MapPin,
  Briefcase,
  Star,
  AlertCircle
} from 'lucide-react'

const ProjectHistory = ({ projects = [], loading = false, error = null }) => {
  // Removed mock data and local state. Now expects data via props.

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
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Project History</h3>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
          <span className="ml-2 text-gray-600">Loading project history...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Project History</h3>
        <div className="flex flex-col items-center justify-center py-8">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-red-600 text-center">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Project History</h3>
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building className="w-8 h-8 text-gray-400" />
          </div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h4>
          <p className="text-gray-600 mb-4">You haven't contracted any projects with EzyBuilds yet.</p>
          <a
            href="/dashboard"
            className="inline-block px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Start Your First Project
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Project History</h3>
      <div className="space-y-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{project.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <span className="text-sm text-gray-600">Budget:</span>
                <p className="font-medium">{formatCurrency(project.budget)}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Progress:</span>
                <p className="font-medium">{project.progress}%</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Timeline:</span>
                <p className="font-medium">{project.timeline}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Start Date:</span>
                <p className="font-medium">{formatDate(project.start_date)}</p>
              </div>
            </div>

            {project.rating && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Your Rating:</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < project.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm font-medium ml-1">{project.rating}/5</span>
                  </div>
                </div>
                {project.review && (
                  <p className="text-sm text-gray-700 italic mt-2">"{project.review}"</p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectHistory
