import React from 'react'
import { motion } from 'framer-motion'

const NavbarBanner = () => {
  const [open, setOpen] = React.useState(true); 

  return (
    <>
      {open && (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5,delay:0.7 }}
        className='bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative'>
          Are you a university or school student looking for an online tutoring platform?
          <a href='#' className='text-secondary ml-2'>Talk to us</a>
          <a className='absolute top-1/2 right-10 cursor-pointer -translate-y-1/2' onClick={()=> setOpen(false)}>X</a>
        </motion.div>
      )}
    </>
  );
};

export default NavbarBanner;
