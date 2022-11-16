import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

function Main () {
    return(
        <div>
            {<Header/>}
            {<Home/>}
            {<About/>}
            {<Projects/>}
            {<Contact/>}
            {<Footer/>}
        </div>
    )
}
export default Main