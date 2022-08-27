function isPalindrome(word) {
  for (let i = 0; i <= word.length / 2 - 1; i++) {
    let before = word[i];
    let after = word[word.length - 1 - i];

    console.log(before, after);

    if (before !== after) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("abxba"));

var longestPalindrome = function (s) {
  let max = 1;

  for (let i = 0; i < s.length; i++) {
    for (let y = i + 1; y < s.length; y++) {
      let myString = s.substring(i, y + 1);

      console.log(myString);

      if (isPalindrome(myString)) {
        max = Math.max(max, myString.length);
      }
    }
  }

  return max;
};
