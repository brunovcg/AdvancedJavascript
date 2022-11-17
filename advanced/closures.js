let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;

    console.log(a, b, c);
  }
  inner();
}
outer();

function outer3() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer3();
outer3();

console.log("------- CLOSURES ------");
//! Closure is the combination of a function bundled together with references to it surrounding states MDN

//! In JS whe we return a function from anotehr function, we are effectively returning a combination of the function  definition along with the function scope chain,
//! this would let the function definition have an associated persitente memory which could hold on to live data between executions, the combination of the functions and its scopes is closure
// ! Inner function has access to variables in outer function scope even after outer execution finished
function outer2() {
  let counter = 0;
  function inner2() {
    counter++;
    console.log(counter);
  }
  return inner2;
}
const fn = outer2();
fn();
fn();

// * Exemple

console.log("--------------Exemple Cache with num squared------------");

function squared(num) {
  return num * num;
}

function memoizedSquare() {
  let cache = {};
  return (num) => {
    if (num in cache) {
      console.log("Returning from cache");
      return cache[num];
    } else {
      console.log("Computing Square");
      const result = squared(num);
      cache[num] = result;
      return result;
    }
  };
}

const memoSquare = memoizedSquare();

console.log(memoSquare(2));
console.log(memoSquare(2));



console.log("--------------Exemple Cache generic------------");


function memoize(callback) {
  let cache = {};
  return (...args) => {
    const key = args.toString()
    if (key in cache) {
      console.log("Returning from cache");
      return cache[key];
    } else {
      console.log("Computing result");
      const result = callback(...args);
      cache[key] = result;
      return result;
    }
  };
}

function add(a,b){return a+b}

const memo = memoize(add);

console.log(memo(2,4));
console.log(memo(2,4));