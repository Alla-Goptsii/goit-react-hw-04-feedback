import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import Box from '../App/App.styled';

// console.log(FeedbackOptions());

export class App extends Component {
  state = {
    good: 1,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const value = event.currentTarget.value;
    console.log(value);

    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    const counts = Object.values(this.state);
    for (const count of counts) {
      total += count;
    }
    return total;
  };
  countPositiveFeedbackPercentage() {}

  render() {
    // console.log(this.handleIncrement);

    return (
      <Box>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Box>
    );
  }
}

// countPositiveFeedbackPercentage = () => {
//   return Math.floor(
//     (this.state.good * 100) / Number(this.countTotalFeedback())
//   );
// };
