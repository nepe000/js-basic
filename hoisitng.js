//?hoisting
//?two phases = memory allocation and execution

//?undefined and why example
// console.log(x);
// var x = 1;
// console.log(x);

//?using function dont work if u use a variable to keep the function
// greet();
// function greet() {
//   console.log("hiii");
// }

//?local scope ma hunxw not global
// console.log(x);
// let x = 10;

// console.log(y);
// let y = 5;

//?temporal dead zone
// console.log(x);
// x = 10;
//? until the initialization of const and let the zone of code before that is tdz

//?closer is a function bundled with its lexical scope
// function outer() {
//   var x = 1;
//   return function inner() {
//     console.log(x);
//   };
// }

// const func = outer();
// func();

//? closure references the variable not the value
// function outer() {
//   var x = 1;
//   return function inner() {
//     console.log(x);
//   };
//   x = 100;
//   inner();
// }
// outer();

//? exampleeeee!!!
// function factor(n) {
//   function mult(a) {
//     console.log(n * a);
//   }

//   mult(5);
// }
// factor(3);

//?example
// function add(n) {
//   return function number(a) {
//     console.log(n + a);
//   };
// }
// const double = add(3);
// double(5);

//? closure is used to private a variable //
//? create a function account: make balance : cash withdraw deposit : check balance

// function counter() {
//   let count = 2;
//   return {
//     increment: () => {
//       count++;
//       console.log(count);
//     },
//     decrement: () => {
//       count--;
//     },
//     getCount: () => {
//       console.log(count);
//     },
//   };
// }
// const count = counter();
// count.increment();
// count.increment()
// count.getCount()

// function account() {
//   let balance = 0000;

//   return {
//     withdraw: (a) => {
//       if (balance < a) {
//         console.log("Insufficient Funds");
//       } else {
//         balance = balance - a;

//         console.log(`newBalance: ${balance}`);
//       }
//     },
//     deposit: (b) => {
//       balance = balance + b;
//       console.log(`newBalance: ${balance}`);
//     },
//     currBalance: () => {
//       console.log(balance);
//       console.log(`newBalance: ${balance}`);
//     },
//   };
// }
// const total = account();
// total.withdraw(1000);
// total.deposit(200);
// total.currBalance();
