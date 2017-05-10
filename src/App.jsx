import React, {Component} from 'react';
import NavBar from './navbar';
import Timer from './timer/timer';
import Divider from 'material-ui/Divider';

import DataCharts from './DataCharts/datacharts';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentProjectId: 1,
      billingFilter: '3 Days',
      navOpen: false,
    };

    this.handleCurrentProject = this.handleCurrentProject.bind(this);
    this.handleBillingView =  this.handleBillingView.bind(this);
    this.handleNavToggle =  this.handleNavToggle.bind(this);
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

  handleNavToggle(){
    this.setState({
      navOpen: !this.state.navOpen,
    });
  }

  render() {
    let projects = this.props.data;
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
        <br />
        <Timer project={currentProject} />
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
