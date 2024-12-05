import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
//const el1 = <App name='htech' />
//const el2 = <Hello name='agen'/>
//const el3 = <Convertor />


const el = (
  <div>
    <App />
  </div>
);
root.render(
  el,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
