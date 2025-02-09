//? like inheritance

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.greet = function () {
//   console.log("wassuppp");
// };
// var person1 = new Person("John", 20);
// console.log(person1.__proto__ === Person.prototype);
// person1.greet();
// console.log(person1.name);

//?class ==>

// class Person {
//   walk() {
//     console.log("person walks");
//   }
// }
// class John extends Person {
//   speak() {
//     console.log("john speaks");
//   }
// }
// const person1 = new John();
// person1.speak();
// person1.walk();

//?person class extends to student and teacher
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
class Student extends Person {
  constructor(name, age, address, rollNo, marks) {
    super(name, age, address);
    this.rollNo = rollNo;
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, address, faculty, id) {
    super(name, age, address);
    this.faculty = faculty;
    this.id = id;
  }
}
const person1 = new Student("John", 19, "Shankhamul", 14, 122);
console.log(person1);
const person2 = new Teacher("Mr.T", 50, "Gwarko", "Architecture", 007);
console.log(person2);
