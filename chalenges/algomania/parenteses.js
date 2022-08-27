var isValid = function (s) {

  let last = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] ==="(" || s[i] === "[" || s[i] === "{") {
      last.push(s[i]);
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (
        last[last.length-1] + s[i] === "()" ||
        last[last.length-1]  + s[i] === "[]" ||
        last[last.length-1]  + s[i] === "{}"
      ) {
        last.pop()
      } else {
        return false}
    }
  }
  if (last.length > 0) {
    return false;
  }

  return true;
};



console.log(isValid("([)]"))
console.log(isValid("{[]}"))



var isValid2 = function(s) {

  const stack = [];
  const chars = {
      '}': '{',
      ')': '(',
      ']': '['
  };
  
  for (const ch of s) {
      if (ch in chars) {
          if (stack.pop() != chars[ch]) {
              return false;
          }
      } else {
          stack.push(ch);
      };
  };
  

  return stack.length == 0 ? true : false;
};