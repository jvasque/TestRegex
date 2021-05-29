//tomar largo de string
//sacar vocales
//determinar largo nuevamente dará el resultado de cantidad de letras

const vowelsMatch = /[AEIOU]/g;
let lengthString = 0;
let consonants = 0;

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

const EllysBalancedStrings = (string) => {};
