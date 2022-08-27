let map = {};

var isHappy = function (n) {
  let array = n.toString().split("");

  let quadrado = array
    .map((item) => Number(item) ** 2)
    .reduce((a, b) => a + b, 0);

  if (quadrado == 1) {
    return true;
  } else if (map[quadrado]) {
    return false;
  } else {
    map[quadrado] = true;
    return isHappy(quadrado);
  }
};

console.log("fim=>", isHappy(13));
