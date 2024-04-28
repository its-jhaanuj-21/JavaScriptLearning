function sum(a, b) {
  return a + b;
}

(a = 8), (b = 9);

sum = sum(a, b);
console.log("Sum of", a, "and", b, "is", sum);
console.log(`Sum of ${a} and ${b} is ${sum}`); // template literals

//----------------------------------------------------------------

function greeting(name) {
  console.log("Helooz", name);
}
greeting();
greeting("Anuj");

//----------------------------------------------------------------

// Arrow Function: use for small piece of code

const arrowSum = (a, b) => {
  console.log(a + b);
};

const arrowMult = (a, b) => {
  return a * b;
};

console.log(arrowSum);
arrowSum(5, 10);

console.log(arrowMult(5, 8));

let helloFun = (name) => console.log("Hello!!", name);
helloFun("Anuj");

// ----------------------------------------------------

function countVolwels(str) {
  let count = 0;
  for (let s of str) {
    if (
      s === "a" ||
      s === "e" ||
      s === "i" ||
      s === "o" ||
      s === "u" ||
      s === "A" ||
      s === "E" ||
      s === "I" ||
      s === "O" ||
      s === "U"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVolwels("Abcdefghijklmnopqrstuvwxyz"));

let vowCount = (str) => {
  let count = 0;
  for (let s of str) {
    if (
      s === "a" ||
      s === "e" ||
      s === "i" ||
      s === "o" ||
      s === "u" ||
      s === "A" ||
      s === "E" ||
      s === "I" ||
      s === "O" ||
      s === "U"
    ) {
      count++;
    }
  }
  return count;
};

console.log(vowCount("AEIOUaeioulkjh"));


//----------------------------------------------------------------

/* 
forEach Loop in Arrays 
----------------------

arr.forEach( callBackFunction )

callBackFunction -> Here, it is a function to execute for each element in the array. 

A callback is a function passed as an argument to another function 

forEach is only used for arrays. 

forEach method is a HIGHER ORDER Function/Method (HOF):
  take another function as a parameter or return another function as output

*/

let arr = [1,2,3,4,5,6,7];

arr.forEach(function printVal(val){   // val -> value at each index in arr
  console.log(val)
})  

arr.forEach((val)=>{
  console.log(val);
})

let arr2 = ["Delhi", "Mumbai", "Pune", "Patna"];

arr2.forEach((val)=>{
  console.log(val)
})

arr2.forEach((val)=>{
  console.log(val.toUpperCase())
})
  
// There are 3 parameters of forEach loop function : 
// (value/items , index, arr)

arr2.forEach((items, index, arr)=>{
  console.log(index, items, arr)
})


// Question : For a given array of numbers, print the square of each value using forEach Loop.

let arr3 = [1,2,3,4,5,6,7,8,9];
