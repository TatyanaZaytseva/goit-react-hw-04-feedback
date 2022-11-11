import { useState, useEffect } from 'react';
import css from 'components/App/App.module.css';
import { Statistics } from 'components/Statiatics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positivFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);

  const handleIncrement = event => {
    const value = event.currentTarget.value;

    switch (value) {
      case 'good':
        setGood(num => num + 1);
        break;
      case 'neutral':
        setNeutral(num => num + 1);
        break;
      case 'bad':
        setBad(num => num + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    setTotalFeedback(total);

    setPositiveFeedbackPercentage(Math.floor((good * 100) / total));
  }, [good, neutral, bad]);

  return (
    <div className={css.wraper}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivFeedbackPercentage}
        />
      </Section>
    </div>
  );
}
