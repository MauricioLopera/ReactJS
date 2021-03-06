import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Badge from './Components/badge';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Badge Nombre="Mauricio" Apellido="Lopera" Cargo="CEO Helpex" SocialM="MauricioLopera1" Avatar="https://www.gravatar.com/avatar?d=identicon"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
