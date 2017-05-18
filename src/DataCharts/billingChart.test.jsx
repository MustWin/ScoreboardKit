import React from 'react';
import { mount, shallow } from 'enzyme';
import { getMuiTheme } from 'material-ui/styles/index';
import BillingChart from './billingChart';
import Line from 'react-chartjs-2';

const muiTheme = getMuiTheme();
const mountWithContext = node => (node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: React.PropTypes.object.isRequired},
});

describe('Billing Charts', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<BillingChart />).contains(<Line />)).toBe(true);
  });
});
