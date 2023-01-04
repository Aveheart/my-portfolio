import React from 'react';
import logo from './myface.PNG';
function About() {
    return (
        <section id="about">
            <div className="row">

                <div className="three columns">
                <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>
                        Hi! I am a recent graduate of the UCLA Coding Bootcamp for Fullstack Web Developer.  I come from a background in Fire Science from my previous career and am excited to continue to learn and develop my new coding skills. My favorite part of coding is collaborating with others on projects that are functional, useful, and fun.
                        In my free time I enjoy mountain biking, puzzles, and being with friends and family. 
                    </p>
                    <div className="nine columns main-col">
                        <h2>Technical Skills</h2>
                        <ul>
                            <li>list of languages Here</li>
                        </ul>
                    </div>
                    {/* <div className="row">
                        <div className="columns contact-details">

                            <h2> Contact Details</h2>
                            <p className="address">
                                <span>Averi Sherman</span>
                                <br></br>
                                <span>gmail</span>
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )

}
export default About;