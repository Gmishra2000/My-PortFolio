import './about.css'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg">

                </div>

                <div className="a-card">
                    <img src="assets/image/pexel.jpg" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am an undergraduate in computer science from Mumbai University, currently in my final
                    year of graduation ,looking for full time Job opportunities and internship.
                </p>
                <p className="a-desc">
                    I am fond of working on web technologies and use it in full effect to develop a
                    dynamic and responsive websites. I have knowledge of Javascript, HTML, CSS and React
                    library, also I love designing website protoype in Figma before making it live. I am now looking for an
                    opportuninty to work on real time project and learn new things.
                </p>
                <div className="a-award">
                    <img src="assets/image/Home Page.png" alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">UI Design</h4>
                        <p className="a-award-desc">
                            My HomePage design which I created in Figma for making
                            my Medicine Bank Project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
