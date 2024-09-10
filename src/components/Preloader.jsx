import React from 'react'
import {motion} from "framer-motion"

 export default function 
() {
  return (
    <motion.div 
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{delay:2}}
        className='bg-full h-screen bg-dark flex items-center justify-center' >
        <motion.div 
            initial={{scale:1}}
            animate={{ scale:20}}
            transition={{delay:1.2, duration:2}}
            className=' w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center'>
            <div className='flex items-center justify-center'>
            <   i className='bx bx-code-alt animate-ping text-3xl font-black'></i>
            </div>
        </motion.div>
    </motion.div>
  )
}
