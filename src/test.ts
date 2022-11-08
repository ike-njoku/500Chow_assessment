import {maximumPossibleValue} from './index';

describe("maximumPossibleValue", () => {
  it ('returns Undefined Behaviour it  results in an operation the compiler cannot execute', () => {
    expect(maximumPossibleValue(4, 0)).toBe("Undefined Behaviour");
  });

  it ("returns Invalid parameters if one or both parameters are less than 105 or greater thah 105 ", () => {
    expect(maximumPossibleValue(106, 4)).toBe("Invalid parameters");
  });

  /**
   * Commented out because it won't let the tests run because of type checking
   */
  // it ("should return return Invali parameters if one or both inputs are invalid", () => {
  //   expect(maximumPossibleValue(undefined, 4)).toBe("Invalid parameters");
  //   expect(maximumPossibleValue(undefined, undefined)).toBe("Invalid parameters");
  // });

  it ("should return Integer Overflow if the result is out of range", () => {
    expect(maximumPossibleValue(105, 0.00000000000000002)).toBe("Integer Overflow");
  });

  it ("should return an integer that is a valid answer if all other test cases pass", () => {
    expect(maximumPossibleValue(5, 5)).toBe(25);
  })


});