import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Stopwatch from './stopwatch';

const appTimerStyles = {
  timerRow: {
    width: '100%',
    maxWidth: '100%',
    display: 'block',
    clear: 'both',
  },
  colLeft: {
    width: '90%',
    display: 'inline',
    float: 'left',
  },
  time: {
    fontSize: '48px',
  }
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
          <div style={appTimerStyles.timerRow}>
            <h3 style={appTimerStyles.colLeft}>Hours Today</h3>
            <Stopwatch />
          </div>
        </CardText>
      </Card>
    );
  }
}

export default Timer;
