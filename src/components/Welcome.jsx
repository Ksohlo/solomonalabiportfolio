import './Welcome.scss'
// import video from '../assets/Video.mp4'
import twitterX from '../assets/twitterx.png'
import { Link } from "react-router-dom";
import Project from './Projects';
import Technologies from './Technologies';
import About from './About.jsx';
import Footer from './Footer';
import image from "../assets/img.png"



const Welcome = ()=>{
    return(
        <>
            <div className="welcome bg-gradient-to-br from-dark via-zinc-800 to-amber-400 flex flex-row items-center lg:items-end justify-center lg:justify-between ">
                <div className=" pl-10 lg:pb-20 w-full lg:w-1/2">
                    <h1 className='text-white text-3xl lg:text-5xl font-semibold leading-10'>Hi there 👋, <br /> I'm Solomon</h1>
                    <p className='text-white my-4 font-extralight'> A Full Stack Developer with affinity for creating engaging and intuitive user, interfaces <br /> and reliable server side applications. <br /> Proven expertise in leveraging React.js, Express.js MongoDB and Node.js to build responsive web applications with a focus on quality user experience.</p>
                    <div className="icons">
                        <Link to={'https://github.com/Ksohlo'}><i className='bx bxl-github'></i></Link>
                        <Link to={'https://www.linkedin.com/in/k-sohlo/'}><i className='bx bxl-linkedin-square' ></i></Link>
                        <Link to={'https://twitter.com/ALABISo71513241'}> <img src={twitterX}></img> </Link>
                    </div>
                    <div className="ccolor" />
                </div>
                <img src={image} className=' hidden lg:block w-4/12 shadow-lg'/>
            </div>
            <Project />
            <Technologies />
            <About />
            <Footer />
        </>
    )
}

export default Welcome;