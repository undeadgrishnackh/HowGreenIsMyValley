const isAnArray = (numbers) => Array.isArray(numbers);

const isAnInteger = (element) => Number.isInteger(element) === true;

const areAtLeastTwoElements = (numbers) => numbers.length > 1;

const areAllIntegers = (numbers) => numbers.every(isAnInteger);

const validInput = (numbers) => isAnArray(numbers) && areAtLeastTwoElements(numbers) && areAllIntegers(numbers);

const NumbersSortedDesc = (numbers) => numbers.sort().reverse();

const NumbersSortedAsc = (numbers) => numbers.sort();

const alternateNumbers = (value, index) => (index % 2 === 0 ? value : undefined);

const createTheLeftWing = (numbers) => NumbersSortedDesc(numbers).filter(alternateNumbers);

const createTheRightWing = (numbers) => NumbersSortedAsc(numbers).filter(alternateNumbers);

const extractTheBottomOfTheValley = (numbers) => (numbers.length % 2 !== 0 ? [NumbersSortedDesc(numbers).pop()] : []);

const assemblyTheValley = (valley) => [...valley.left, ...valley.bottom, ...valley.right];

// !! Exported Methods -------------------------------------------------------------------------------------------------
const buildTheValley = (numbers) => {
  const bottomOfTheValley = extractTheBottomOfTheValley(numbers);
  const leftWingOfTheValley = createTheLeftWing(numbers);
  const rightWingOfTheValley = createTheRightWing(numbers);
  return {
    left: leftWingOfTheValley,
    bottom: bottomOfTheValley,
    right: rightWingOfTheValley,
  };
};

const makeValley = (numbers) => {
  if (!validInput(numbers)) return 'ERROR';

  const valley = buildTheValley(numbers);
  return assemblyTheValley(valley);
};

module.exports = { makeValley, buildTheValley };
