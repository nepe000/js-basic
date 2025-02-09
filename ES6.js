//?...
// const arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];

// arr2 = [...arr2, ...arr1];
// console.log(arr2);

//?Destructuring

// const person = {
//   name: "John",
//   age: 10,
//   isAdult: false,
// };
//? ...rest baki bhako field laii others ma

// const { name, age, ...others } = person;
// console.log(name);

//? ... right side ma split operator
//? ... left side ma rest operator(value accumulate garxw)

// function add(...number){
//     let sum = 0;
//    sum = number.reduce((acc,val)=>{
//         acc += val;
//         sum=acc;
//         return acc;
// },0)
// console.log(sum)
// }
// add(1,2,3)

//?MAP ==> object
// const number = [1, 2, 3, 4];

// var map = new Map();
// map.set("name", "John");
// map.set("age", "10");
// map.set(number, "Map with array key");

// console.log(map);
// console.log(map.get(number));

//?SET ==> array

// var set = new Set();
// set.add("1");      //?only adds unique value
// set.add(1);
// set.add(1);

// console.log(set);

// var set = new Set([1, 2, 3, 4, 5, 5, 4]);
// console.log(set);

// const array = [1, 2, 3, 4, 5, 5, 4];
// const array2 = [...new Set(array)];
// console.log(array2);
