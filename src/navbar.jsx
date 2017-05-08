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
  }

  handleToggle (){
    this.setState({open: !this.state.open});
  }


//TODO: replace navbar MenuItems with projects from data.json
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
          iconElementRight={<IconButton onTouchTap={() => this.handleToggle()} style={css.button}>
            <NavigationVert />
          </IconButton>}
        />
        <Drawer open={this.state.open}>
          {menuItems}
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
