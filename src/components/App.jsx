import React, { Component } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { rating } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Please leave feedback
        <Feedback rating={rating} />
        <Statistics rating={rating} />
      </div>
    );
  }
}

// export const App = () => {
//   return (

//   );
// };
