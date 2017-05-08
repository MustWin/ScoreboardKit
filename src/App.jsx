import React, {Component} from 'react';
import NavBar from './navbar';
import Timer from './timer/timer';
import DataCharts from './DataCharts/datacharts';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentProject: 1
    };

    this.handleCurrentProject = this.handleCurrentProject.bind(this);
  }

  handleCurrentProject(projectId) {
    this.setState({
      currentProject: projectId
    });
  }

  render() {

    return(
      <div>
        <NavBar data={this.props.data}  />
        <Timer />
        <DataCharts  />
      </div>
    );
  }

};

export default App;
