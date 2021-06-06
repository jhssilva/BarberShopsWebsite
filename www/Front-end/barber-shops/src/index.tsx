import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import HomeBackgroundVideo from './components//Home-Main-Background-Video/home-background-video';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <HomeBackgroundVideo/>
    ,
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
