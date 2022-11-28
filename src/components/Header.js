import React from 'react';
function Header() {
    return (

        <header id="home">
            <nav id="nav-wrap">
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
                    <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I am Averi Sherman.</h1>
                    <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>Junior Fullstack Web Developer.
                    </h3>
                    <hr />
                    <a
                        className="fa fa-github" href="https://github.com/Aveheart" target="_blank" rel="noopener noreferrer">
                        Github |  
                        {/* get symbol of github instead of word for link */}
                    </a>

                    <a
                        className="fa fa-github" href="https://www.linkedin.com/in/averi-sherman-b2a39b256/" target="_blank" rel="noopener noreferrer">
                              LinkdIn
                        {/* get symbol of linkdIn instead of word for link */}
                    </a>
                </div>
            </div>

            {/* <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p> */}
        </header >
    )
}
export default Header;


// HomePage
// Home About Projects Contact- nave bar links to each section
// Header with my name and quick statement/ description
// link to Github and LinkdIn 
// done-simple