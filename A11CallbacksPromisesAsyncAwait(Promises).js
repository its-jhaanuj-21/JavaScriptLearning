/**
 * Promise:
 *  Promise is for "eventual" completion of task. It is an object in JS.
 *  It is a solution to callback Hell.
 *
 *  Three state -> pending, fullfilled, rejected
 *
 *  Pending : the result is undefined
 *  Resolved : the result is a value (fulfilled) ->  resolve(result)
 *  Rejected : the result is an error object    ->   reject(error)
 *
 * Generally Promises provided by API and we use it
 *
 *
 *
 *
 */

// let promise = new Promise((resolve, reject) => {
//   console.log("I'm a promise");
// });

// let promise2 = new Promise((resolve, reject) => {
//   console.log("I'm Promise 2");
//   resolve("Successful");
// });

// let promise3 = new Promise((resolve, reject) => {
//   console.log("I'm Promise 3");
//   reject("Some Error Occurred");
// });

//--------------------------------------------------

// Creating a fulfilled promise

// let getData = (dataId, getNextdata) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data: ", dataId);
//       resolve("Success");
//       if (getNextdata) {
//         getNextdata();
//       }
//     }, 2000);
//   });
// };

// creating a rejected Promise

// let getData2 = (dataId, getNextdata) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   console.log("data: ", dataId);
//       reject("Some Error Occured!!!");
//       if (getNextdata) {
//         getNextdata();
//       }
//     }, 2000);
//   });
// };

// /-------------------------------------------------------------------

// using promises

/**
 * promise.than ((res) => {.......})    [if fulfilled]
 *
 * promise.catch((err) => {.......})    [if reject]
 */

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("This is Promise");
//     resolve("Success!!");
//     // reject("Some Error has occured!!");
//   });
// };

// let pro = getPromise();

// pro.then((res) => {
//   console.log("Promise id fulfilled!!  |  ", res);
// });

// pro.catch((res) => {
//   console.log("Promise is rejected!!  |", res);
// });

// /-------------------------------------------------------------------

// Promise Chaining

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 1");
//       resolve("Success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2");
//       resolve("Success");
//     }, 4000);
//   });
// }

// console.log("Fetching Data 1........");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("Fetching Data 2........");
// let p2 = asyncFunc2();
// p1.then((res) => {
//   console.log(res);
// });


// these both are happening simultaneously

//----------------------------------------------------------
// Now we will do promise chaining

// function asyncFunc3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 3");
//       resolve("Success");
//     }, 5000);
//   });
// }
// function asyncFunc4() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 4");
//       resolve("Success");
//     }, 5000);
//   });
// }

// console.log("Fetching data 3...........");
// let p3 = asyncFunc3();
// p3.then((res)=>{
//     console.log(res);
//     console.log("Fetching data 4...........");
//     let p4 = asyncFunc4();
//     p4.then((res)=>{
//         console.log(res);
//     })
// })

// we can shorten the chaining withou creating a varible

// console.log("Fetching data 3....");
// asyncFunc3().then((res) => {
//   console.log(res);
//   console.log("Fetching data 4....");
//   asyncFunc4().then((res) => {
//     console.log(res);
//   });
// });


// /--------------------------------------------------------------
// Another and actual way to promise chaining:

function getData3(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data: ", dataId);
      resolve("Sucess");
    }, 6000);
  });
}

getData3(1000)
  .then((res) => {
    return getData3(2000);
  })
  .then((res) => {
    return getData3(3000);
  })
  .then((res) => {
    return getData3(4000);
  })
  .then((res) => {
    console.log(res);
  });
