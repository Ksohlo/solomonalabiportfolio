import './Welcome.scss'
import video from '../assets/Video.mp4'
import twitterX from '../assets/twitterx.png'
import { Link } from "react-router-dom";
import Project from './Projects';
import Technologies from './Technologies';
import About from './About.jsx';
import Footer from './Footer';



const Welcome = ()=>{
    return(
        <>
            <div className="welcome">
                <video src={video} className='video' autoPlay loop muted></video>
                <div className="welcomeLeft">
                    <h1>Hi there, <br /> I'm Solomon</h1>
                    <p> A frontend Developer with affinity for creating engaging and intuitive user interfaces. <br /> Proven expertise in leveraging React.js to build responsive web applications with a focus on user experience.</p>
                    <div className="icons">
                        <Link to={'https://github.com/Ksohlo'}><i className='bx bxl-github'></i></Link>
                        <Link to={'https://www.linkedin.com/in/k-sohlo/'}><i className='bx bxl-linkedin-square' ></i></Link>
                        <Link to={'https://twitter.com/ALABISo71513241'}> <img src={twitterX}></img> </Link>
                    </div>
                    <div className="ccolor" />
                </div>
            </div>
            <Project />
            <Technologies />
            <About />
            <Footer />
        </>
    )
}

export default Welcome;