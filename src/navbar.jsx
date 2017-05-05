import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationVert from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
    this.state = {
      open: false,
    };
    this.handeTouch = this.handeTouch.bind(this);
  }

  handeTouch(event) {
    console.log("tapped: " + event);
    return ;
  }

  handleToggle (){
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span style={css.title}>Scoreboard Mobile</span>}
          onTitleTouchTap={(e) => this.handeTouch(e)}
          iconElementRight={<IconButton onTouchTap={() => this.handleToggle()} style={css.button}>
            <NavigationVert />
          </IconButton>}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Cisco PO #3233</MenuItem>
          <MenuItem>Irregardless</MenuItem>
          <MenuItem>Eatsa PO #12</MenuItem>
          <MenuItem>Facebook</MenuItem>
          <MenuItem>Oracle</MenuItem>
          <MenuItem>Epic Games</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
