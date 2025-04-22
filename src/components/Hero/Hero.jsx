import React from 'react';
import HeroImg from '../../assets/hero.jpg'; // Update this path as needed
import { FaPlay } from 'react-icons/fa';
import {motion, spring} from 'framer-motion';
import { SlideRight } from '../../utility/animation';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[500px] px-6 md:px-16 py-10 gap-10">
      
      {/* Brand Info */}
      <div className="text-center md:text-left space-y-6">
        <motion.p variants={SlideRight(0.4)} 
        initial="hidden"
        animate="visible"
        className="text-orange-600 uppercase font-semibold">100% Success</motion.p>
        <motion.h1 variants={SlideRight(0.6)} 
        initial="hidden"
        animate="visible"
         className="text-5xl md:text-5xl font-semibold lg:text-6xl !leading-tight">
          Find your Perfect <span className="text-primary">Tutor</span>
        </motion.h1>
        <motion.p variants={SlideRight(0.8)} 
        initial="hidden"
        animate="visible"
         className="text-gray-700">
          We have a large pool of experienced tutors who are ready to help you achieve your goals. 
          Our tutors are experts in their fields and are dedicated to providing you with the best possible learning experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
  variants={SlideRight(1.0)}
  initial="hidden"
  animate="visible"
  className="flex flex-row flex-wrap gap-4 justify-center md:justify-start"
>
  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
    Get Started
  </button>

  <button className="flex items-center gap-2 text-secondary font-semibold hover:underline transition">
    <div className="w-10 h-10 bg-secondary/15 rounded-full flex items-center justify-center">
      <FaPlay className="text-secondary" />
    </div>
    Watch Video
  </button>
</motion.div>


      </div>

      {/* Hero Image */}
      <div className="flex justify-center md:justify-end items-center">
        <motion.img initial={{ opacity: 0, x:200 }}
          animate={{ opacity: 1, x:0 }}
            transition={{ type:"spring",stiffness:100,delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          className="w-[350px] md:w-[550px] lg:w-[400px] h-auto object-contain" 
          src={HeroImg} 
          alt="Hero" 
        />
      </div>
    </div>
  );
};

export default Hero;
