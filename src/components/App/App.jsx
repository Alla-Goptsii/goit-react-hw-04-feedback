import { useEffect, useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import Box from '../App/App.styled';

export default function App(event) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [countTotalFeedback, setCountTotalFeedback] = useState(0);
  const [countPositiveFeedbackPercentage, setCountPositiveFeedbackPercentage] =
    useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error();
    }
  };

  useEffect(() => {
    const allFeedback = good + neutral + bad;
    setCountTotalFeedback(allFeedback);
    setCountPositiveFeedbackPercentage(Math.round((good / allFeedback) * 100));
  }, [good, neutral, bad]);

  return (
    <Box>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Box>
  );
}
