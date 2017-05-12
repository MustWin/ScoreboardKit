import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Stopwatch from './stopwatch';

const colLeft = {
    width: '90%',
    display: 'inline',
    float: 'left',
};

const timerRow = {
  width: '100%',
  maxWidth: '100%',
  display: 'block',
  clear: 'both',
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let project = this.props.project;

    return (
      <Card>
        <CardHeader
          title={project.name}
          subtitle={project.description}
        />
        <CardText>
          <div style={timerRow}>
            <h3 style={colLeft}>Hours Today</h3>
            <Stopwatch secondsWorked={this.props.secondsWorked}/>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default Timer;
