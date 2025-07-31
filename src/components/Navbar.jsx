import React from 'react'
import { NavbarMenu } from '../../mockData/data.js'
import {MdMenu } from 'react-icons/md'
import { motion } from 'framer-motion'
import ResponsiveMenu from './ResponsiveMenu.jsx'
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react'
import { Hammer, User, BookOpen, LogOut, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const [userMenuOpen, setUserMenuOpen] = React.useState(false)
  const { isSignedIn, user } = useUser()

  
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuOpen && !event.target.closest('.user-menu-container')) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [userMenuOpen])

  const userMenuItems = [
    {
      id: 1,
      title: "My Profile",
      icon: <User className="w-4 h-4" />,
      link: "/profile",
    },
    {
      id: 2,
      title: "Contract EzyBuilds",
      icon: <BookOpen className="w-4 h-4" />,
      link: "/dashboard",
    },
  ]

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className='container mx-auto flex justify-between items-center py-6'>
          {/* Logo */}
          <div className='text-2xl font-bold flex items-center gap-2'>
            <Hammer className='text-3xl text-secondary' />
            <p>EzyBuilds</p>
          </div>

          {/* Menu in center on desktop */}
          <div className='hidden md:flex items-center gap-4'>
            {NavbarMenu.map((item) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                key={item.id}
                className='text-lg font-semibold text-gray-700 hover:text-red-500 transition-all duration-300'
              >
                <a href={item.link}>{item.title}</a>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons or User Dashboard on right */}
          <div className='hidden lg:flex items-center gap-4'>
            {!isSignedIn ? (
              <>
                <SignInButton>
                  <button className='font-semibold'>Sign In</button>
                </SignInButton>
                <SignUpButton>
                  <button className='text-white bg-secondary font-semibold rounded-full px-6 py-2'>
                    Register
                  </button>
                </SignUpButton>
              </>
            ) : (
              /* User Dashboard Dropdown */
              <div className="relative user-menu-container">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-all duration-200 shadow-sm"
                  >
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {user?.firstName?.charAt(0) || user?.emailAddresses[0]?.emailAddress?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <span className="font-medium text-gray-700">
                      {user?.firstName || 'User'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <UserButton afterSignOutUrl="/" />
                </div>

                {/* Dropdown Menu */}
                {userMenuOpen && (
                  <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  onMouseDown={e => e.stopPropagation()}
                  >
                  {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">
                          {user?.firstName} {user?.lastName}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {user?.emailAddresses[0]?.emailAddress}
                      </p>
                      <span className="inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Client
                      </span>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      {userMenuItems.map((item) => (
                        <a
                          key={item.id}
                          href={item.link}
                          className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                        >
                          {item.icon}
                          <span>{item.title}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>

          {/* Hamburger Menu */}
          <div className='lg:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </div>
        </div>
      </motion.div>

      <ResponsiveMenu open={open} />
    </>
  )
}

export default Navbar
