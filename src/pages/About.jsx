import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At EzyBuilds, we are committed to delivering exceptional construction services with integrity, quality, and professionalism. Our experienced team works closely with clients to bring their visions to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              To provide reliable and innovative construction solutions that exceed client expectations while fostering a safe and collaborative work environment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              To be recognized as a leading construction company known for quality, sustainability, and customer satisfaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Integrity and Transparency</li>
              <li>Commitment to Quality</li>
              <li>Customer Focus</li>
              <li>Innovation and Sustainability</li>
              <li>Safety and Respect</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
