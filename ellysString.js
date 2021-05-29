//tomar largo de string
//sacar vocales
//determinar largo nuevamente dará el resultado de cantidad de letras

const abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const vowelsMatch = /[AEIOU]/g;
let lengthString = 0;
let consonants = 0;
let steps = 0;
let indexOf = -1;

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

/**
 *
 * @param {letter} string  receive a letter to find index in abc
 * found index of letter in abc
 */
const getIndexLetter = (letter) => {
  indexOf = abc.indexOf(letter);
};

//Alter string

const alterString = (string, index) => {
  getIndexLetter(string[index]);
  if (indexOf === 0) {
    string += abc[1];
  } else if (indexOf === 25){    
      string += abc[24];    
  }else{
      
  }
};

const balanceByconsonants = (string, indexOfconsonant) => {};

const balanceByVowels = (string, indexOfVowels) => {};

//the index is the position's letter in the string, if Elly send the string "HOLA"
//the letter "A" is the index 4

const EllysBalancedStrings = (string, index = -1, flag) => {
  upperCaseString = string.toUpperCase();
  lengthString = upperCaseString.length;
  if (lengthString > 98 || lengthString < 2)
    return "The string must contain between 2 and 100 characters";
  if (lengthString % 2 !== 0)
    return "The string must contain an even number of characters.";
  amountConsonants(string);
  if (index !== -1) {
    alterString(string, index - 1);
  }
  if (isBalanced()) return steps;
};

module.exports = EllysBalancedStrings;
