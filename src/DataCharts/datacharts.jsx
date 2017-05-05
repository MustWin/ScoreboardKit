import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin'
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
             <h2 style={styles.headline}>Tab One</h2>
             <p style={styles.paragraph}>This is an example tab.</p>
             <p style={styles.paragraph}>You can put any sort of HTML or react component in here. It even keeps the component state!</p>
           </div>
         </Tab>
         <Tab label="1 Week">
           <div>
             <h2 style={styles.headline}>Tab Two</h2>
             <p style={styles.paragraph}>This is an example tab 2.</p>
           </div>
         </Tab>
         <Tab label="1 Month">
           <div>
             <h2 style={styles.headline}>Tab Three</h2>
             <p style={styles.paragraph}>This is an example tab 3.</p>
           </div>
         </Tab>
       </Tabs>
    );
  }
}

export default DataCharts;
