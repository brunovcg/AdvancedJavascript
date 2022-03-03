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

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer();
outer();

console.log("------- CLOSURES ------");

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
