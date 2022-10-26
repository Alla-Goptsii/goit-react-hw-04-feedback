import React from 'react';
import { Statistic, Span } from './Statistic.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Statistic>
      <Span>Good:{good}</Span>
      <Span>Neutral:{neutral}</Span>
      <Span>Bad:{bad}</Span>
      <Span>Total:{total}</Span>
      <Span>Positive feedback:{positivePercentage}%</Span>
    </Statistic>
  );
};

export default Statistics;
