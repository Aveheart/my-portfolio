import logo from './myface.PNG';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Under Construction... Coming Soon...
        </p>
        <a
          className="App-link"
          href="https://github.com/Aveheart"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here!
        </a>
      </header>
    </div>
  );
//   <div>
//     <Header></Header>
//     <Footer></Footer>
//   </div>
// )}
  }

export default App;
