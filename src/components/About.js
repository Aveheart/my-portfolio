import React from 'react';
function About() {
    return (
        <section id="about">
            <div className="row">

                <div className="three columns">
                    {/* image here */}
                </div>
                <div className="nine columns main-col">

                    <h2>About Me</h2>
                    <p>
                        This will be where i put my bio.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">

                            <h2> Contact Details</h2>
                            <p className="address">
                                <span>Averi Sherman</span>
                                <br></br>
                                <span>gmail</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default About;