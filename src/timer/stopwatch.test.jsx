import React from 'react';
import { mount, shallow } from 'enzyme';
import { getMuiTheme } from 'material-ui/styles/index';
import Stopwatch from './stopwatch';

const muiTheme = getMuiTheme();
const mountWithContext = node => mount(node, {
  context: { muiTheme },
  childContextTypes: { muiTheme: React.PropTypes.object.isRequired },
});

describe('Stopwatch', () => {
  it('Should render without throwing an error', () => {
    expect(shallow(<Stopwatch />).contains(<h1>00:00:00</h1>)).toBe(true);
  });

  it('Displays hours correctly', () => {
    const wrapper = mountWithContext(<Stopwatch />);
    const state = {
      secondsWorked: 3600,
    };
    wrapper.setState(state);

    expect(wrapper.find('h1').first().text()).toEqual('01:00:00');
  });
});
