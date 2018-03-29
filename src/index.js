import readlineSync from 'readline-sync';
import { random } from 'lodash';

const welcome = (even = false) => {
  console.log('Welcome to the Brain Games');
  if (even) console.log('Answer "yes" if number even otherwise answer "no".');
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

const showName = (name) => {
  console.log(`Hello, ${name}!`);
};

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

export { welcome, askName, showName, playEven };
