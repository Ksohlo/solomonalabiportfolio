import './About.scss'


const About = ()=>{
    return(
        <>
            <div className="about">
                <h1>About Me</h1>
                <p className='des'>I've been programming for over two years and also learning and improving my skills in responsive web development and creating interactive UI designs. <br /> I am a developer,  an Engineering Major who loves to solve problems. I believe in sharing of knowledge and growing with people through colaborations and interaction at work. <br /> I have a great affinity for the world of Tech and also believe i can do better at all i do.</p>
                <div className="journeys">
                    <div className="journey">
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
                    </div>
                </div>
                <div className='col' />
            </div>
        </>
    )
}
export default About