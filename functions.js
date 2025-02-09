// function greet() {
//   console.log("hello world");
// }
// greet();

// const greet = function (name) {
//   console.log("hello" + name);
// };
// greet("John");

//? return function/
// const add = function (a, b) {
//   return a + b;
// };
// const result = add(5, 20);
// console.log(result);

//?arrow function
// const add = (a, b) => a + b;
// const result = add(5, 10);
// console.log(result);

//?long arrow method with return

// const add = (a, b) => {
//   return a + b;
// };
// const result = add(10, 10);
// console.log(result);

//?arrow function example
// const isMinor = (age) => {
//   return age > 18 ? "you are not minor" : "you are minor";
// };
// const result = isMinor(20);
// console.log(result);

//?IIFE

// (function () {
//   console.log("life");
// })();

//?????scope/////

//?function scope
// const helloworld = () => {
//   var x = 1;
//   let y = 2;
//   const z = 3;
//   console.log(x, y, z);
// };
// console.log(z);

//? lexical scope
// a child block can access the parent block element but not the parent bottom to up approach
// const lexicalScope = () => {
//   const x = "outer";

//   const inner = () => {
//     const y = "inner";
//     console.log(x);
//   };
//   inner();
// };
// lexicalScope();
