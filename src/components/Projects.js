import React from 'react';
// import logo from './myface.PNG';
import project1 from './images/takeahike2.jpg';
import project2 from './images/pill-git-it.gif';
import project3 from './images/NPFinder4.jpg';
import project4 from './images/eCommerce.jpg';
function Projects() {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1> My Projects</h1>
                    
                    <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns portfolio-item">
                            <div className="projectTitle">Take A Hike</div>
                            <div className="item-wrap">
                                <a href="https://safe-anchorage-34793.herokuapp.com/">
                                <img src={`${project1}`} className="item-img" alt='take a hike webpage' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Click here!</h5>
                                    </div>
                                </div>
                                </a>
                            </div>
                            {/* <div> Take A Hike</div> */}

                        </div>
                        <div className="columns portfolio-item">
                        <div className="projectTitle">Pill Git It</div>
                            <div className="item-wrap">
                                <a href="https://pill-git-it.herokuapp.com/">
                                <img src={`${project2}`} className="item-img" alt='pill git it webpage' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Click Here!</h5>
                                        
                                    </div>
                                </div>
                                </a>
                            </div>

                        </div>
                        <div className="columns portfolio-item">
                        <div className="projectTitle">National Park Finder</div>
                            <div className="item-wrap">
                                 <a href="https://proper-stevo.github.io/ThePonderosaPines/">
                                <img src={`${project3}`} className="item-img" alt='national park finder webpage' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Click Here!</h5>
                                       
                                    </div>
                                </div>
                                </a>
                            </div>

                        </div>
                        <div className="columns portfolio-item">
                        <div className="projectTitle">eCommerce backend</div>
                            <div className="item-wrap">
                                <a href="https://github.com/Aveheart/Ecommerce.git">
                                <img src={`${project4}`} className="item-img" alt='shopping cart' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Click Here!</h5>
                                       
                                    </div>
                                </div>
                                </a>
                            </div>

                        </div>
                        {/* <div className="columns portfolio-item">
                            <div className="item-wrap"> */}
                                {/* <a href="#modal-01"> */}
                                {/* <img src={`${logo}`} className="item-img" alt='imageplaceholder' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>project 5</h5>
                                        <p>project 5 description</p>
                                    </div>
                                </div> */}
                                {/* </a> */}
                            {/* </div>

                        </div> */}
                        {/* <div className="columns portfolio-item">
                            <div className="item-wrap">
                                {/* <a href="#modal-01"> */}
                                {/* <img src={`${logo}`} className="item-img" alt='imageplaceholder' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>project 6</h5>
                                        <p>project 6 description</p>
                                    </div>
                                </div> */}
                                {/* </a> */}
                            {/* </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;