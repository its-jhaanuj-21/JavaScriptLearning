/**
 * Promise:
 *  Promise is for "eventual" completion of task. It is an object in JS.
 *  It is a solution to callback Hell.
 *
 *  Three state -> pending, fullfilled, rejected3
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

let promise = new Promise((resolve, reject) => {
  console.log("I'm a promise");
});

let promise2 = new Promise((resolve, reject) => {
  console.log("I'm Promise 2");
  resolve("Successful");
});

let promise3 = new Promise((resolve, reject) => {
  console.log("I'm Promise 3");
  reject("Some Error Occurred");
});

//--------------------------------------------------

// Creating a fulfilled promise

let getData = (dataId, getNextdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data: ", dataId);
      resolve("Success");
      if (getNextdata) {
        getNextdata();
      }
    }, 5000);
  });
};

// creating a rejected Promise

let getData2 = (dataId, getNextdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   console.log("data: ", dataId);
      reject("Some Error Occured!!!");
      if (getNextdata) {
        getNextdata();
      }
    }, 5000);
  });
};


// /-------------------------------------------------------------------

// using promises 

/**
 * promise.than ((res) => {.......})    [if fulfilled]
 * 
 * promise.catch((err) => {.......})    [if reject]
 */

const getPromise = () =>{
    return new Promise((resolve, reject) => {
        console.log("This is Promise");
        resolve("Success!!");
        // reject("Some Error has occured!!");
    });
};

let pro = getPromise();

pro.then((res)=>{
    console.log("Promise id fulfilled!!  |  ", res);
});

pro.catch((res)=>{
    console.log("Promise is rejected!!  |", res );
})

