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
    this.billingFilterUpdate = this.billingFilterUpdate.bind(this);
  }

  billingFilterUpdate(event) {
    console.log(event);
    this.props.onFilterChange(event);
  }

  render() {

    let project = this.props.project;

    return (
      <Tabs
        value={this.props.billingFilter}
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
