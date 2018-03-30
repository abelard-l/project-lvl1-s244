import readlineSync from 'readline-sync';

const welcome = (secondMsg = false) => {
  console.log('Welcome to the Brain Games');
  if (secondMsg) console.log(secondMsg);
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

const showName = (name) => {
  console.log(`Hello, ${name}!`);
};

const go = (secondMsg, game, numOfPlays) => {
  welcome(secondMsg);
  const name = askName();
  showName(name);

  if (game) {
    for (let i = 0; i < numOfPlays; i += 1) {
      const { question, rightAnswer } = game();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === rightAnswer) {
        console.log('Correct');
      } else {
        console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${name}!`);
        return;
      }
    }

    console.log(`Congratulations, ${name}!`);
  }
};

export default go;
