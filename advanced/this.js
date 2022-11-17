console.log("-------THIS ------");

// 1 regra - Implicite Binding
const person = {
  name: "Bruno",
  sayMyName: function () {
    console.log(`my name is ${this.name}`);
  },
  // arrow function não aceita this
  sayMyName2: () => {
    console.log(`my name 2 is ${this?.name}`);
  },
};

person.sayMyName();
person.sayMyName2();

//2 regra - Explicite Bindind

function sayMyName3() {
  console.log(`my name is ${this?.name}`);
}

sayMyName3.call(person);

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
sayMyName3();

/*
Prioridades

1 - New binding
2 - Explicit Binding
3 - Implicit Binding
4- Default binding

*/