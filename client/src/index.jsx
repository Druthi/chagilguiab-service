import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Home.jsx';
import $ from 'jquery';

window.ProductDetails = App;
ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));