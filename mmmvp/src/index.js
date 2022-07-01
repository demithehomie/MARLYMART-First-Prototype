import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Mktplace from './pages/mktplace';

ReactDOM.render(
  <React.StrictMode>
    <Mktplace />
  </React.StrictMode>,
  document.getElementById('root')
);

