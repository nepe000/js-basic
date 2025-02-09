//? it is a object that holds value

//?syntax
// setTimeout(callback,interval,parameter)

//?example of settimeout using a parameter
// console.log("start");
// setTimeout(
//   (name, age) => {
//     console.log(name, age);
//   },
//   2000,
//   "john",
//   20
// );
// console.log("end");

//?delete/clear setTimeout
// console.log("start");
// const timerId = setTimeout(
//   (name, age) => {
//     console.log(name, age);
//   },
//   2000,
//   "john",
//   20
// );
// clearTimeout(timerId);
// console.log("end");

//?example of setInterval

// let x = 10;
// const timerId1 = setInterval(() => {
//   x--;
//   console.log(x);
//   if (x == 0) {
//     clearInterval(timerId1);
//   }
// }, 1000);

//?PROMISES
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("data fetching");
//     resolve("data loaded");
//     // reject("Data isn't loaded");
//   }, 2000);
// });

// promise
//   .then((data) => console.log("then:", data))
//   .catch((err) => console.log("error occurred:", err));

//?another example but now using id

// const fetchData = (id) => {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (id) {
//         resolve(`Data Loaded with id ${id}`);
//       } else {
//         reject("ID is required");
//       }
//     }, 2000)
//   );
// };

// fetchData() // Pass an ID here
//   .then((data) => console.log("then:", data))
//   .catch((err) => console.log("error:", err))
//   .finally(() => console.log("finally"));

//?TRY catch block
// const fetchData = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id) {
//         resolve(`Data Loaded with id ${id}`);
//       } else {
//         reject("ID is required");
//       }
//     }, 2000);
//   });
// };

// async function getData() {
//   try {
//     const response = await fetchData(1);
//     console.log(response);
//   } catch (error) {
//     console.log("err", err);
//   } finally {
//     console.log("finally");
//   }
// }
// getData();

const fetchData2 = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
};
const fetchData3 = async (id) => {
  const response3 = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  return response3.json();
};
const fetchData4 = async (id) => {
  const response4 = await fetch(
    `https://jsonplaceholder.typicode.com/comments/`
  );
  return response4.json();
};
async function getData() {
  try {
    // const promise1 =  fetchData(1)
    // const data = await fetchData3(3);
    const [response2, response3, response4] = await Promise.all([
      fetchData2(2),
      fetchData3(3),
      fetchData4(4),
    ]);
    // console.log(data);
    // console.log(data.id);
    // console.log(response2)
    // console.log(data);
    // console.log(data.id);
    console.log(response2);
    console.log(response3);
    console.log(response4);
  } catch (error) {
    console.log("err", error);
  }
}
getData();
