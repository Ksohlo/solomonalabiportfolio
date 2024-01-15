import './Technologies.scss'

const Technologies = ()=>{
    return(
        <>
            <div className="technology">
                <div className='col' />
                <h1>Technologies</h1>
                <p className='sub'>So far i have worked with a range of  different Technologies in the Web development ecosytem</p>
                <div className="techElements">
                    <div className="tech">
                        <i className='bx bxl-git'></i>
                        <h3>Git(Version Control)</h3>
                        <p>Experience with Git and Github</p>
                    </div>
                    <div className="tech">
                        <i className='bx bxl-javascript' ></i>
                        <h3>Javascript</h3>
                        <p>Experience with Javascript <br /> ES5, ES6 and ES7+</p>
                    </div>
                    <div className="tech">
                        <i className='bx bxl-react'></i>
                        <h3>React</h3>
                        <p>Experience with React.JS and React components and states</p>
                    </div>
                    <div className="tech">
                    <i className='bx bxl-sass'></i>
                        <h3>Saas</h3>
                        <p>Experience with Sass css </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Technologies