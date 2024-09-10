import './Nav.scss'
import twitterX from '../assets/twitterx.png'
import { Link } from "react-router-dom";



const Nav = ()=>{
    return(
        <>
        <nav className="navbar bg-dark min-h-28 lg:min-h-20 h-auto w-full py-4 flex flex-col lg:flex-row items-center justify-between z-50">
            <div className='flex flex-row items-center justify-between w-full lg:w-6/12 px-3 lg:ml-8'>
                <Link to="/" className="logo">
                    <i className='bx bx-code-alt'></i> 
                    Solomon Alabi
                </Link>
                <div className="icons">
                    <Link to={'https://github.com/Ksohlo'}><i className='bx bxl-github'></i></Link>
                    <Link to={'https://www.linkedin.com/in/k-sohlo/'}><i className='bx bxl-linkedin-square' ></i></Link>
                    <Link to={'https://twitter.com/ALABISo71513241'}> <img src={twitterX}></img> </Link>
                </div>
            </div>
                <ul>
                    <Link to="/project"><li>Project</li></Link>
                    <Link to="/technologies" ><li>Technologies</li></Link>
                    <Link to="/about" ><li>About</li></Link>
                </ul>
                
            </nav>
        </>
    )
}

export default Nav;