import readlineSync from 'readline-sync';
import { random } from 'lodash';

const isEven = (number) => {
  if (number % 2) return false;
  return true;
};

const playEven = (name) => {
  const numOfPlays = 3;

  for (let i = 0; i < numOfPlays; i += 1) {
    const curNum = random(100);

    console.log(`Question: ${curNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(curNum) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playEven;
