import React, { Component } from 'react';
import ReactDom from 'react-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <h1>00:00:00</h1>
      </div>
    );
  }
}

export default Stopwatch;
