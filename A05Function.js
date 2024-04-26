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

// -------------------------------------------

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
