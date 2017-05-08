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
  }

  render() {

    let project = this.props.project;
    let menuItems = [];
    this.props.allProjects.forEach((proj) => {
      menuItems.push(<MenuItem key={proj.id}>{proj.name}</MenuItem>);
    });

    return (
      <div>
        <AppBar
          title={<span style={css.title}>{project.name}</span>}
          iconElementRight={<IconButton onTouchTap={this.props.onNavToggle} style={css.button}>
            <NavigationVert />
          </IconButton>}
        />
        <Drawer open={this.props.open}>
          {menuItems}
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
