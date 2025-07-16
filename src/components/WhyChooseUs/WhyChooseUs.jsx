import React from 'react'
import { FaHardHat, FaTools, FaBuilding, FaTruck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SlideLeft } from '../../utility/animation'

const WhyChooseData = [
    {
        id: 1,
        title: "Experienced Workforce",
        desc: "Our skilled professionals bring years of experience to every project, ensuring quality and reliability.",
        icon: <FaHardHat />,
        bgColor: "#f97316", 
        delay: 0.2,
    },
    {
        id: 2,
        title: "Quality Materials",
        desc: "We use only the highest quality materials to guarantee durability and long-lasting results.",
        icon: <FaTools />,
        bgColor: "#2563eb",
        delay: 0.4,
    },
    {
        id: 3,
        title: "Timely Project Completion",
        desc: "We pride ourselves on completing projects on schedule without compromising on quality.",
        icon: <FaBuilding />,
        bgColor: "#4ade80", 
        delay: 0.6,
    },
    {
        id: 4,
        title: "Comprehensive Services",
        desc: "From planning to execution, we offer a full range of construction services tailored to your needs.",
        icon: <FaTruck />,
        bgColor: "#f43f5e", 
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
                    <h1 className='text-4xl font-bold text-gray-800 mt-2'>Our Speciality</h1>
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
