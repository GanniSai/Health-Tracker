import React from 'react';
import ReactDOM from 'react-dom/client';
import HealthTracker from './Component/BrightTech/HealthTracker';
// import 'bootstrap/dist/css/bootstrap.min.css' 
import reportWebVitals from './reportWebVitals';

// import LoginComponent from './Component/BrightTech/LoginComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<HealthTracker/>
    {/* <LoginComponent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
