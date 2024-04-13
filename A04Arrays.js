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
heroes[4] = "Captain America";
console.log(heroes);




