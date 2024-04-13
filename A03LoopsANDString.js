/**
 *  Loops   
 *      for loop 
 *      while loop
 *      do while
 *      for of
 *      for in
 * 
 * 
 * 
 * 
 */


// For loop : 

// for(let i=1; i<=10; i++){
//     console.log("AKJ")
// }

// Sum of 1 to 5
// let sum  = 0
// for(let i = 1; i<=5; i++){
//     sum = sum + i
// }
// console.log(sum)




// sum of n natural number : take n as input 

// let sum2 = 0
// let num = prompt("Enter number upto which sum you want : ")
// for(let i = 1; i<=num; i++){
//     sum2+=i
// }
// console.log("Sum of",num,"natural number : ", sum2)



//--------------------------------------------------------

// while loop 
let count = 1
while(count<=10){
    console.log("Hello");
    count++;
}

//---------------------------------------------------------

// do while
let count2 = 1;
do{
    console.log("AKJ")
    count2++
}while(count2<=10);


//----------------------------------------------------------

// for of loop : use to iterate strings and array 

let str = "Anuja Kumari Jha"
size = 0
for(let i of str){
    console.log("i =",i)
    size++
}
console.log("Size of string :", size)

//---------------------------------------------------------

// for in loop : use to iterate objects and array 

const objects = {
    name : "Anuja", 
    rollNo : 41,
    cgpa : 9.9,
    isPass : true,
};

for (let key in objects){
    console.log(key," => ",objects[key])
}


//======================================================================================================


/**
 * 
 * String : 
 *  String is a sequence of character used to represent text
 * 
 * 
 * 
 * 
 * 
 */


// Creation of String : 
let str1 = "Apna College"

// Printing String 
console.log(str1)

//Obtaning length of string : 
console.log("Legth of String",str1.length)

//Obtaining String indices
console.log(str1[0])
console.log(str1[1])
console.log(str1[2])
console.log(str1[3])
console.log(str1[4])
console.log(str1[5])


//-----------------------------------------------------------------


// -------------- Template Literals in JS----------------------

/**
 * Template Literals : 
 *      * A way to have embedded expression in string 
 *      * It is created using backtick / backquote ` `
 *      * Ex:  ` This is template literal  `
 *      * we can insert expression in string by the placeholder with $ and {} 
 *      * Ex: ` string text ${expression} string text `
 *      * This insertion of expression in string using placeholder is known as STRING INTERPOLATION
 *      * It print expression also in the from of string while in normal printing through "" / '' expression or numbers are printed in numeral formate 
 * 
 */

// Through Template literals: 
console.log(`The sum of 5 and 6 is ${5+6}`)

// Normal way: 
console.log('The sum of 5 and 6 is',5+6)


// type of template literal is also String itself
let strtemp = `Hii Anuuuu!!`
console.log(typeof strtemp)




// Printing Object through Template Literal : 
const product = {
    item : "pen",
    price : 70,
}
//normal way
console.log("The price of", product.item,"is",product.price)

console.log(`The price of ${product.item} is ${product.price}`)


//-------------------ESCAPE Character :-----------------------------
/**
 *          \b 	This character is used to give a backspace
            \f 	This character is used for form feed
            \n 	This character is used to give a new Line
            \r 	This character is used for carriage Return
            \t 	This character is used for horizontal Tabulator
            \v 	This character is used for vertical Tabulator
 
 * */ 

console.log("Anuj\nKumar\nJha")

console.log("Anuj\tKumar\tJha")

let escstr = "ANUJ\tJHA"
console.log(escstr.length)  // \t => these two character '\' 't' will treat as a single character  



// --------------------- String Method --------------------------

// NOTE 1 :  Strings in JS are immutable => means we cannot apply changes in original String : all the manipulation that are done by any method will return a new string insted of manipulating the original string.

// NOte 2 : All the method name is in camelCase in JS


//  1.   .toUpperCase() => return string in uppercase formate 

let string = "Anuj Jha"
string.toUpperCase()   // doing manipulation 
console.log(string)    // Still it will print : Anuj Jha | insted of ANUJ JHA | coz its not doing any changes on original string
// So we have to store the manipulated data in any variable 
let upperString = string.toUpperCase()
console.log(upperString)

// Or we can directly print the manipulation insted of storing in new variable 
console.log(string.toUpperCase())

// or we can also change the original string by replacing the original string by newly manipulated string 
let mstr = "anuj"
mstr = mstr.toUpperCase()
console.log(mstr)



// 2.  .toLowerCase()  =>  return string in the lowercase formate
console.log(string.toLowerCase())

let lowerString = string.toLowerCase();
console.log(lowerString)



// 3.  .trim() =>  remove whitespaces from front and end of any string  
let trmStr = "    Anuj Kumar Jha     "
console.log(trmStr)
console.log(trmStr.trim())



// 4.  .slice(start , end)  => return part of string | start is inclusive | end is exclusive
let slString = "Lovely Professional University"
console.log(slString.slice(0))   // Anuj Kumar Jha | if we only give start, from there it will return to last 
console.log(slString.slice(4))

console.log(slString.slice(3, 8))  // 3 is inclusive and 8 is exclusive 




// 5.   str1.concat(str2)  => joins / concatinate two strings
let cStr1 = "Hello"
let cStr2 = "World"
let concatinaedString = cStr1.concat(cStr2)
console.log(concatinaedString)

let concatinaedString2 = cStr1 +" "+ cStr2 
console.log(concatinaedString2)

let concatinaedString3 = cStr1 + cStr2 + " from Anuj " 
console.log(concatinaedString3)



// 6.   .replace(serachValue, newValue)  ==> repalce certain letter 
let rstr = "Anuj"
console.log(rstr.replace("j", "ja"))

let rstr2 = "Helololo"
console.log(rstr2.replace("lo","lp"))  // replace only 1st occuring if we have multiple same searchValue



// 7.  .replaceAll()
console.log(rstr2.replaceAll("lo", "lp"))   // All "lo"  will get replaed by "lp"



// 8.  .charAt(index) ==> return the Character from string at particular index
let chStr = "ANUJIYA"
console.log(chStr.charAt(0))
console.log(chStr.charAt(1))
console.log(chStr.charAt(2))
console.log(chStr.charAt(3))


// Note  : Since string is immutable so we can't replace any index of string by simply accessing it.  Insted of that we can use .replace() method to manipulate the string

let mmstr = "ILoveJs";
mmstr[0] = 'S'     // this will not do anything to original string 
// mmstr.charAt(0) = 'A'    // invalid | Throw error
console.log(mmstr)

mmstr = mmstr.replace("I", "Anu")
console.log(mmstr)




/**
 * 
 * Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

eg: user name = "shradhakhapra", username should be "@shradhakhapra13"
 * 
 * 
 * 
 */

let fullName = prompt("Enter Your Full Name: ")
let username = "@"+fullName+fullName.length
console.log(username)



