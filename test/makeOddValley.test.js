const { makeValley, buildTheValley } = require('../src/makeValley');

function oddValleyIntegrationTest() {
  let oddValley;
  beforeEach(() => {
    oddValley = [1, 2, 3, 4, 5, 6, 7];
  });
  describe('Join the wings into a valley', () => {
    test('should be the two wings with the same length', () => {
      const sizeOfTheLeftWing = buildTheValley(oddValley).left.length;
      const sizeOfTheRightWing = buildTheValley(oddValley).right.length;
      expect(sizeOfTheLeftWing).toBe(sizeOfTheRightWing);
    });
    test('should be a flat bottom element in the valley', () => {
      const sizeOfTheValley = makeValley(oddValley).length;
      const sumOfTheWingsAndTheBottom =
        buildTheValley(oddValley).left.length + 1 + buildTheValley(oddValley).right.length;
      expect(sizeOfTheValley).toBe(sumOfTheWingsAndTheBottom);
    });
    test('should containing the left wing joined with bottom of the valley and the right wing', () => {
      const expectedOddValley = [7, 5, 3, 1, 2, 4, 6];
      expect(makeValley(oddValley)).toEqual(expectedOddValley);
    });
  });
}
function oddValleyUnitTest() {
  let oddValley;
  beforeEach(() => {
    oddValley = [1, 2, 3, 4, 5, 6, 7];
  });
  describe('Create the left wing', () => {
    test('should contains decreasing numbers in an alternate way', () => {
      const expectedWing = [7, 5, 3];
      expect(buildTheValley(oddValley).left).toEqual(expectedWing);
    });
  });
  describe('Create the right wing', () => {
    test('should contains increasing numbers in an alternate way', () => {
      const expectedWing = [2, 4, 6];
      expect(buildTheValley(oddValley).right).toEqual(expectedWing);
    });
  });
  describe('Create the bottom of the valley', () => {
    test('should contains the lowest number', () => {
      const expectedBottomOfTheValley = [1];
      expect(buildTheValley(oddValley).bottom).toEqual(expectedBottomOfTheValley);
    });
  });
}
function valleyForOddLenght() {
  describe('for an ODD array', () => {
    oddValleyUnitTest();
    oddValleyIntegrationTest();
  });
}

describe('How green is my valley...', () => {
  valleyForOddLenght();
});
