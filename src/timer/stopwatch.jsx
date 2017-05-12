// @flow

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Moment from 'moment';

class Stopwatch extends React.Component {
  constructor(props: any) {
    super(props);
    this.convertTime = this.convertTime.bind(this);
  }

  convertTime(secondsWorked: Int){
    let time = Moment.utc(secondsWorked * 1000).format('HH:mm:ss');
    return time;
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
          <MenuItem primaryText="Start" />
          <MenuItem primaryText="Pause" />
          <MenuItem primaryText="Stop" />
          <MenuItem primaryText="Reset" />
        </IconMenu>
        <h1>{time}</h1>
      </div>
    );
  }
}

export default Stopwatch;
