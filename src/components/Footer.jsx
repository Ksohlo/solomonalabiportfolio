import './Footer.scss'
import twitterX from '../assets/twitterx.png'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="contacts">
                <Fade direction='right' triggerOnce>
                <div className="con">
                    <h5>Call</h5>
                    <Link to={'tel:+2348026865926'}>+2348026865926</Link>
                </div>
                </Fade>
                <Fade direction='right' triggerOnce delay={0.5}>
                <div className="con">
                    <h5>E-mail</h5>
                    <Link to={"mailto:alabssouls@gmail.com"}>alabssouls@gmail.com</Link>
                </div>
                </Fade>
            </div>
            <div className="links">
                <Fade direction='down' delay={4} triggerOnce>
                <span> Want to build together? Contact me </span>
                </Fade>
                <div className="icons">
                        <Fade direction='up' duration={4000} delay={4} triggerOnce><Link to={'https://github.com/Ksohlo'}><i className='bx bxl-github'></i></Link></Fade>
                        <Fade direction='up' duration={4000} delay={5} triggerOnce><Link to={'https://www.linkedin.com/in/k-sohlo/'}><i className='bx bxl-linkedin-square' ></i></Link></Fade>
                        <Fade direction='up' duration={4000}   delay={6} triggerOnce><Link to={'https://twitter.com/ALABISo71513241'}> <img src={twitterX}></img> </Link></Fade>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Footer