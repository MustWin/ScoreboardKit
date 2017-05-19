import React from 'react';
import { mount, shallow } from 'enzyme';
import { getMuiTheme } from 'material-ui/styles/index';
import BillingChart from './billingChart';
import Line from 'react-chartjs-2';

const data = require('../mockData/mock.json');
const muiTheme = getMuiTheme();
const mountWithContext = node => (node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: React.PropTypes.object.isRequired},
});
const project = {
  id: 1,
  name: 'Test Proj',
  description: 'small description of test project',
  billing: {
    days: ['1','2','3','4'],
    hours: [1,2,3,4]
  },
};


describe('Billing Charts', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<BillingChart project={project} data={data} />)
      .contains(<Line data={data} />)).toBe(true);
  });
});
