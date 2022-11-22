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
                        Hi! I am a recent graduate of the UCLA Coding Bootcamp. placeholder text
                        placeholder bio text
                        placehilder bio text
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