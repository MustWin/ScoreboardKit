import React, {Component} from 'react';
import NavBar from './navbar';
import Timer from './timer/timer';
import DataCharts from './DataCharts/datacharts';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentProjectId: 1,
      billingFilter: '3 Days',
    };

    this.handleCurrentProject = this.handleCurrentProject.bind(this);
    this.handleBillingView =  this.handleBillingView.bind(this);
  }

  handleCurrentProject(projectId) {
    this.setState({
      currentProjectId: projectId
    });
  }

  handleBillingView(billingView){
    this.setState({
      billingFilter: billingView
    });
  }

  render() {
    let projects = this.props.data;
    let currentProject;
    if(this.state.currentProjectId){
      currentProject = this.props.data[this.state.currentProjectId];
    }

    return(
      <div>
        <NavBar project={currentProject} allProjects={projects} />
        <Timer project={currentProject} />
        <DataCharts
          project={currentProject}
          chartFilter={this.state.billingFilter}
          onFilterChange={this.handleBillingView}
        />
      </div>
    );
  }

};

export default App;
