import './Technologies.scss'
import { TechList } from '../data'
import { Fade } from 'react-awesome-reveal'
import {motion} from "framer-motion"

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
                <div className="techElements grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {TechList.map((item, index)=>{
                        return(
                            <Fade direction='up' delay={index * 100} triggerOnce>
                            <div className="tech" key={index}>
                                <i className={item.ico}></i>
                                <h3>{item.name}</h3>
                                <p >{item.des}</p>
                            </div>
                            </Fade>
                        )
                    })}
                    {/* <div className="tech">
                        <i className='bx bxl-git'></i>
                        <h3>Git(Version Control)</h3>
                        <p>Experience with Git and Github</p>
                    </div>
                    <div className="tech">
                        <i className='bx bxl-javascript' ></i>
                        <h3>Javascript</h3>
                        <p>Experience with Javascript <br /> ES5, ES6 and ES7+</p>
                    </div>
                    <div className="tech">
                        <i className='bx bxl-react'></i>
                        <h3>React</h3>
                        <p>Experience with React.JS and React components and states</p>
                    </div>
                    <div className="tech">
                    <i className='bx bxl-sass'></i>
                        <h3>Saas</h3>
                        <p>Experience with Sass css </p>
                    </div> */}
                </div>
                
            </motion.div>
        </>
    )
}
export default Technologies