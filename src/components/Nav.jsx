import './Nav.scss'
import twitterX from '../assets/twitterx.png'
import { Link } from "react-router-dom";




const Nav = ()=>{
    return(
        <>
        <nav className="navbar">
                <Link to="/" className="logo"><i className='bx bx-code-alt'></i> Solomon Alabi</Link>
                <ul>
                    <Link to="/project"><li>Project</li></Link>
                    <Link to="/technologies" ><li>Technologies</li></Link>
                    <Link to="/about" ><li>About</li></Link>
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