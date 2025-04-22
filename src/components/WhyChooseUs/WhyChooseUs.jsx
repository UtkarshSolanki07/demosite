import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa6'
import { GiGymBag } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { SlideLeft } from '../../utility/animation'

const WhyChooseData = [
    {
        id: 1,
        title: "One-on-One Teaching",
        desc: "Our tutors provide personalized attention to each student, ensuring they receive the support needed to succeed.",
        icon: <GrYoga />,
        bgColor: "#0063ff",
        delay: 0.2,
    },
    {
        id: 2,
        title: "24/7 Availability",
        desc: "Our tutors are available around the clock to help with your studies—anytime, anywhere.",
        icon: <FaDumbbell />,
        bgColor: "#73bc00",
        delay: 0.4,
    },
    {
        id: 3,
        title: "Flexible Scheduling",
        desc: "We offer flexible scheduling options to fit your busy lifestyle and learning pace.",
        icon: <GiGymBag />,
        bgColor: "#fa6400",
        delay: 0.6,
    },
    {
        id: 4,
        title: "Affordable Pricing",
        desc: "We ensure quality education is accessible to all through our competitive pricing.",
        icon: <GiGymBag />,
        bgColor: "#fe6baa",
        delay: 0.8,
    },
]

const WhyChooseUs = () => {
    return (
        <div className='bg-[#f9fafc] py-24'>
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-orange-600 uppercase font-bold text-sm tracking-wider'>Why Choose Us</h2>
                    <h1 className='text-4xl font-bold text-gray-800 mt-2'>Benefits of our tutoring services</h1>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {WhyChooseData.map((item) => (
                        <motion.div
                        variants={SlideLeft(item.delay)}
                            initial='hidden'
                            whileInView='visible'
                            key={item.id}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay, duration: 0.6, ease: 'easeOut' }}
                            className='bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300'
                        >
                            <div
                                className='w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white text-2xl'
                                style={{ backgroundColor: item.bgColor }}
                            >
                                {item.icon}
                            </div>
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{item.title}</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
