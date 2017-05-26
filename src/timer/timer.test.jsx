import React from 'react';
import {mount, shallow} from 'enzyme';
import {getMuiTheme} from 'material-ui/styles/index';
import Timer from './timer';
import {Card, CardHeader} from 'material-ui/Card';

const muiTheme = getMuiTheme();
const mountWithContext = node => (node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: React.PropTypes.object.isRequired},
});

describe('Timer', () => {
  const project = {
    id: 1,
    name: 'Test Proj',
    description: 'small description of test project',
    billing: {
      days: ['1','2','3','4'],
      hours: [1,2,3,4]
    },
  };

  const colLeft = {
    width: '90%',
    display: 'inline',
    float: 'left',
  };

  it('should render without throwing an error', () => {
    expect(shallow(<Timer project={project} secondsWorked={3000} />)
    .contains(<h3 style={colLeft}>Hours Today</h3>)).toBe(true);
  });
});
