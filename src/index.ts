
export const maximumPossibleValue = (a: number, b: number): number | string => {
  if (a == undefined || b == undefined) return 'Invalid parameters.';
  if (Math.abs(a) > 105 || Math.abs(b) > 105) return "Invalid parameters";
  if (b == 0) return "Undefined Behaviour";

  const sum = a + b;
  const product = a * b;
  const difference = a - b;
  const division = a / b;
  const maxValue = Math.max(sum, product, difference, division);
  if (Math.abs(maxValue) > 2147483647) return "Integer Overflow";
  return maxValue;
};

/**
 * Test cases
 */
console.log(`Input: 4, 0. Output: ${maximumPossibleValue(4, 0)}`);
console.log(`Input: 5, -5. Output: ${maximumPossibleValue(5, -5)}`);
console.log(`Input: 5, 5. Output: ${maximumPossibleValue(5, 5)}`);
console.log(`Input: 106, 104. Output: ${maximumPossibleValue(106, 104)}`);
/**
 * Commented out because type checking
 */
// console.log(`Input: undefined, 7. Output: ${maximumPossibleValue(undefined, 7)}`);
console.log(`Input: 105, 0.00000000000000002. Output: ${maximumPossibleValue(105, 0.00000000000000002)}`);




