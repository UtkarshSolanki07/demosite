import React, { useState } from 'react'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with: ${email}`)
      setEmail('')
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-secondary">LearnAdda</h2>
            <div className="h-1 w-12 bg-secondary mb-4"></div>
            <p className="text-gray-600">
              Empowering students to learn, grow, and achieve more every day. We're proud of every story you share with us.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mt-4 pt-2">
              <h4 className="text-sm font-medium mb-3">SUBSCRIBE TO NEWSLETTER</h4>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-l border border-gray-200 focus:outline-none focus:ring-1 focus:ring-secondary flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-secondary text-white px-4 py-2 rounded-r hover:bg-opacity-90 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="h-1 w-10 bg-secondary mb-4"></div>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'For Students', href: '#' },
                { label: 'Resources', href: '#' },
                { label: 'About Us', href: '#' },
                { label: 'Contact us', href: '#' },
                { label: 'Testimonials', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center text-gray-600 hover:text-secondary transition-colors">
                    <ChevronRight size={16} className="mr-1 text-secondary" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="h-1 w-10 bg-secondary mb-4"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">support@learnadda.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">+1 234 567 890</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Learning Lane, Knowledge City</span>
              </li>
            </ul>
          </div>

          {/* Social & Business Hours Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="h-1 w-10 bg-secondary mb-4"></div>
            
            {/* Social Icons */}
            <div className="flex gap-5 mb-8">
              <a href="#" className="text-secondary hover:text-opacity-80 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-opacity-80 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-opacity-80 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-opacity-80 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            
            {/* Business Hours */}
            <div>
              <h4 className="text-sm font-medium mb-3">BUSINESS HOURS</h4>
              <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
              <p className="text-gray-600">Saturday: 10am - 2pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        {/* Awards/Certifications - Simplified */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <span className="text-sm">Best Online Platform 2024</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <span className="text-sm">ISO Certified</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <span className="text-sm">Trusted by 10M+ Students</span>
          </div>
        </div>

        {/* Footer Bottom - Simplified */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col items-center">
          <div className="flex gap-6 mb-4 text-sm text-gray-500">
            <a href="#" className="hover:text-secondary transition">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition">Cookie Policy</a>
          </div>
          <p className="text-sm text-gray-500">© {currentYear} LearnAdda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer