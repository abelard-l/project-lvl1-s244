import { random } from 'lodash';
import go from '..';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const playPrime = () => {
  const curNum = random(100);
  const rightAnswer = isPrime(curNum) ? 'yes' : 'no';

  return {
    question: curNum,
    rightAnswer,
  };
};

export default () => go('Answer "yes" if the number prime otherwise answer "no".', playPrime);
