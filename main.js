// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;

//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// function outer (){
//     let counter = 0;
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer()
// outer()

// ----------- Closures

console.log("------- CLOSURES ------");

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
fn();
fn();

// ----------- CURRYING
console.log("------- CURRYING ------");

function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum(2,3,5))

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);

console.log(curriedSum(2)(3)(5));

console.log("--x--");

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);

console.log(add5);

// ------------------------------------------

console.log("-------THIS ------");

// 1 regra - Implicite Binding
const person = {
  name: "Bruno",
  sayMyName: function () {
    console.log(`my name is ${this.name}`);
  },
  // arrow function não aceita this
  sayMyName2: () => {
    console.log(`my name 2 is ${this.name}`);
  },
};

person.sayMyName();
person.sayMyName2();

//2 regra - Explicite Bindind

function sayMyName() {
  console.log(`my name is ${this.name}`);
}

sayMyName.call(person);

// 3 regra - New Binding

function Person(name) {
  // this = {}
  this.name = name;
}

const p1 = new Person("vieira");
const p2 = new Person("campos");

console.log(p1.name, p2.name);

// 4 regra - Default Binding
globalThis.name = "Superman!";
sayMyName();

/*
Prioridades

1 - New binding
2 - Explicit Binding
3 - Implicit Binding
4- Default binding

*/

// ------------------------ PROTOTYPE -------------------------------

console.log("------- PROTOTYPE ------");

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("Bruce", "Wayne");
const person2 = new Person("Clark", "Kent");

// person1.getFullName = function (){
//     return this.firstName + " " + this.lastName
// }

/* toda funcao e objeto tem um prototype que tem os metodos padroes, 
se colocar no prototype, todas as funcoes que extendem ela terão
*/

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName());

// vai dar erro:
// console.log(person2.getFullName())

// colocando no prototype, não da mais erro
console.log(person2.getFullName());

console.log("------- PROTOTYPE INHERITANCE  ------");

function SuperHero(fName, lName) {
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

SuperHero.prototype.fight = function () {
  console.log("fighting!");
};

let batman = new SuperHero("Bruce2", "Wayne2");

console.log(batman);

batman.fight();

console.log("--------- CLASS ---------");

class PersonClass {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  sayMyName() {
    return this.fName + " " + this.lName;
  }
}

const people1 = new PersonClass("Bruce", "Wayne");

console.log("using class=> ", people1.sayMyName());

class SuperHuman extends PersonClass {
  constructor(fName, lName) {
    super(fName, lName)
    this.isSuperHuman = true;
  }

  fightStrong(){
      console.log("STRONG!")
  }
}

const fifi = new SuperHuman("Xester", "Chain")

fifi.fightStrong()

console.log(fifi.fName)
