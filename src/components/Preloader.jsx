import React from 'react'
import {motion} from "framer-motion"
import { SiNextdotjs, SiReactquery, SiExpress, SiExpo, SiPm2 } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { Fade } from 'react-awesome-reveal';

 export default function 
() {
  return (
    <motion.div 
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{delay:2}}
        className='bg-full h-screen bg-dark flex items-center justify-center' >
        <motion.div 
            initial={{scale:1, position: 'absolute'}}
            animate={{ scale:0, right: 200}}
            transition={{delay:2, duration:4}}
            className=' w-full h-full absolute top-0 z-50 bg-[rgb(10,5,35)] flex items-center justify-center'>
			
            <div className='grid grid-cols-2 md:grid-cols-5 gap-16 md:gap-28'>
				<Fade delay={1 * 100}><FaReact className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={2 * 100}><SiNextdotjs className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={3 * 100}><RiTailwindCssFill className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={4 * 100}><SiReactquery className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={5 * 100}><SiExpo className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={6 * 100}><SiExpress className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={7 * 100}><SiPm2 className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={8 * 100}><BiLogoPostgresql className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={9 * 100}><DiMongodb className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
				<Fade delay={10 * 100}><TbBrandMysql className='text-yellow-500 text-7xl md:text-8xl' /></Fade>
            </div>
			
        </motion.div>
    </motion.div>
  )
}
