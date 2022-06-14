import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

const Root = () => {
  return(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);




// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
//   )
export default Root;
