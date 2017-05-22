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

  const style = {
    chart: {
      padding: '20px',
    },
  };

  it('should render without throwing an error', () => {
      const wrapper = shallow(<DataCharts project={project} chartFilter={filter} />);
      expect(wrapper.exists()).toBe(true);
  });

  it('should render the tabs without throwing an error', () => {
    const wrapper = shallow(<DataCharts project={project} chartFilter={filter} />);
    expect(wrapper.find(<Tabs />).exists()).toBe(true);
  });

  it('should display the correct tab when filter is set', () => {
    const wrapper = shallow(<DataCharts project={project} chartFilter={filter} />);
    expect(wrapper.find(<Tab label="3 Days" value="3 Days"/>).exists()).toBe(true);

    //TODO: simulate filter switch via click once the above test is confirmed 
    filter = '1 Week';
    wrapper = shallow(<DataCharts project={project} chartFilter={filter} />);
    expect(wrapper.find(<Tab label="1 Week" value="1 Week"/>).exists()).toBe(true);
  });
});
