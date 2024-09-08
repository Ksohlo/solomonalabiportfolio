import { Fade } from 'react-awesome-reveal'
import { Journeys } from '../data'
import './About.scss'


const About = ()=>{
    return(
        <>
            <div className="about">
                <Fade>
                <h1 className='mt-8'>About Me</h1>
                <p className='des'><span className='font-light'>Alabi Solomon</span> <br /> <span className='font-light text-justify'>Electrical Engineering Graduate | Full Stack Developer (MERN Stack)</span> <br /> <br />
                    <span className=' text-justify'>
                        I am a dedicated Electrical Engineering graduate from OOU College of Engineering with a passion for technology and problem-solving. In addition to my engineering background, I have honed my skills as a Full Stack Developer, specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). My expertise spans across both front-end and back-end development, allowing me to build robust, scalable, and user-friendly web applications. I am committed to leveraging my technical skills and engineering mindset to deliver innovative solutions.
                    </span>
                   
                </p>
                </Fade>
                <div className="journeys grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    {Journeys.map((item, index)=>{
                        return(
                            <Fade direction='up' delay={index * 100} triggerOnce>
                            <div className="journey" key={index}>
                                <h3>{item.date}</h3>
                                <p>{item.des}</p>
                            </div>
                            </Fade>
                        )
                    })}
                    {/* <div className="journey">
                        <h3>September <br /> 2022</h3>
                        <p>Started my Journey into the Tech space</p>
                    </div>
                    <div className="journey">
                        <h3>May <br /> 2023</h3>
                        <p>Received my Certification in Responsive Web design</p>
                    </div>
                    <div className="journey">
                        <h3>May 2023 <br /> till date</h3>
                        <p>I have ben practicing and improving myself</p>
                    </div> */}
                </div>
                <div className='col' />
            </div>
        </>
    )
}
export default About