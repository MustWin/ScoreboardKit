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

class DataCharts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabs>
         <Tab label="1 Day">
           <div>
             <h2 style={styles.headline}>1 Day</h2>
            <BillingChart />
           </div>
         </Tab>
         <Tab label="1 Week">
           <div>
             <h2 style={styles.headline}>1 Week</h2>
             <BillingChart />
           </div>
         </Tab>
         <Tab label="1 Month">
           <div>
             <h2 style={styles.headline}>1 Month</h2>
             <BillingChart />
           </div>
         </Tab>
       </Tabs>
    );
  }
}

export default DataCharts;
