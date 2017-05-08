import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationVert from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import DropDownMenu from 'material-ui/DropDownMenu';
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
    this.projectUpdate = this.projectUpdate.bind(this);
  }

  projectUpdate(event, index, value){ this.props.onProjectSelect(value); }

  render() {

    let project = this.props.project;
    let menuItems = [];
    this.props.allProjects.forEach((proj) => {
      menuItems.push(<MenuItem
        key={proj.id}
        value={proj.id}
        primaryText={proj.name}/>
      );
    });

    return (
      <div>
        <AppBar
          title={<span style={css.title}>{project.name}</span>}
          iconElementRight={
            <DropDownMenu value={this.props.projectID} onChange={this.projectUpdate}>
              {menuItems}
            </DropDownMenu>
          }
        />
        <Drawer open={this.props.open}>
          {menuItems}
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
