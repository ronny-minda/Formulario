import React from 'react';
import ReactDOM from 'react-dom';
import { GlabalStyle } from './Componentes/Styles';

import App from './formulario';


ReactDOM.render(
  <React.StrictMode>
    <GlabalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);