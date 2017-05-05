import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Cisco PO #3223"
          subtitle="Friday, May 5th 2017"
        />
        <CardText>
          <h3>Hours Today</h3>
          <h1>3:43:21</h1>
        </CardText>
        <CardActions>
          <FlatButton label="Start"/>
          <FlatButton label="Pause"/>
          <FlatButton label="Edit"/>
          <FlatButton label="Bill"/>
          <FlatButton label="Delete"/>
        </CardActions>
      </Card>
    );
  }
}

export default Timer;
