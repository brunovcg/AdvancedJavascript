// console.log(x.charCodeAt(0))
// console.log(x.codePointAt(0))
// console.log(String.fromCharCode(x))

function getCode(code) {
  let numerify = String(Number(code) + 96);
  return String.fromCharCode(numerify);
}

var freqAlphabets = function (s) {
  let array = [];

  let payload = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      payload += s[i];
    } else {
      let arr = payload.split("");
      let twoLast = arr.splice(arr.length - 2, 2).join("");
      arr.forEach((item) => array.push(item));
      array.push(twoLast);
      payload = "";
    }
  }

  if (payload) {
    payload.split("").forEach((item) => array.push(item));
  }

  return array.map((item) => getCode(item)).join("");
};

// console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));
