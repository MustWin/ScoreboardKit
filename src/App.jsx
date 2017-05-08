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
      currentProject = this.props.data[this.state.currentProjectId];
    }

    return(
      <div>
        <NavBar
          project={currentProject}
          allProjects={projects}
          open={this.state.navOpen}
          onNavToggle={this.handleNavToggle}
        />
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
