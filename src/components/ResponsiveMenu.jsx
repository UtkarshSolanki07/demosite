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
          className='fixed inset-0 z-40 lg:hidden overflow-y-auto'
        >
          <div className='text-lg sm:text-xl font-semibold uppercase bg-primary text-white py-8 sm:py-10 my-4 sm:my-6 rounded-2xl sm:rounded-3xl w-[88%] max-w-sm sm:max-w-md mx-auto'>
            <ul className='flex flex-col items-center gap-6 sm:gap-8'>
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
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-semibold text-xl">
                        {user?.firstName?.charAt(0) || user?.emailAddresses[0]?.emailAddress?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <p className="font-semibold text-base sm:text-lg">
                        {user?.firstName} {user?.lastName}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300">
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
                        className="flex items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3 text-white hover:bg-white/10 transition-colors duration-150 rounded-lg mx-4 mb-2"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>

                  {/* Account (Clerk UserButton with popover) */}
                  <div className="w-full pt-2 border-t border-white/20">
                    <div className="flex items-center justify-between px-4 sm:px-6 mx-0 text-white/90">
                      <div className="flex items-center gap-3 py-2.5">
                        <User className="w-5 h-5" />
                        <span>Account</span>
                      </div>
                      <div className="py-1">
                        <UserButton afterSignOutUrl="/" />
                      </div>
                    </div>
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
