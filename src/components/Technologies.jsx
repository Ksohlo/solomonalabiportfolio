import './Technologies.scss'
import { TechList } from '../data'
import { Fade } from 'react-awesome-reveal'
import {motion} from "framer-motion"
import { SiPostgresql } from "react-icons/si";
import { GrCycle } from "react-icons/gr";
import { SiReactquery, SiNextdotjs } from "react-icons/si";

const Technologies = ()=>{
    return(
        <>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1.3, duration:1}}
                className="technology">
                <div className='col' />
                <h1 className='text-lg text-white'>Technologies</h1>
                <p className='sub text-justify'>So far i have worked with a range of  different Technologies in the Web development ecosytem</p>
                <div className="techElements grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 ">
                    {TechList.map((item, index)=>{
                        return(
                            <Fade direction='up' delay={index * 100} triggerOnce>
                                <div className="tech p-4 rounded hover:md:ring-1 my-5 md:my-0 hover:md:ring-yellow-500 duration-1000" key={index}>
                                    {item.ico === 'SiPostgresql' && <SiPostgresql className='ico' />}
                                    {item.ico === 'zustand' && <GrCycle className='ico' />}
                                    {item.ico === 'query' && <SiReactquery className='ico' />}
                                    {item.ico === 'next' && <SiNextdotjs className='ico' />}
                                    <i className={item.ico}></i>
                                    <h3>{item.name}</h3>
                                    <p className='mx-2'>{item.des}</p>
                                </div>
                            </Fade>
                        )
                    })}
                </div>
                
            </motion.div>
        </>
    )
}
export default Technologies