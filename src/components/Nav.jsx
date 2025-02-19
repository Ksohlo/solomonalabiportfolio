import './Nav.scss'
import twitterX from '../assets/twitterx.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";



const Nav = ()=>{
    const [show, setShow] = useState(false)
    return(
        <>
        <nav className="navbar bg-dark h-20 lg:min-h-10 w-full py-4 flex flex-col lg:flex-row items-center justify-between md:px-20 z-50">
            <div className='flex flex-row items-center justify-between w-full lg:w-6/12 px-3'>
                <Link to="/" className="logo" onClick={() => {setShow(!show)}}>
                    <i className='bx bx-code-alt'></i> 
                    Solomon Alabi
                </Link>
                <div className="icons hidden md:flex">
                    <Link to={'https://github.com/Ksohlo'}><i className='bx bxl-github'></i></Link>
                    <Link to={'https://www.linkedin.com/in/k-sohlo/'}><i className='bx bxl-linkedin-square' ></i></Link>
                    <Link to={'https://twitter.com/ALABISo71513241'}> <img src={twitterX}></img></Link>
                </div>
                <GiHamburgerMenu className='text-white md:hidden mr-2 mt-2 text-3xl' onClick={() => {setShow(!show)}} />
            </div>
                <ul className='hidden md:flex flex-col md:flex-row  text-white gap-10'>
                        <Link to="/project"><li>Project</li></Link>
                        <Link to="/technologies" ><li>Technologies</li></Link>
                        <Link to="/about" ><li>About</li></Link>
                </ul>
                {show && <div className='md:hidden flex flex-col md:flex-row md:mr-0 gap-10 p-8 md:p-0 text-white abolute top-10 left-0 bg-dark md:bg-transparent w-full z-30 md:z-0'>
                        <Link to="/project" onClick={() => {setShow(!show)}}>Project</Link>
                        <Link to="/technologies" onClick={() => {setShow(!show)}}>Technologies</Link>
                        <Link to="/about" onClick={() => {setShow(!show)}}>About</Link>
                </div>}

        </nav>
        </>
    )
}

export default Nav;