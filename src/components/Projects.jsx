import './Projects.scss'
import toDo from '../assets/toDo.png'
import { Link } from 'react-router-dom'
import gpcalc from '../assets/GPCalculator.png'
import weather from '../assets/weather.png'
import flowbank from '../assets/FlowBank1.png'
import flowbank2 from '../assets/flowbank.png'


const Project = ()=>{
    return(
        <>
            <div className="projectBody">
                <h1>Projects I've Worked On</h1>

                <div className="projects">
                    <div className="projectElement">
                        <div className="img">
                            <img src={toDo}/>
                        </div>
                        <div className="text">
                            <h2>To Do List</h2>
                            <div className="color" />
                            <p>We need to make a list of goals and plans to work toward in different situations and a to-do list is the best solution. built with plain Javascript.</p>
                            <h3>Stack</h3>
                            <p>HTML5   CSS3   Javascript</p>
                        </div>
                        <div className="btn">
                            <Link to={'https://ksohlo.github.io/To-do-List.github.io/'}>Live</Link>
                            <Link to={'https://github.com/Ksohlo/To-do-List.github.io'}>Code</Link>
                        </div>
                    </div>

                    <div className="projectElement">
                        <div className="img">
                            <img src={gpcalc}/>
                        </div>
                        <div className="text">
                            <h2>GPA/CGPA Calculator</h2>
                            <div className="color" />
                            <p>A modern and easy to use GPA and CGPA caclculator. built with plain Javascript.</p>
                            <h3>Stack</h3>
                            <p>HTML5   CSS3   Javascript</p>
                        </div>
                        <div className="btn">
                            <Link to={'https://ksohlo.github.io/gpa_calculator/'}>Live</Link>
                            <Link to={'https://github.com/Ksohlo/gpa_calculator'}>Code</Link>
                        </div>
                    </div>

                    <div className="projectElement">
                        <div className="img">
                            <img src={weather}/>
                        </div>
                        <div className="text">
                            <h2>Weather App</h2>
                            <div className="color" />
                            <p>A modern weather App made with a realtime API and built with plain Javascript.</p>
                            <h3>Stack</h3>
                            <p>HTML5   CSS3   Javascript</p>
                        </div>
                        <div className="btn">
                            <Link to={'https://ksohlo.github.io/weather-app.github.io/'}>Live</Link>
                            <Link to={'https://github.com/Ksohlo/weather-app.github.io'}>Code</Link>
                        </div>
                    </div>

                    <div className="projectElement">
                        <div className="img">
                            <img src={flowbank}/>
                        </div>
                        <div className="text">
                            <h2>Flow Bank</h2>
                            <div className="color" />
                            <p>A Fin_Tech website for a digital Bank. built with plain Javascript.</p>
                            <h3>Stack</h3>
                            <p>HTML5   CSS3   Javascript</p>
                        </div>
                        <div className="btn">
                            <Link to={'https://ksohlo.github.io/FlowBank.github.io/'}>Live</Link>
                            <Link to={'https://github.com/Ksohlo/FlowBank.github.io'}>Code</Link>
                        </div>
                    </div>

                    <div className="projectElement">
                        <div className="img">
                            <img src={flowbank2}/>
                        </div>
                        <div className="text">
                            <h2>Flow Bank Beta Version</h2>
                            <div className="color" />
                            <p>Rebuilt using React with new and improved user interface including Night mode, Login and Signup pages</p>
                            <h3>Stack</h3>
                            <p>HTML5   CSS3   Javascript React</p>
                        </div>
                        <div className="btn">
                            <Link to={'https://bf02ea03.flow-bank.pages.dev/'}>Live</Link>
                            <Link to={'https://github.com/Ksohlo/Flow_Bank'}>Code</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project