// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS 
import './css/style.css';

//routes
import routes from'./router';

// Render
render(
  routes,
  document.getElementById('root')
);
