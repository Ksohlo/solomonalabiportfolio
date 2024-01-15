import './Nav.scss'
import twitterX from '../assets/twitterx.png'
import { Link } from "react-router-dom";
import Project from './Projects';
import Technologies from './Technologies';
import About from './About.Jsx';



const Nav = ()=>{
    return(
        <>
        <nav className="navbar">
                <Link to="/" className="logo"><i className='bx bx-code-alt'></i> Solomon Alabi</Link>
                <ul>
                    <Link ><li>Project</li></Link>
                    <Link ><li>Technologies</li></Link>
                    <Link ><li>About</li></Link>
                </ul>
                <div className="icons">
                    <Link to={'https://github.com/Ksohlo'}><i className='bx bxl-github'></i></Link>
                    <Link to={'https://www.linkedin.com/in/k-sohlo/'}><i className='bx bxl-linkedin-square' ></i></Link>
                    <Link to={'https://twitter.com/ALABISo71513241'}> <img src={twitterX}></img> </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;