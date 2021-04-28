const { makeValley } = require('../src/makeValley');

describe('Guardians - Prevent bad input to go in', () => {
  it('should reject an INPUT that is NOT an array', () => {
    const invalidInput = '1234';
    expect(makeValley(invalidInput)).toEqual('ERROR');
  });
  it('should reject an array with NON integers elements', () => {
    const invalidElementInTheArray = ['1'];
    expect(makeValley(invalidElementInTheArray)).toEqual('ERROR');
  });
  it('should reject and array that contains less than TWO elements', () => {
    const tooShortArray = [1];
    expect(makeValley(tooShortArray)).toEqual('ERROR');
  });
  it('should accept an array of TWO integers as input', () => {
    const validDummyInput = [12, 12];
    const validDummyOutput = [12, 12];
    expect(makeValley(validDummyInput)).toEqual(validDummyOutput);
  });
});
