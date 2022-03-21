import React from 'react';

import { About, Experience, Training } from './pages';
import { Footer, Header } from './componentes';


const App = () => {
  return (
    <div className='body bg-dark'>
      <div>
        <Header />
      </div>
        <About />
        <Training />
        <Experience />
        <Footer />
    </div>
  )
};

export default App;