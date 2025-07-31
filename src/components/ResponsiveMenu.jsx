import React from 'react'
import {motion} from 'framer-motion'
import { NavbarMenu } from '../../mockData/data.js'
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react'
import { User, BookOpen, LogOut } from 'lucide-react'

const ResponsiveMenu = ({open}) => {
  const { isSignedIn, user } = useUser()

  const userMenuItems = [
    {
      id: 1,
      title: "My Profile",
      icon: <User className="w-5 h-5" />,
      link: "/profile",
    },
    {
      id: 2,
      title: "Contract EzyBuilds",
      icon: <BookOpen className="w-5 h-5" />,
      link: "/dashboard",
    },
  ]

  return (
    <>
      {open && (
        <motion.div 
          initial={{opacity:0,y:-100}} 
          animate={{opacity:1,y:0}} 
          transition={{duration:0.3}} 
          className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'
        >
          <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
            <ul className='flex flex-col justify-center items-center gap-10'>
              {/* Navigation Menu Items */}
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="hover:text-secondary transition-colors duration-200">
                    {item.title}
                  </a>
                </li>
              ))}
              
              {/* Authentication Section */}
              {!isSignedIn ? (
                <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/20 w-full">
                  <SignInButton>
                    <button className='font-semibold hover:text-secondary transition-colors duration-200'>
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className='text-primary bg-white font-semibold rounded-full px-6 py-2 hover:bg-gray-100 transition-colors duration-200'>
                      Register
                    </button>
                  </SignUpButton>
                </div>
              ) : (
                /* User Dashboard for Mobile */
                <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/20 w-full">
                  {/* User Info */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-semibold text-xl">
                        {user?.firstName?.charAt(0) || user?.emailAddresses[0]?.emailAddress?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <p className="font-semibold text-lg">
                        {user?.firstName} {user?.lastName}
                      </p>
                    </div>
                    <p className="text-sm text-gray-300">
                      {user?.emailAddresses[0]?.emailAddress}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                      Client
                    </span>
                  </div>

                  {/* User Menu Items */}
                  <div className="w-full">
                    {userMenuItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        className="flex items-center gap-3 px-6 py-3 text-white hover:bg-white/10 transition-colors duration-150 rounded-lg mx-4 mb-2"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>

                  {/* Sign Out */}
                  <div className="w-full pt-2 border-t border-white/20">
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          userButtonPopoverCard: 'hidden',
                          userButtonPopoverActionButton: 'hidden',
                        },
                      }}
                    >
                      <button className="flex items-center gap-3 px-6 py-3 text-red-300 hover:bg-red-500/20 w-full transition-colors duration-150 rounded-lg mx-4">
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                      </button>
                    </UserButton>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default ResponsiveMenu
