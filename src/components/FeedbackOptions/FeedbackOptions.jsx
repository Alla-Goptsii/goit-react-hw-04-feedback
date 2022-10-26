import React from 'react';
import { List, Item, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => (
      <Item key={option}>
        <Button type="button" value={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      </Item>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
