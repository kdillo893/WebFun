/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

  let sTotal = 0;
  //null/empty/undefined
  if (!s || s.length == 0) {
    return sTotal;
  }

  s.toUpperCase();
  let lastChar = '\0';
  //porting my c solution to javascript:
  for (let index = 0; index < s.length; index++) {
    let toAdd = 0;

    if (s[index] == 'I') {
      toAdd = 1;
    } else if (s[index] == 'V') {
      toAdd = 5;
      if (lastChar == 'I') {
        toAdd = 3;
      }
    } else if (s[index] == 'X') {
      toAdd = 10;
      if (lastChar == 'I') {
        toAdd = 8;
      }
    } else if (s[index] == 'L') {
      toAdd = 50;
      if (lastChar == 'X') {
        toAdd = 30;
      }
    } else if (s[index] == 'C') {
      toAdd = 100;
      if (lastChar == 'X') {
        toAdd = 80;
      }
    } else if (s[index] == 'D') {
      toAdd = 500;
      if (lastChar == 'C') {
        toAdd = 300;
      }
    } else if (s[index] == 'M') {
      toAdd = 1000;
      if (lastChar == 'C') {
        toAdd = 800;
      }
    }

    sTotal += toAdd;
    lastChar = s[index];
  }

  //alternate solutions use less if 

  return sTotal;

}

/**
 * Convert a string containing roman numerals to a number.
 *  This references a couple other solutions on leetcode which completed using
 *  a dictionary or map to keep identities of each letter.
 *
 * @param {string} s
 * @return {number}
 */
var romanToIntV2 = function (s) {

  let sTotal = 0;
  //null/empty/undefined
  if (!s || s.length == 0) {
    return sTotal;
  }

  s.toUpperCase();

  // this solution uses maps for key-value instead of branches of if conditions.d
  const romanNumeralMap = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  //porting my c solution to javascript:
  for (let index = 0; index < s.length; index++) {
    let current = romanNumeralMap[s[index]];
    let next = index >= s.length - 1 ? 0 : romanNumeralMap[s[index + 1]];

    if (next > current) {
      sTotal -= current;
    } else {
      sTotal += current;
    }

  }

  return sTotal;
}
