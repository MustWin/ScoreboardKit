import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin'
import BillingChart from './billingChart';
injectTapEventPlugin();

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  paragraph: {
    fontSize: 12,
  }
};

//TODO: replace with data formatted from data.json
const MOCKDATA = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Mock Dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}

class DataCharts extends React.Component {
  constructor(props) {
    super(props);
    this.billingFilterUpdate = this.billingFilterUpdate.bind(this);
    this.formatData = this.formatData.bind(this);
  }

  formatData(project, filter){
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

    //TODO: this here feels super janky, and should be set up somewhere else
    var tempData = MOCKDATA;
    tempData.labels = labels;
    tempData.datasets[0].label = project.name;
    tempData.datasets[0].data = data;
    return tempData;
  }


  billingFilterUpdate(event) {
    this.props.onFilterChange(event);
  }

  render() {

    let project = this.props.project;
    let projData = this.formatData(project, this.props.chartFilter);

    return (
      <Tabs
        value={this.props.chartFilter}
        onChange={this.billingFilterUpdate}>
         <Tab label="3 Days" value="3 Days">
           <div>
             <h2 style={styles.headline}>3 Days</h2>
            <BillingChart project={project} data={MOCKDATA} />
           </div>
         </Tab>
         <Tab label="1 Week" value="1 Week">
           <div>
             <h2 style={styles.headline}>1 Week</h2>
             <BillingChart project={project} data={MOCKDATA}/>
           </div>
         </Tab>
         <Tab label="1 Month" value="1 Month">
           <div>
             <h2 style={styles.headline}>1 Month</h2>
             <BillingChart project={project} data={MOCKDATA}/>
           </div>
         </Tab>
       </Tabs>
    );
  }
}

export default DataCharts;
