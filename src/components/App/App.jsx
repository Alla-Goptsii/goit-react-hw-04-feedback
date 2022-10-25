import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Box from '../App/App.styled';

// console.log(FeedbackOptions());

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const value = event.currentTarget.value;

    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
        // this.setState(prevState => ({
        //   value: prevState.value + 1,})
      };
    });
  };

  countTotalFeedback() {}
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

            // total={this.countTotalFeedback()}
            // positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Box>
    );
  }
}

// const { good, neutral, bad } = this.state;

// return (

// <Box>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           <Statistics
//             good={options.good}
//             neutral={options.neutral}
//             bad={options.bad}
//             // total={///}
//             // positivePercentage={///}
//           />
//         </Section>
//       </Box>
//     );
//   }
// }
