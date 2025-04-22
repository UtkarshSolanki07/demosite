
import React from 'react'
import { NavbarMenu } from '../../mockData/data.js';
import {MdComputer,MdMenu} from 'react-icons/md';
import {motion} from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu.jsx';
const Navbar = () => {
    const[open,setOpen]=React.useState(false);
  return (
    <>
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
        <div className='container mx-auto flex justify-between items-center py-6'>
            {/* Logo */}
            <div className='text-2xl font-bold flex items-center gap-2'>
                <MdComputer className='text-3xl text-secondary'/>
                <p>LearnAdda</p>
            </div>
            {/*Menu*/}
            <div className='hidden md:flex items-center gap-4 '>
                {NavbarMenu.map((item)=>(
                    <motion.div whileHover={{scale:1.2}} key={item.id} className='text-lg font-semibold text-gray-700 hover:text-red-500 transition-all duration-300'>
                        <a href={item.link}>{item.title}</a>
                    </motion.div>
                ))}

            </div>
            {/*CTA Button*/}
            <div className='hidden lg:block space-x-7'>
                <button className="font-semibold">Sign In</button>
                <button className='text-white bg-secondary font-semibold rounded-full px-6 py-2'>Register</button>

            </div>
            {/*Mobile Hamburger*/}
            <div className='lg:hidden' onClick={()=>setOpen(!open)}>
                <MdMenu className='text-4xl'/>
            </div>
        </div>
    </motion.div>
    <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar
