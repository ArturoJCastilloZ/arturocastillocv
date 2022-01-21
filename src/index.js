import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
