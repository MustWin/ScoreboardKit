// @flow

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs-2';

class BillingChart extends React.Component {
 constructor(props: any){
   super(props);
 }

 render() {
   let data = this.props.data;
   return(
     <Line data={data} />
   );
 }
}

export default BillingChart;
