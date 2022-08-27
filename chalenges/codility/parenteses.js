function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let array = S.split("");

  let obj = {
    "(": 0,
    ")": 0,
    "[": 0,
    "]": 0,
    "{": 0,
    "{": 0,
  };

  let test = () => {
    if (
      (obj[")"] - obj["("] === 1 ||
        (obj[")"] - obj["("]) % 2 !== 0 ||
        obj[")"] - obj["("] === 0) &&
      (obj["]"] - obj["["] === 1 ||
        (obj["]"] - obj["["]) % 2 !== 0 ||
        obj["]"] - obj["["] === 0) &&
      (obj["}"] - obj["{"] === 1 ||
        (obj["}"] - obj["{"]) % 2 !== 0 ||
        obj["}"] - obj["{"] === 0)
    ) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < S.length; i++) {
    obj[array[i]] = i;

    if (!test()) {
      return 0;
    }
  }

  return 1;
}
