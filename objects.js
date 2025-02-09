//? create an object and keep a function in the then  call it

// const person = {
//   firstName: "john",
//   age: 30,
//   greet: function () {
//     console.log(` ${this.firstName} is ${this.age} years old`);
//   },
//};
// console.log(person.greet());
//?add a field / modify the value
// console.log(person);
// delete person.age;
// console.log(person);

//? using constructors
// not very necessary

//? make it unchangeable permanent change here no deletion / modification
// Object.freeze(person);

//? helps to modify but ( not delete or add )
// Object.seal(person)

//? practice question
// const car = {
//   model: 2024,
//   color: "red",
//   company: "ferrari",
//   inauguration: function () {
//     console.log(`the ${car.color} ${car.company} was built in ${car.model}`);
//   },
// };
// car.inauguration();
//! (.this) don't work with arrow function =>

// console.log(Object.keys(car)); //? keys of object shows [model , color....]
// console.log("model" in car); //? checks if the given thongs is in the object or not
// console.log(Object.entries(car));//? similar to keys but also shows value in array form

////? if there is value already in the object then it must be access using . else use "[] "
