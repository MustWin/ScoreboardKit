// @flow

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Moment from 'moment';
import Snackbar from 'material-ui/Snackbar';

class Stopwatch extends React.Component {
  constructor(props: any) {
    super(props);
    this.convertTime = this.convertTime.bind(this);
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.pauseTime = this.pauseTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  convertTime(secondsWorked: Int){
    let time = Moment.utc(secondsWorked * 1000).format('HH:mm:ss');
    return time;
  }

  startTime(){
    console.log('timer started');
  }

  stopTime(){
    console.log('timer stopped');
  }

  pauseTime(){
    console.log('timer paused');
  }

  resetTime(){
    console.log('timer reset');
  }

  render() {

    let time = this.convertTime(this.props.secondsWorked);

    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem primaryText="Start" onTouchTap={this.startTime} />
          <MenuItem primaryText="Pause" onTouchTap={this.pauseTime}/>
          <MenuItem primaryText="Stop" onTouchTap={this.stopTime} />
          <MenuItem primaryText="Reset" onTouchTap={this.resetTime} />
        </IconMenu>
        <h1>{time}</h1>
      </div>
    );
  }
}

export default Stopwatch;
