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
  