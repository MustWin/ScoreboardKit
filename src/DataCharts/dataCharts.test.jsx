import React from 'react';
import { mount, shallow } from 'enzyme';
import { getMuiTheme } from 'material-ui/styles/index';
import {Tabs, Tab} from 'material-ui/Tabs';
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

  let filter = '3 Days';
  const style = {
    chart: {
      padding: '20px',
    },
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };

  it('should render without throwing an error', () => {
      const wrapper = shallow(<DataCharts project={project} chartFilter={filter} />);
      expect(wrapper.exists()).toBe(true);
  });

  it('should render the tabs without throwing an error', () => {
    const wrapper = shallow(<DataCharts project={project} chartFilter={filter} />);
    expect(wrapper.find(<h2 style={style.headline}>3 Days</h2>).exists()).toBe(true);
  });

  it('should display the correct tab when filter is set', () => {
    const wrapper = shallow(<DataCharts project={project} chartFilter={filter} />);
    expect(wrapper.find(<h2 style={style.headline}>3 Days</h2>).exists()).toBe(true);

    wrapper.setState({'filter': '1 Week'});
    expect(wrapper.find(<h2 style={style.headline}>1 Week</h2>).exists()).toBe(true);
  });
});
