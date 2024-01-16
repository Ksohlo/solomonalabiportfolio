import './Footer.scss'
import twitterX from '../assets/twitterx.png'
import { Link } from 'react-router-dom'

const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="contacts">
                <div className="con">
                    <h5>Call</h5>
                    <Link to={'tel:+2348026865926'}>+2348026865926</Link>
                </div>
                <div className="con">
                    <h5>E-mail</h5>
                    <Link to={"mailto:alabssouls@gmail.com"}>alabssouls@gmail.com</Link>
                </div>
            </div>
            <div className="links">
                Want to build together? Contact me 
                <div className="icons">
                        <Link to={'https://github.com/Ksohlo'}><i className='bx bxl-github'></i></Link>
                        <Link to={'https://www.linkedin.com/in/k-sohlo/'}><i className='bx bxl-linkedin-square' ></i></Link>
                        <Link to={'https://twitter.com/ALABISo71513241'}> <img src={twitterX}></img> </Link>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Footer