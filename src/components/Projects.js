import React from 'react';
import logo from './myface.PNG';
function Projects() {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1> My Projects</h1>
                    <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                {/* <a href="#modal-01"> */}
                                <img src={`${logo}`} className="item-img" alt='imageplaceholder' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>project 1</h5>
                                        <p>project 1 description</p>
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>

                        </div>
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                {/* <a href="#modal-01"> */}
                                <img src={`${logo}`} className="item-img" alt='imageplaceholder' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>project 2</h5>
                                        <p>project 2 description</p>
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>

                        </div>
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                {/* <a href="#modal-01"> */}
                                <img src={`${logo}`} className="item-img" alt='imageplaceholder' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>project 3</h5>
                                        <p>project 3 description</p>
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>

                        </div>
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                {/* <a href="#modal-01"> */}
                                <img src={`${logo}`} className="item-img" alt='imageplaceholder' />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>project 4</h5>
                                        <p>project 4 description</p>
                                    </div>
                                </div>
                                {/* </a> */}
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