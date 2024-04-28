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

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function printVal(val) {
  // val -> value at each index in arr
  console.log(val);
});

arr.forEach((val) => {
  console.log(val);
});

let arr2 = ["Delhi", "Mumbai", "Pune", "Patna"];

arr2.forEach((val) => {
  console.log(val);
});

arr2.forEach((val) => {
  console.log(val.toUpperCase());
});

// There are 3 parameters of forEach loop function :
// (value/items , index, arr)

arr2.forEach((items, index, arr) => {
  console.log(index, items, arr);
});

// Question : For a given array of numbers, print the square of each value using forEach Loop.

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr3.forEach((val) => {
  // console.log(val*val)
  console.log(val ** 2);
});

// Another way to use forEach:
let cities = ["Mumbai", "Delhi", "Kolkata", "Pune", "Patna"];

let printCities = (city) => {
  console.log(city.toUpperCase());
};

cities.forEach(printCities);

//-----------------------------------------------------------------

// Methods of Arrays :

/*
  Map method(): 
    It is similar to forEach but it creates a new Array with the results of some operation. The value its callback return are used to form new Array

    arr.map(callBackFun(value, index, array))

*/

let nums = [1, 2, 3, 4];

nums.map((val) => {
  console.log(val ** 3); // Normally Printing array
});

let newNums = nums.map((val) => {
  return val ** 4; // Returnig new values got soted in new Array
});

console.log(newNums);

//----------------------------------------------------------------

/**
 * Filter :
 *  creates a new array of element that give true for condition/filter
 */

let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// returning even nums

let evenNums = nums2.filter((val)=>{
  return val%2===0;
})

console.log(evenNums)

// printing num > 4

let newArr = nums2.filter((val)=>{
  return val>4;
});

console.log(newArr)

/**
 * 
 * reduce : 
 *  perform some operation & reduces the array to a single value. It return that single value.
 * 
 */

let nums3 = [1,2,3,4];
const output = nums3.reduce((prev, curr)=>{
  return curr+prev;
})
console.log(output)

const greatest = nums3.reduce((prev, curr)=>{
  return prev>curr ? prev :  curr
})
console.log(greatest)


// --------------------------------------------------------

// Ques: we are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks = [87, 93, 64, 99, 87, 94, 99];

let gt_90 = marks.filter((val)=>{
  return val>90;
})

console.log(gt_90);


// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number: ");
let newarr = [];
for(let i=1; i<=n; i++){
  newarr[i-1] = i;
}
console.log(newarr);

let sum2 = newarr.reduce((prev, curr)=>{
  return prev+curr;
})
console.log("Sum: ",sum2)

let product = newarr.reduce((prev, curr)=>{
  return prev*curr;
})
console.log("Factorial :",product);