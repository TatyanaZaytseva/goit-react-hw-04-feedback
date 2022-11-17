import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.list}>
    {options.map(option => (
      <li className={css.item} key={option}>
        <button
          className={css.button}
          type="button"
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
