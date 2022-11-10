import React from 'react';
import css from 'components/Statiatics/Statistics.module.css';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total === 0 ? (
    <Notification message="No feedback given" />
  ) : (
    <>
      <span className={css.item}>Good: {good}</span>
      <span className={css.item}>Neutral: {neutral}</span>
      <span className={css.item}>Bad: {bad}</span>
      <span className={css.item}>Total: {total}</span>
      <span className={css.item}>Positive feedback: {positivePercentage}%</span>
    </>
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
