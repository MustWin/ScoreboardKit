// @flow

import React, {Component} from 'react';
import NavBar from './navbar';
import Timer from './timer/timer';
import Divider from 'material-ui/Divider';
import DataCharts from './DataCharts/datacharts';

class App extends React.Component {
  state: {
    currentProjectId: number,
    billingFilter: string,
    navOpen: boolean,
    secondsWorked: number,
    snackOpen: boolean,
  };

  handleCurrentProject: Function;
     handleBillingView: Function;
       handleNavToggle: Function;

  constructor(props: any){
    super(props);

    this.state = {
      currentProjectId: 1,
      billingFilter: '3 Days',
      navOpen: false,
      secondsWorked: 3600,
      snackOpen: false,
    };

    this.handleCurrentProject = this.handleCurrentProject.bind(this);
    this.handleBillingView =  this.handleBillingView.bind(this);
    this.handleNavToggle =  this.handleNavToggle.bind(this);
  }

  handleCurrentProject(projectId: number) {
    this.setState({
      currentProjectId: projectId
    });
  }

  handleBillingView(billingView: string){
    this.setState({
      billingFilter: billingView
    });
  }

  handleNavToggle(){
    this.setState({
      navOpen: !this.state.navOpen,
    });
  }

  render() {
    let projects = this.props.data;
    let secondsWorked =  this.state.secondsWorked;
    let currentProject;
    if(this.state.currentProjectId){
      currentProject = this.props.data[this.state.currentProjectId - 1];
    }

    return(
      <div>
        <NavBar
          project={currentProject}
          allProjects={projects}
          open={this.state.navOpen}
          projectID={this.state.currentProjectId}
          onNavToggle={this.handleNavToggle}
          onProjectSelect={this.handleCurrentProject}
        />
        <Timer project={currentProject} secondsWorked={secondsWorked}/>
        <br />
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
