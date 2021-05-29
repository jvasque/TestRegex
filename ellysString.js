//tomar largo de string
//sacar vocales
//determinar largo nuevamente dará el resultado de cantidad de letras

const vowelsMatch = /[AEIOU]/g;
let lengthString = 0;
let consonants = 0;
let steps = 0;

/**
 *
 * @param {string} string  string to evaluate
 * @return amount consonants in the string
 */

const amountConsonants = (string) => {
  consonants = string.replace(vowelsMatch, "").length;
};

/**
 *
 *
 * @return true if string is balanced
 */
const isBalanced = () => {
  let result = lengthString - consonants;
  if (result === consonants) return true;
  return false;
};

const EllysBalancedStrings = (string, index = 0) => {
  upperCaseString = string.toUpperCase();
  lengthString = upperCaseString.length;
  if (lengthString > 98 || lengthString < 2)
    return "The string must contain between 2 and 100 characters";
  if (lengthString % 2 !== 0)
    return "The string must contain an even number of characters.";
  amountConsonants(string);
    if (isBalanced()) return steps
    return 1
};

module.exports = EllysBalancedStrings;
