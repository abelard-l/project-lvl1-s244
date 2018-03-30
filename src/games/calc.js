import readlineSync from 'readline-sync';
import { random } from 'lodash';

const formMathStr = () => {
  const operand1 = random(20);
  const operand2 = random(20);

  const variants = [
    {
      result: operand1 + operand2,
      question: `${operand1} + ${operand2}`,
    },
    {
      result: operand1 * operand2,
      question: `${operand1} * ${operand2}`,
    },
    {
      result: operand1 - operand2,
      question: `${operand1} - ${operand2}`,
    },
  ];

  return variants[random(2)];
};

const playCalc = (name) => {
  const numOfPlays = 3;

  for (let i = 0; i < numOfPlays; i += 1) {
    const mathStr = formMathStr();
    const rightAnswer = mathStr.result;

    console.log(`Question: ${mathStr.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is a wrong answer the correct is ${rightAnswer}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playCalc;
