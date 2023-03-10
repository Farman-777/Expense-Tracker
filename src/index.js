import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';


// import reactDom from 'react-dom' 
// createRoot(<App/>,document.getElementById("root"));

createRoot(document.getElementById('root')).render(<App />);