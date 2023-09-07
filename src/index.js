import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:400,500, 600,700&display=swap'],
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
