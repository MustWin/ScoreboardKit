// @flow

import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

const MainApp = () => (<App />);
var PROJECTS = require('./mockData/data.json');

ReactDOM.render(
  <MuiThemeProvider><MainApp data={PROJECTS} /></MuiThemeProvider>,
  document.getElementById('app'),
);
