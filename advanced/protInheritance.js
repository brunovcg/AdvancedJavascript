function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

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
