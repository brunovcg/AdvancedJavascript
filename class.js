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
  