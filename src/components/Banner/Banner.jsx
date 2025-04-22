import React from 'react'
import { motion } from 'framer-motion'
import { SlideUp } from '../../utility/animation'

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <div className='bg-[#f9f9f9] py-16 pb-14'>
  <div className='container mx-auto px-6'>
    <div
      className={`flex flex-col-reverse md:flex-row items-center md:items-center gap-10 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image Side */}
      <motion.div
        className='w-full md:w-1/2 flex justify-center'
        variants={SlideUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.1 }}
      >
        <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 ,type: 'spring', stiffness: 100 }}
          src={image}
          alt='Banner'
          className='w-full max-w-md md:max-w-full rounded-xl shadow-md object-cover'
        />
      </motion.div>

      {/* Text Side */}
      <motion.div
        className='w-full md:w-1/2 space-y-4 text-center md:text-left flex flex-col justify-center'
        variants={SlideUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.25 }}
      >
        <p className='text-sm text-orange-600 capitalize font-semibold tracking-wide'>
          {tag}
        </p>
        <h2 className='text-xl lg:text-2xl font-semibold'>{title}</h2>
        <p className='text-sm text-slate-500'>{subtitle}</p>
        <div>
          <button className='mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg'>
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  </div>
</div>

  )
}

export default Banner
