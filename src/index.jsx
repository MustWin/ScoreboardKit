// @flow
// @flow

import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

const MainApp = () => (<App />);

ReactDOM.render(
  <MuiThemeProvider><MainApp /></MuiThemeProvider>,
  document.getElementById('app'),
);
