import React from 'react';
import {mount, shallow} from 'enzyme';
import {getMuiTheme} from 'material-ui/styles/index';
import Timer from './timer';
import Card from 'material-ui/Card';

const muiTheme = getMuiTheme();
const mountWithContext = node => (node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: React.PropTypes.object.isRequired},
});

describe('Timer', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Timer />)/contains(<Card />)).tobe(true);
  });
});
