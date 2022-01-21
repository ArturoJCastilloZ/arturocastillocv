import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './pages/Header';
import About from './pages/About';
import Training from './pages/Training';
import Experience from './pages/Experience';
import Footer from './pages/Footer';

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
