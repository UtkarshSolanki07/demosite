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
import { Hammer } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const { isSignedIn } = useUser()

  return (
    <>
      {/* UserButton floating in top-right corner */}
      {isSignedIn && (
        <div className="z-50 absolute right-6 top-[5rem] lg:top-6">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: 'ring-2 ring-secondary',
              },
            }}
          />
        </div>
      )}
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

          {/* Auth Buttons on right unless signed in */}
          {!isSignedIn && (
            <div className='hidden lg:flex items-center gap-4'>
              <SignInButton>
                <button className='font-semibold'>Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className='text-white bg-secondary font-semibold rounded-full px-6 py-2'>
                  Register
                </button>
              </SignUpButton>
            </div>
          )}

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
