import React from 'react';
import {mount, shallow} from 'enzyme';
import {getMuiTheme} from 'material-ui/styles/index';
import App from './App';
import {Card, CardHeader} from 'material-ui/Card';

const muiTheme = getMuiTheme();
const mountWithContext = node => (node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: React.PropTypes.object.isRequired},
});

describe('Timer', () => {
  const PROJECTS = require('./mockData/data.json');

  it('should render without throwing an error', () => {
    const wrapper = shallow(<App data={PROJECTS} />);
    expect(wrapper.exists()).toBe(true);
  });
});
