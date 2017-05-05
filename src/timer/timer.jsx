import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const css = {
  row: {
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
          <div style={css.row}>
            <h3 style={css.colLeft}>Hours Today</h3>
            <IconMenu
             iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
             anchorOrigin={{horizontal: 'right', vertical: 'top'}}
             targetOrigin={{horizontal: 'right', vertical: 'top'}}>
             <MenuItem primaryText="Start" />
             <MenuItem primaryText="Pause" />
             <MenuItem primaryText="Edit" />
             <MenuItem primaryText="Bill" />
             <MenuItem primaryText="Delete" />
           </IconMenu>
          </div>
          <div style={css.row}>
            <h1 style={css.time}>3:23:33</h1>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default Timer;
