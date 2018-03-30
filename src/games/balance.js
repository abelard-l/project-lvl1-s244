import { random } from 'lodash';
import go from '..';

const getRandomString = () => {
  const numOfElems = random(3, 4);
  const randArr = [];
  for (let i = 0; i < numOfElems; i += 1) {
    randArr[randArr.length] = random(9);
  }
  return randArr.join('');
};

const makeBalanced = (num) => {
  const sortNum = num.sort().map(item => Number(item));
  for (let i = 0; i < sortNum.length; i += 1) {
    if (sortNum[sortNum.length - 1] - sortNum[0] > 1) {
      sortNum[0] += 1;
      sortNum[sortNum.length - 1] -= 1;
      return makeBalanced(sortNum);
    }
  }
  return sortNum.join('');
};

const playBalance = () => {
  const question = getRandomString();
  const rightAnswer = makeBalanced(question.split(''));

  return {
    question,
    rightAnswer,
  };
};

export default () => go('Balance the given number.', playBalance);
