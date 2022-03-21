import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = lazy(()=>import('./contenido/App'))

ReactDOM.render(
  <Suspense fallback={
    <div class="cssload-loader"></div>
}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
