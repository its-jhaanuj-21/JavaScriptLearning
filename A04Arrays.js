// Arrays : store same type of information

let marks = [89, 98, 78, 90, 89];
console.log("Arrays: ", marks);

// Print length of arrays
console.log("Length of Array: ", marks.length);

let heroes = ["Iron-Man", "Thor", "Hulk", "Spider-Man", "Ant-Man"];

console.log("Arrays of heroes: ", heroes);


// Type of Array :  -->   object 
console.log("Data Type of Array : ", typeof heroes);

// INDICES of Arrays: 
console.log("Arrays Values at diffrent Indices: ");
console.log("At [0]", heroes[0]);
console.log("At [1]", heroes[1]);
console.log("At [2]", heroes[2]);
console.log("At [3]", heroes[3]);
console.log("At [4]", heroes[4]);

// Accessing index that doesn't exist: 
console.log("Accessing index that doesn't exist:");
console.log("At [5]", heroes[5]); // undefined


// Changing the value at some index: 
// Since Arrays are mutable in JS but not string
heroes[4] = "Captain America";
console.log(heroes);


console.log("\nPrinting Arrays by for loop")
// Looping in Arrays: 
// Iterables ->  strings / objects / arrays
// by for loop 
for(let index = 0; index<heroes.length; index++){
    console.log(heroes[index]);
}


console.log("\nPrinting arrays by for-of loop")
// Also used : for in loop / for of loop 
// By for-of loop : 
for(let hero of heroes){
    console.log(hero.toUpperCase());
}


// Question : Find avg of marks in arrays: [85, 97, 44, 37, 76, 60]
let marks2 = [85, 97, 44, 37, 76, 60];
let Sum =  0;
for(let mark of marks2){
    Sum += mark;
}
console.log(`Avg Marks: ${Sum/marks2.length}` )



/**
 *  Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]  All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
 * 
 */

let price = [250, 645, 300, 900, 50];
for(let i=0; i<price.length; i++) {
    let offer = price[i]*0.1;
    price[i] -= offer;
}
console.log(price);


let i = 0;
let price2 = [250, 645, 300, 900, 50];
for(let val of price2){
    let offer = val/10;
    price2[i] -= offer;
    console.log(price2[i]);
    i++; 
}

// Arrays Methods: 
console.log("----------Arrays Method--------");

// Push()   : to add something at the end of arrays: change in original Arrays
let food = ["Google", "Microsoft", "Facebook", "Apple"];
console.log("Before Push(): ");
console.log(food);
food.push("Cisco", "Accenture");
console.log("After Push(): ");
console.log(food);

// pop()  : delete from end in original array & return 
console.log("");
console.log("Before pop(): ");
console.log(food);

let deletedItem = food.pop();
console.log("After pop(): ");
console.log(food);
console.log("Popped Item: ", deletedItem);

// toString() : converts array to string 
console.log("toString()")
console.log(food.toString())

// conact() : concat and return new array: 
let marvel_heroes = ["Thor", "Spider-Man", "Iron-Man"];
let dc_heroes = ["Super-Man", "Bat-Man"];
let indian_heroes = ["Shaktiman", "Krrish"]
let heroes2 = marvel_heroes.concat(dc_heroes, indian_heroes);
console.log("After .concat():")
console.log(heroes2)

// unshift() : Add at start of array 
console.log("Array Before unshift():")
console.log(marvel_heroes)
marvel_heroes.unshift("Ant-Man");
console.log("Array After unshift():")
console.log(marvel_heroes)

// shift() : delete form start & return 
console.log("Array Before shift():")
console.log(marvel_heroes)
let shift_val = marvel_heroes.shift();
console.log("Array After shift():")
console.log(marvel_heroes)
console.log("shifted value : ", shift_val);

// slice() : return a piece of the array
console.log("Slice: ")
let numArray = [1,2,3,4,5,6,7,8,9];
let slicedArray1 = numArray.slice(2, 6)
console.log(slicedArray1);
 console.log(numArray.slice(4))

// splice() : change original array (add, remove, replace)
console.log("Splice: ")
let numArray2 = [1,2, 3, 4, 5, 6]
numArray2.splice(3) // delete from 3 to end 
console.log(numArray2) 

let numArray3 = [1,2,3,4,5,6,7,8,9];
numArray3.splice(2, 3) // delete 3 values strating from index 2
console.log(numArray3) 

let numArray4 = [1,2,3,4,5,6,7,8,9]
numArray4.splice(2,4,  101, 102, 103, 104, 105)  // delete 4 values from 2 and add as many as values at between vacant space
console.log(numArray4)

// it can also be in different way: 
// Add Element
let numbArr = [1,2,3,4];
numbArr.splice(2, 0, 2.1, 2.2, 2.5, 2.6, 2.9 )
console.log(numbArr)

// Delete Element
numbArr.splice(7, 1)
console.log(numbArr)

// replace element 
numbArr.splice(7, 1, 10)
console.log(numbArr)


//----------------------------------------------------------------------------

// Question 1 : Create an array  
let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(comp)

comp.shift()
console.log(comp)

comp.splice(0,1)
console.log(comp)

comp.splice(0,1, "Ola")
console.log(comp)

comp.push("Amazon")
console.log(comp)








