import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function Main () {
    return(
        <div>
            {<Header/>}
            {<Main/>}
            {<About/>}
            {<Projects/>}
            {<Contact/>}
            {<Footer/>}
        </div>
    )
}
export default Main