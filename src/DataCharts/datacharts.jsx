// @flow

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin'
import BillingChart from './billingChart';
import {Card} from 'material-ui/Card';
injectTapEventPlugin();

const MOCKDATA = require('../mockData/mock.json');
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  paragraph: {
    fontSize: 12,
  },
  chart: {
    padding: '20px'
  }
};

class DataCharts extends React.Component {
  billingFilterUpdate: Function;
         updateFilter: Function;
           formatData: Function;

  constructor(props: any) {
    super(props);
    this.billingFilterUpdate = this.billingFilterUpdate.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.formatData = this.formatData.bind(this);
  }

  //helper to set the data
  formatData(project: any, data: any, labels: any){
    var tempData = MOCKDATA;
    tempData.labels = labels;
    tempData.datasets[0].label = project.name;
    tempData.datasets[0].data = data;
    return tempData;
  }

  updateFilter(project: any, filter: string){
    let labels, data;

    if(filter.toLowerCase() === '3 days'){
      labels = project.billing.days.slice(0,3);
      data = project.billing.hours.slice(0,3);
    } else if(filter.toLowerCase() === '1 week'){
      labels = project.billing.days.slice(0,7);
      data = project.billing.hours.slice(0,7);
    }else{
      labels = project.billing.days;
      data = project.billing.hours;
    }
    return this.formatData(project, data, labels);
  }

  billingFilterUpdate(event: Event) {
    this.props.onFilterChange(event);
  }

  render() {

    let project = this.props.project;
    let projData = this.updateFilter(project, this.props.chartFilter);

    return (
      <Card>
        <Tabs
          value={this.props.chartFilter}
          onChange={this.billingFilterUpdate}>
           <Tab label="3 Days" value="3 Days">
             <div style={styles.chart}>
               <h2 style={styles.headline}>3 Days</h2>
              <BillingChart project={project} data={MOCKDATA} />
             </div>
           </Tab>
           <Tab label="1 Week" value="1 Week">
             <div style={styles.chart}>
               <h2 style={styles.headline}>1 Week</h2>
               <BillingChart project={project} data={MOCKDATA}/>
             </div>
           </Tab>
           <Tab label="1 Month" value="1 Month">
             <div style={styles.chart}>
               <h2 style={styles.headline}>1 Month</h2>
               <BillingChart project={project} data={MOCKDATA}/>
             </div>
           </Tab>
         </Tabs>
      </Card>
    );
  }
}

export default DataCharts;
