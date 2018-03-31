import { random } from 'lodash';
import go from '..';

const makeProgression = () => {
  const initial = random(10);
  const step = random(2, 5);
  const hidden = random(2, 9);

  let question = initial.toString();
  let rightAnswer;

  for (let i = 1; i <= 10; i += 1) {
    const additional = i * step;
    const newMember = initial + additional;
    if (i !== hidden) {
      question += ` ${newMember}`;
    } else {
      question += ' ...';
      rightAnswer = newMember;
    }
  }

  return {
    question,
    rightAnswer,
  };
};

const playProgression = () => {
  const { question, rightAnswer } = makeProgression();

  return {
    question,
    rightAnswer: rightAnswer.toString(),
  };
};

export default () => go('Balance the given number.', playProgression);
