import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationVert from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';


const css = {
  title: {
    cursor: 'pointer',
  },
  button: {
    marginTop: '-12px',
  }
};

class NavBar extends React.Component {
  constructor(props){
    super(props);
    //boiler, nothing really goes in here atm
    this.state = {};
    this.handeTouch = this.handeTouch.bind(this);
  }

  handeTouch(event) {
    console.log("tapped: " + event);
    return ;
  }

  render() {
    return (
      <AppBar
        title={<span style={css.title}>Scoreboard Mobile</span>}
        onTitleTouchTap={(e) => this.handeTouch(e)}
        iconElementRight={<IconButton style={css.button}><NavigationVert /></IconButton>}
      />
    );
  }
}

export default NavBar;
