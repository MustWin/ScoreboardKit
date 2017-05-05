import React, {Component} from 'react';
import NavBar from './navbar';
import Timer from './timer/timer';
import DataCharts from './DataCharts/datacharts';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <NavBar />
        <Timer />
        <DataCharts />
      </div>
    );
  }

};

export default App;
