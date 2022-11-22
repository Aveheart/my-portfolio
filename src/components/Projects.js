import React from 'react';
function Projects() {
    return (
        <section id="projects">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1> My Projects</h1>
                    <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div class="products">
                            <section class="card">
                                <header>titleproj 1</header>
                                <img src="./assets/images/camera.jpg" alt="project 1" />
                                <p>project 1 details</p>
                            </section>
                            <section class="card">
                                <header>Title proj 2</header>
                                <img src="./assets/images/tablet.jpg" alt="project 2" />
                                <p>Proj 2 details</p>
                            </section>
                            <section class="card">
                                <header>title project 3</header>
                                <img src="./assets/images/toilet-paper.jpg" alt="proj 3" />
                                <p>Proj 3 details</p>
                            </section>
                            <section class="card">
                                <header>title proj 4</header>
                                <img src="./assets/images/wooden-spoons.jpg" alt="proj 4" />
                                <p>Project 4 details</p>
                            </section>
                            <section class="card">
                                <header>title proj 5</header>
                                <img src="./assets/images/wooden-spoons.jpg" alt="proj 5" />
                                <p>Project 5 details</p>
                            </section>
                            <section class="card">
                                <header>title proj 6</header>
                                <img src="./assets/images/wooden-spoons.jpg" alt="proj 6" />
                                <p>Project 6 details</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;