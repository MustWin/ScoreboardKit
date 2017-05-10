import React, { Component } from 'react';
import ReactDom from 'react-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.convertTime = this.convertTime.bind(this);
    this.pad =  this.pad.bind(this);
  }

  pad(value, size){
    let s = "0000" + value;
    return s.substr(s.length - size);
  }

  convertTime(secondsWorked){
    let h, m, s = 0;
    let time = '';
    h = Math.floor(secondsWorked / (60 * 60));
    m = Math.floor(secondsWorked / 60 % 60);
    s = Math.floor(secondsWorked % 60);

    time = this.pad(h,2) + ":" + this.pad(m,2) + ":" + this.pad(s, 2);
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
