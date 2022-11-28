import React from 'react';
function Projects() {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1> My Projects</h1>
                    <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div class="products">
                            <section class="card">
                                <header>titleproj 1</header>
                                <img src="./components/myface.PNG" alt="project 1" />
                                <p>project 1 details</p>
                            </section> 
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;