const { makeValley, buildTheValleyComponents } = require('../src/makeValley');

function evenValleyIntegrationTest(evenValley) {
  describe('Join the wings into a valley', () => {
    test('should be the two wings with the same length', () => {
      const sizeOfTheLeftSide = buildTheValleyComponents(evenValley).left.length;
      const sizeOfTheRightSide = buildTheValleyComponents(evenValley).right.length;
      expect(sizeOfTheLeftSide).toBe(sizeOfTheRightSide);
    });
    test('should containing the left wing joined with the right wing', () => {
      const expectedValley = [6, 4, 2, 1, 3, 5];
      expect(makeValley(evenValley)).toEqual(expectedValley);
    });
  });
}
function evenValleyUnitTest(evenValley) {
  describe('Create the left wing', () => {
    test('should contains decreasing numbers in an alternate way', () => {
      const expectedLeftWing = [6, 4, 2];
      expect(buildTheValleyComponents(evenValley).left).toEqual(expectedLeftWing);
    });
  });
  describe('Create the right wing', () => {
    test('should contains increasing numbers in an alternate way', () => {
      const expectedRightWing = [1, 3, 5];
      expect(buildTheValleyComponents(evenValley).right).toEqual(expectedRightWing);
    });
  });
}
function valleyForEvenLenght() {
  describe('for an EVEN array', () => {
    const evenValley = [1, 5, 3, 6, 2, 4];
    evenValleyUnitTest(evenValley);
    evenValleyIntegrationTest(evenValley);
  });
}

describe('How green is my valley...', () => {
  valleyForEvenLenght();
});
