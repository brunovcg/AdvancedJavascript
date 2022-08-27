var isIsomorphic = function (s, t) {
  let objS = {};

  let objT = {};

  for (let i = 0; i < s.length; i++) {
    if (!objS[s[i]]) {
      objS[s[i]] = t[i];
    } else {
      if (objS[s[i]] !== t[i]) {
        return false;
      }
    }

    if (!objT[t[i]]) {
      objT[t[i]] = s[i];
    } else {
      if (objT[t[i]] !== s[i]) {
        return false;
      }
    }
  }

  return true;
};
