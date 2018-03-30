import { random } from 'lodash';
import go from '..';

const isEven = (number) => {
  if (number % 2) return false;
  return true;
};

const playEven = () => {
  const curNum = random(100);
  const rightAnswer = isEven(curNum) ? 'yes' : 'no';

  return {
    question: curNum,
    rightAnswer,
  };
};

export default () => go('Answer "yes" if number even otherwise answer "no".', playEven, 3);
