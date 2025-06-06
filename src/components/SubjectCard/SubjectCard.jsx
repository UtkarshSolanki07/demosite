import React from 'react'
import { motion, spring } from 'framer-motion'
import { FaComputer,FaBook } from 'react-icons/fa6'
import { div } from 'framer-motion/client'

const subjectList=[
    {
        id:1,
        name:"Engineering",
        icon:<FaComputer />,
        bgColor:"#0063ff",
        delay:0.2,
    },
    {
        id:2,
        name:"English",
        icon:<FaBook />,
        bgColor:"#00c986",
        delay:0.3,
    },
    {
        id:3,
        name:"Programming",
        icon:<FaBook />,
        bgColor:"#922aee",
        delay:0.4,
    },
    {
        id:4,
        name:"Science",
        icon:<FaBook/>,
        bgColor:"#es7516",
        delay:0.5,
    },
    {
        id:5,
        name:"History",
        icon:<FaBook/>,
        bgColor:"#075267",
        delay:0.6,
    },
    {
        id:6,
        name:"Psychology",
        icon:<FaBook />,
        bgColor:"#986d1d",
        delay:0.7,
    },
    {
        id:7,
        name:"Web Design",
        icon:<FaComputer />,
        bgColor:"#b93838",
        delay:0.8,
    },
    {
        id:8,
        name:"See all",
        icon:<FaBook />,
        bgColor:"#464646",
        delay:0.9,
    }

]
const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        <div>
            {/*Header*/}
            <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5'>
                <h1 className='uppercase font-semibold text-orange-500'>Our tutor subjects</h1>
                <p className='font-semibold text-3xl'>Find Online Tutor in Any Subject</p>
            </div>
            {/* Subject List */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    subjectList.map((subject)=>{
                        return(
                            <motion.div
                            key={subject.id}
                            initial={{opacity:0,x:-200}}
                            whileInView={{opacity:1, x:0}}
                            transition={{type:"spring",stiffness:100,delay:subject.delay}}
                            className='border rounded-lg border-secondary/20 p-4 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer '>
                                <div style={{backgroundColor:subject.bgColor+"20"}} className='w-10 h-10 rounded-md flex justify-center items-center'>{subject.icon}</div>
                                <p>{subject.name}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default SubjectCard
