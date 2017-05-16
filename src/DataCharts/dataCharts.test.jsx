import React from 'react';
import { mount, shallow } from 'enzyme';
import { getMuiTheme } from 'material-ui/styles/index';
import DataCharts from './dataCharts';
import Card from 'material-ui/Card';

const muiTheme = getMuiTheme();
const mountWithContext = node => (node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: React.PropTypes.object.isRequired},
});

describe('Billing Charts', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<DataCharts />)/contains(<Card />)).tobe(true);
  });
});
