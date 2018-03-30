import { random } from 'lodash';
import go from '..';

const findGcd = (a, b) => {
  if (b) {
    return findGcd(b, a % b);
  }
  return Math.abs(a);
};

const playGcd = () => {
  const number1 = random(50);
  const number2 = random(50);

  const question = `${number1} ${number2}`;
  const rightAnswer = findGcd(number1, number2).toString();

  return {
    question,
    rightAnswer,
  };
};

export default () => go('Find the greatest common divisor of given numbers.', playGcd);
