import React, {Component} from 'react';
import NavBar from './navbar';
import Timer from './timer/timer';
import DataCharts from './DataCharts/datacharts';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        secondsWorked: 1233000,
        secondsWorkedTodayByHour: [120000, 0, 0, 0, 0, 0]
    };
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
