var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

var strStr2 = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
