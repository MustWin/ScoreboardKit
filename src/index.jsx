// @flow

import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
//let PROJECTS = require('./mockData/data.json');

var EX_DATA = [
  {
    "id": 0,
    "name" : "Cisco PO#233",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
    "billing": {
      "days": ["4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "4/7", "4/18", "4/9", "4/11", "4/12", "4/13"],
      "hours": [8.0, 7.6, 7.8, 9.1, 9.0, 8.0, 7.6, 7.8, 9.1, 9.0, 6.7, 4.3, 9.2]
    }
  },
  {
    "id": 1,
    "name" : "Cisco PO#233",
    "description" :"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "billing": {
      "days": ["4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "4/7", "4/18", "4/9", "4/11", "4/12", "4/13"],
      "hours": [7.0, 5.6, 9.8, 6.1, 7.0, 8.0, 8.6, 3.8, 6.1, 5.0, 3.7, 7.3, 7.2]
    }
  },
  {
    "id": 2,
    "name" : "Cisco PO#233",
    "description" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    "billing" : {
      "days": ["4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "4/7", "4/18", "4/9", "4/11", "4/12", "4/13"],
      "hours": [4.0, 5.6, 6.8, 7.1, 8.0, 9.0, 8.6, 7.8, 6.1, 5.0, 4.7, 3.3, 5.2]
    }
  }
];

const MainApp = () => (<App data={EX_DATA} />);

ReactDOM.render(
  <MuiThemeProvider><MainApp /></MuiThemeProvider>,
  document.getElementById('app'),
);
