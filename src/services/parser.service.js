const { alternatingCaps } = require('../utils/alternatingCaps');

const isIntegerString = (s) => /^-?\d+$/.test(s);
const isAlphaString = (s) => /^[A-Za-z]+$/.test(s);

exports.parseData = (arr) => {
  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];

  let sum = 0;
  const lettersInOrder = [];

  for (const raw of arr) {
    const s = String(raw);

    if (isIntegerString(s)) {
      const n = parseInt(s, 10);
      (Math.abs(n) % 2 === 0 ? even_numbers : odd_numbers).push(s);
      sum += n;
    } else if (isAlphaString(s)) {
      alphabets.push(s.toUpperCase());
      // collect letters for concat_string (per character)
      for (const ch of s) lettersInOrder.push(ch);
    } else {
      special_characters.push(s);
      // also collect letters inside mixed strings? SPEC examples treat mixed as specials
      // so we DO NOT pull letters out of mixed tokens.
    }
  }

  // reverse all collected alphabetic characters (order of appearance), then alternating caps
  const reversedLetters = lettersInOrder.reverse().join('');
  const concat_string = alternatingCaps(reversedLetters);

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: String(sum),
    concat_string
  };
};
