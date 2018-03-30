import { random } from 'lodash';
import go from '..';

const formMathStr = () => {
  const operand1 = random(20);
  const operand2 = random(20);

  const variants = [
    {
      question: `${operand1} + ${operand2}`,
      rightAnswer: operand1 + operand2,
    },
    {
      question: `${operand1} * ${operand2}`,
      rightAnswer: operand1 * operand2,
    },
    {
      question: `${operand1} - ${operand2}`,
      rightAnswer: operand1 - operand2,
    },
  ];

  return variants[random(2)];
};

const playCalc = () => {
  const mathStr = formMathStr();

  const { question, rightAnswer } = mathStr;

  return {
    question,
    rightAnswer: rightAnswer.toString(),
  };
};

export default () => go('What is the result of the expression?', playCalc);
