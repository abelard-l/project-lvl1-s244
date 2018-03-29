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

const playEven = () => {
  console.log('');
};

export { welcome, askName, showName, isEven };
