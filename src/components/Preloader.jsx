import React from 'react'
import {motion} from "framer-motion"

 export default function 
() {
  return (
    <motion.div 
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{delay:1.5, duration:2}}
        className='bg-full h-screen bg-dark flex items-center justify-center' >
        <motion.div 
            initial={{width:100, height:100}}
            animate={{ width:5000, height:5000}}
            transition={{delay:1, duration:2, type:"tween"}}
            className=' w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center'>
            <div className='flex items-center justify-center'>
            <   i className='bx bx-code-alt animate-ping text-3xl font-black'></i>
            </div>
        </motion.div>
    </motion.div>
  )
}
