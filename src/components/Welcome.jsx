import './Welcome.scss'
// import video from '../assets/Video.mp4'
import twitterX from '../assets/twitterx.png'
import { Link } from "react-router-dom";
import Project from './Projects';
import Technologies from './Technologies';
import About from './About.jsx';
import Footer from './Footer';
import image from "../assets/img.png"
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from 'react';
import Preloader from './Preloader.jsx';



const Welcome = ()=>{

    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreloader(false);
        }, 2000);
    })
    return(
        <>
            {preloader && <Preloader />}
            <div>
                <div className="welcome bg-gradient-to-br from-dark via-zinc-800 to-amber-400 flex flex-row items-center lg:items-end justify-center lg:justify-between ">
                <Fade direction='left' triggerOnce={true} delay={0.3} duration={1500}>
                    <div className=" pl-10 lg:pb-10 w-full">
                        <h1 className='text-white text-3xl lg:text-5xl font-semibold leading-10'>Hi there 👋, <br /> I'm Solomon</h1>
                        <p className='text-white my-4 font-extralight pr-10 w-full lg:pr-0'> A Full Stack Developer with affinity for creating Technological solutions and reliable server side applications. <br /> Proven expertise in leveraging React.js | Next js | Express.js | MongoDB | SQL | PostgreSQL | Node.js to build responsive web applications with a focus on a good user experience.</p>
                        <div className="icons">
                            <Link to={'https://github.com/Ksohlo'}><i className='bx bxl-github'></i></Link>
                            <Link to={'https://www.linkedin.com/in/k-sohlo/'}><i className='bx bxl-linkedin-square' ></i></Link>
                            <Link to={'https://twitter.com/ALABISo71513241'}> <img src={twitterX}></img> </Link>
                        </div>
                        <div className="ccolor" />
                    </div>
                </Fade>
                <Fade direction='right' duration={1200} delay={0.5} triggerOnce className=' hidden lg:block w-6/12 shadow-lg'>
                <img src={image} />
                </Fade>
                </div>
                <Project />
                <Technologies />
                <About />
                <Footer />
            </div>
            
        </>
    )
}

export default Welcome;