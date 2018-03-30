import readlineSync from 'readline-sync';

const welcome = (even = false, calc = false) => {
  console.log('Welcome to the Brain Games');
  if (even) console.log('Answer "yes" if number even otherwise answer "no".');
  if (calc) console.log('What is the result of the expression?');
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

const showName = (name) => {
  console.log(`Hello, ${name}!`);
};

export { welcome, askName, showName };
