import _ from 'lodash';

const generateSumPairs = n => {
  const result = [];

  for (let i = 1; i < n; i++) {
    for (let j = n - i; j > 0; j--) {
      if (i + j === n) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

const generateRandomSumPair = n => {
  const digits = n.toString().length;
  const lower = parseInt(_.repeat('1', digits), 10);
  const upper = parseInt(_.repeat('9', digits), 10);

  return [_.random(lower, upper), _.random(lower, upper)];
};

export const numberAndSplits = () => {
  const randomNumber = _.random(1000, 9999);
  const allSumPairs = generateSumPairs(randomNumber);

  const randomIndex = _.random(0, allSumPairs.length - 1);
  const answers = [
    allSumPairs[randomIndex],
    generateRandomSumPair(randomNumber),
    generateRandomSumPair(randomNumber),
    generateRandomSumPair(randomNumber)
  ];

  return {
    number: randomNumber,
    answers: _.shuffle(answers)
  };
};
