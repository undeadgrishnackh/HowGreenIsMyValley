const { makeValley } = require('../src/makeValley');

describe('Render the valley', () => {
  test.skip('should render the valley', () => {
    expect(makeValley([1, 2, 3, 4, 56, 6, 67, 7, 8, 7, 56, 123, 45, 5, 6])).toBe(true);
  });
});
