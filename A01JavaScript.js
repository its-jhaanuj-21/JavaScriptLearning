// Printing in JS

console.log("Hello World")
console.log("I Love JS")

//---------------------------------------------------------------------

//  Variables

name = "Anuj"     // string value
console.log(name)

name = "Anuja"   // Changing the value of variable 
console.log(name)

age = 24        // numeral : int
console.log(age)

price = 12.7    // numeral : float
console.log(price)

x = null //  absent : value is known but for now it is empty
console.log(x)

y = undefined  // value is unknown 
console.log(y)

isFollow1 = true;     // boolean 
console.log(isFollow1)

isFollow2 = false;    // boolean
console.log(isFollow2)

//--------------------------------------------------------------------

// Rules for varible naming : 
// 1. Variables are case sensitive : 
FullName = "Anuj Kumar Jha"
console.log(FullName)
Fullname = "Anuja Kumari"
console.log(Fullname)

// 2. only letter, digits, underscore(_) or $ is allowed (not even space)
// valids : 
FullName = "Annu Kumari"
_FullName = "hsgdjg"
$FullName = "kjhij"
Full_Name = "jhgug"
Full$Name = "jhgug"
FullName123 = "hjgjhg"

// 3. Only a letter, underscore (_) or $ should be 1st character

// 4. Reserved Words cannot be variable names.
    // const = "anuj"  // throw error
    // console = 1322  // throw error


fullName = "Anuj Jha"  // Camel Case : Right way to declare variable / Function name
full_name = "ANuj"  // Snake CAse
FullName = " Anuj "  // Pascal Case : generally used to declare class names 

// full-name = "ANuj"  // Kabab Case : not allowed in JS


// not valids: 
// 123Fullname   = "kuhkjh"    // variable name should not start from digit 
// Full Name = "jdbhfjh"       // Variable name should not contains spaces 



//---------------------------------------------------------------------


// let, const , var 

/*
    var : Variable can be re-declared & updated. A global scope variable
    
    let : Variable cannot be re-declared but can be updated. A block scope varibale

    const : Variable cannot be re-declared or updated. A block scope variable

    Note : In ES6 (Ecma Script 6 (introduced in 2015)) we use only let and const to declare a variable
*/


// Using var keyword
var age = 10 
var age = 20
var age = 30
console.log(age)  // last declared and updated age will print


// Using let keyword
let age2 = 10
// let age2 = 20     // not allowed throw an error 
age2 = 20
age2 = 30
console.log(age2)  // last updated age2 will print


// Using const keyword
const PI = 3.14 
// PI = 67        // throw error


//---------------------------------------------------------------------

/*
                                    DataTypes: 
                                        |
                        -----------------------------------
                        |                                 |
                    Primitive                        Non-primitive
                    1. number : int / float         1. Object : Arrays & Functions 
                    2. string
                    3. Boolean
                    4. undefined
                    5. null
                    6. BigInt 
                    7. symbol


*/

// Primitive Data Types : 

let num1 = 13
console.log("Integer Number: ",num1)
console.log("DataType of num1: "+typeof(num1))

let decimalNum = 34.87
console.log("Decimal Number: "+decimalNum)
console.log("DataType of decimalNum: "+typeof(decimalNum))

let naam = "Anujiya"
console.log("string data: "+ naam)
console.log("DataType of naam: "+typeof(naam))

let isMale = true
let isFemale = false
console.log("isMale Boolean Data: "+isMale)
console.log("isFemale Boolean Data: "+isFemale)
console.log("DataType of isMale: "+typeof(isMale))
console.log("DataType of isFemale: "+typeof(isFemale))

let VarName         
console.log(typeof(VarName)) // undefined data type : since varibale VarName is not been initialize

let abc = null
console.log(abc)
console.log(typeof(abc))   // Datatype of null is -> Object


let varBigInt = BigInt("123425")
console.log(varBigInt)     // 123425n
console.log(typeof varBigInt)  // bigint


let VarSymbol = Symbol("Hello!!!")
console.log(VarSymbol)
console.log(typeof VarSymbol)


/*
    Objects : 
       Collections of primitive data types 
       store data in [ Key : Value ] pair 
       objects are mainly defined by const keyword 

*/

const student = {
    fullName : "Anuja Kumari",
    age : 23,
    cgpa : 9.9,
    isPass : true,
};

console.log(student)
console.log(typeof student)  // object


/**
 * Accessing the values of Key: 
 *  1.   object.key
 *  2.   object ["key"]
 * 
 *  
 * */ 

console.log("Age of Student : "+student.age)
console.log("CGPA of Student : "+student.cgpa)

console.log("Name of Student : "+student["fullName"])
console.log("Is Student Pass : "+student["isPass"])


// Re-assigning the values of Key in object: 

student["age"] = 67
student.age = 89
student.age = student.age+1
student["age"] = student["age"] + 10
console.log("Age of Student : "+student.age)  // 100

// Note : We can't update contant (const) variable but we can update the key's value of const Object .



// Note : When we add something in string all will Automatically become string: 

// "123" + 4   ==>   '1234'
// "ABCD" + 6y ==>   'ABCD6y'
