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
  const project = {
    id: 1,
    name: 'Test Proj',
    description: 'small description of test project',
    billing: {
      days: ['1','2','3','4'],
      hours: [1,2,3,4]
    },
  };

  const filter = '3 Days';


  it('should render without throwing an error', () => {
    expect(shallow(<DataCharts project={project} chartFilter={filter} />)
      .contains(<Card />)).toBe(true);
  });
});
