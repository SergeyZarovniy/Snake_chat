import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let dialogs = [
  { id: 1, name: "Yana Zarovna" },
  { id: 2, name: "Ivan Skripnik" },
  { id: 3, name: "Yarek Brokh" },
  { id: 4, name: "Volodia Perun" },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

