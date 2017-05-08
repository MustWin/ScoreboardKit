// @flow

import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

let PROJECTS = require('./mockData/data.json');
const MainApp = () => (<App data={PROJECTS} />);

ReactDOM.render(
  <MuiThemeProvider><MainApp /></MuiThemeProvider>,
  document.getElementById('app'),
);
