import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import About from './About';
import Training from './Training';
import Experience from './Experience';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
    <Training />
    <Experience />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
