// @flow

import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Remove these Anys
class MainApp extends React.Component<any, any, any> {
  constructor(props: any) {
      super(props);
      this.state = {
          secondsWorked: 1233000,
          secondsWorkedTodayByHour: [120000, 0, 0, 0, 0, 0]
      };
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }

}

ReactDOM.render(<MainApp />, document.getElementById('app')); // eslint-disable-line
