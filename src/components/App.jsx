import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotalFeedback();
  };

  onLeaveFeedback = ({ target }) => {
    this.setState(prevState => ({
      [target.name]: prevState[target.name] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
