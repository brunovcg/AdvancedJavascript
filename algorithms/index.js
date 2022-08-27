const fibo = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
};

function fac(n) {
  if (!n) {
    return 1;
  }
  return n * fac(n - 1);
}

function fac2(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function prime(n) {
  let sqr = Math.sqrt(n);
  for (let i = 2; i <= sqr; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

function isPowerOfTwo2(n) {
  for (let i = 0; i <= n; i++) {
    if (2 ** i === n) {
      return true;
    }
    if (2 ** i > n) {
      return false;
    }
  }

  return false;
}

function isPowerOfTwoBit(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBit(8));
