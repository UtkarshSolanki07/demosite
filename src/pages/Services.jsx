import React from 'react'

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of construction services tailored to meet your needs. Our experienced team is dedicated to delivering quality and excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Residential Construction</h2>
            <p className="text-gray-700">
              Building and renovating homes with attention to detail and quality craftsmanship.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Commercial Projects</h2>
            <p className="text-gray-700">
              Delivering efficient and reliable construction solutions for commercial buildings and offices.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Custom Renovations</h2>
            <p className="text-gray-700">
              Tailored renovation services to transform your space according to your vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
