import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navbar';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <MuiThemeProvider>
        <NavBar />
      </MuiThemeProvider>
    );
  }

};

export default App;
