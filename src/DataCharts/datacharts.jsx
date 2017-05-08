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
      label: 'My First dataset',
      fill: false,
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
    this.constructDataSet = this.constructDataSet.bind(this);
  }


  //on click via the filter, construct the data set for the chart
  constructDataSet(filter) {

  }

  render() {

    let project = this.props.project;

    return (
      <Tabs>
         <Tab label="1 Day">
           <div>
             <h2 style={styles.headline}>1 Day</h2>
            <BillingChart project={project} data={MOCKDATA} />
           </div>
         </Tab>
         <Tab label="1 Week">
           <div>
             <h2 style={styles.headline}>1 Week</h2>
             <BillingChart project={project} data={MOCKDATA}/>
           </div>
         </Tab>
         <Tab label="1 Month">
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
