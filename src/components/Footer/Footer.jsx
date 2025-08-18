import React, { useState } from 'react'
import { Mail, Phone, MapPin, ChevronRight, Clock, Award } from 'lucide-react'

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
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-orange-500">EzyBuilds</h2>
            <div className="h-1 w-12 bg-orange-500 mb-4"></div>
            <p className="text-gray-400">
              Building dreams into reality across India. From residential homes to commercial complexes, we deliver quality construction with integrity and excellence.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mt-4 pt-2">
              <h4 className="text-sm font-medium mb-3 text-orange-400">GET PROJECT UPDATES</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-l border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-orange-500 flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <div className="h-1 w-10 bg-orange-500 mb-4"></div>
            <ul className="space-y-3">
              {[
                { label: 'Home Construction', href: '#' },
                { label: 'Commercial Buildings', href: '#' },
                { label: 'Interior Design', href: '#' },
                { label: 'Renovation & Repairs', href: '#' },
                { label: 'Project Management', href: '#' },
                { label: 'Architectural Services', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center text-gray-400 hover:text-orange-400 transition-colors">
                    <ChevronRight size={16} className="mr-1 text-orange-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="h-1 w-10 bg-orange-500 mb-4"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Infoezybuilds@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>9818982741</div>
                  <div>9654391201</div>
                  <div>9582368743</div>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  1405, 14th Floor, Aggarwal tower, NSP, Pitampura<br />
                  Delhi, 110034
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Business Hours Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Connect With Us</h3>
            <div className="h-1 w-10 bg-orange-500 mb-4"></div>
            
            {/* Social Icons */}
            <div className="flex gap-5 mb-8">
              <a href="#" className="text-orange-500 hover:text-orange-400 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
            </div>
            
            {/* Business Hours */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-orange-400 flex items-center">
                <Clock size={16} className="mr-2" />
                WORKING HOURS
              </h4>
              <p className="text-gray-400">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-400">Sunday: 10:00 AM - 4:00 PM</p>
              <p className="text-sm text-orange-400 mt-2">24/7 Emergency Support</p>
            </div>
          </div>
        </div>
        
        {/* Certifications/Awards */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center">
            <Award className="w-8 h-8 text-orange-500 mr-3" />
            <span className="text-sm">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">RERA</span>
            </div>
            <span className="text-sm">RERA Registered</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">5★</span>
            </div>
            <span className="text-sm">500+ Happy Customers</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">15+</span>
            </div>
            <span className="text-sm">Years of Excellence</span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-orange-400 transition">Refund Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Careers</a>
            <a href="#" className="hover:text-orange-400 transition">Site Map</a>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>© {currentYear} EzyBuilds Construction Pvt. Ltd. All rights reserved.</p>
            <p className="mt-1">CIN: U45200DL2009PTC123456 | GST: 07AABCE2207R1Z5</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer