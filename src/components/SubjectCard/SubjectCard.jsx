import React from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  PaintRoller,
  Hammer,
  Wrench,
  HardHat,
  Lightbulb,
  Ruler,
  MoreHorizontal,
} from 'lucide-react'

const serviceList = [
  {
    id: 1,
    name: 'Full House Construction',
    icon: <Home size={20} />,
    bgColor: '#0063ff',
    delay: 0.2,
  },
  {
    id: 2,
    name: 'Renovation & Remodeling',
    icon: <PaintRoller size={20} />,
    bgColor: '#00c986',
    delay: 0.3,
  },
  {
    id: 3,
    name: 'Carpentry & Woodwork',
    icon: <Hammer size={20} />,
    bgColor: '#922aee',
    delay: 0.4,
  },
  {
    id: 4,
    name: 'Plumbing Services',
    icon: <Wrench size={20} />,
    bgColor: '#eb7516',
    delay: 0.5,
  },
  {
    id: 5,
    name: 'Roofing & Repairs',
    icon: <HardHat size={20} />,
    bgColor: '#075267',
    delay: 0.6,
  },
  {
    id: 6,
    name: 'Electrical Installations',
    icon: <Lightbulb size={20} />,
    bgColor: '#986d1d',
    delay: 0.7,
  },
  {
    id: 7,
    name: 'Interior Design',
    icon: <Ruler size={20} />,
    bgColor: '#b93838',
    delay: 0.8,
  },
  {
    id: 8,
    name: 'See All Services',
    icon: <MoreHorizontal size={20} />,
    bgColor: '#464646',
    delay: 0.9,
  },
]

const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        <div>
          {/* Header */}
          <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
            <h1 className="uppercase font-semibold text-orange-500">
              Our Services
            </h1>
            <p className="font-semibold text-3xl">
              End-to-End Construction & Home Improvement
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {serviceList.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  delay: service.delay,
                }}
                className="border rounded-lg border-secondary/20 p-4 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                <div
                  style={{ backgroundColor: service.bgColor + '20' }}
                  className="w-10 h-10 rounded-md flex justify-center items-center text-xl"
                >
                  {service.icon}
                </div>
                <p className="font-medium">{service.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SubjectCard
