/**
 * 
 * OPERATORS : 
 *      Arithmetic Oprator : 
 *              1. + , - , * , /
 *              2. Modulus
 *              3. Exponentiation
 *              4. Increment
 *              5. Decrement
 * 
 *      Assignment operator : 
 *              1. =   
 *              2. +=  
 *              3. -=
 *              4. *=
 *              5. %=
 *              6. **= 
 *
 *      Comparison Opeartor : 
 *              1. Equal to                 ==
 *              2. Not Equal to             !=
 *              3. Equal to & type          ===
 *              4. Not Equal to & type      !==
 *              5. Greater than             >
 *              6. Greater than & Equal to  >=
 *              7. Less than                <
 *              8. Less than & Equal to     <=
 * 
 *      Logical Opeartor :
 *              1. AND  &&
 *              2. OR   ||
 *              3. NOT  !
 *
 * 
 * 
 */


// Arithmetic Opeartor : 

// Binary arithmetic opeartor  => works on two operand 

let n1 = 10
let n2 = 4

console.log("n1 + n2 = ", n1+n2)
console.log("n1 + n2 = "+n1+n2)  // 104 : string 
console.log("n1 - n2 = ", n1-n2)
console.log("n1 * n2 = ", n1*n2)
console.log("n1 / n2 = ", n1/n2)

console.log("n1 % n2 = ", n1%n2)
console.log("n1 ** n2 = ", n1**n2)  // exponential 

let sum = n1+n2     // n1 & n2 => operand | + => operator   |  sum = n1+n2  => Expression  |  " = " => Assignmet Operator
let diff = n1-n2
let product = n1*n2
let quotient = n1/n2
let Remainder = n1%n2
let exponential = n1**n2

console.log("Summation : ", sum)
console.log("Difference : ", diff)
console.log("Product : ", product)
console.log("Quotient : ", quotient)
console.log("Remainder / Modulo : ", Remainder)
console.log("Exponent : ", exponential)


//------------------------------------------------------------

// unary arithmetic operator 
// 1. Increment  =>  PostIncrement (a++)   |  PreIncrement (++a)
// 2. Decrement =>   PostDecrement (a--)   |  PreDecrement (--a)


let numb1 = 7
let numb2 = 10

++numb1 
console.log(numb1)

--numb2 
console.log(numb2)

//-------------------------------------------------------------

// Assignment Operator 

let number1 = 2
let number2 = 3

number1 += 4     //  number1 = number1 + 4
console.log(number1)   // 6

number2 -= 4     //  number2 = number2 - 4
console.log(number2)   // -1

number1 *= 4     //  number1 = number1 * 4
console.log(number1)   // 24

number1 /= 3     // number1 = number1 / 3
console.log(number1)   // 8

number2 *= 4      //  number2 = number2 * 4
console.log(number2)   // -4

///..............  


//------------------------------------------------------------------

// Comparison Opeartor : 

let x1 = 5
let x2 = 5
let x3 = 6
let x4 = '5'

console.log("5 == 5 : ", x1==x2)  // true
console.log("5 == 6 : ",x1==x3)  // false

console.log("5 == '5' : ",x1==x4)  // true
// check String and number if both same then true 
// it first try to convert both the operand into same datatype then compares
// so x4 ='5' get converted into 5 then compared x1 = 5 :  5==5 => true

//=============================================================================================

console.log("5 != 5 : ",x1!=x2) // fasle
console.log("5 != 6 : ",x1!=x3) // true
console.log("5 != '5' : ",x1!=x4) // false

//=============================================================================================

console.log("5 === 5 : ",x1===x2) //true   : its checks both values and type also
console.log("5 === 6 : ",x1===x3) // fasle

console.log("5 === '5' : ",x1===x4) // fasle 
// It checks both,  value and datatype of variables so, x1=5 (number)  &  x4='5' (string) are not equals   

//=============================================================================================

console.log("5 !== 5 : ",x1!==x2) // false 
console.log("5 !== 6 : ",x1!==x3) // true
console.log("5 !== '5' : ",x1!==x4) // true

//=============================================================================================

console.log("5 < 6 : ",x1<x3) // true
console.log("5 <= 5 : ",x1<=x2) // true

console.log("5 <= '5' : ",x1<=x4) // true     '5' <= 5  : true


// -------------------------------------------------------------------------------------------

// Logical Operator

let a1 = 5
let a2 = 6
let a3 = 4

console.log("5<6 && 6>4 : ",a1<a2 && a2>a3) //true
console.log("5>6 && 6>4 : ",a1>a2 && a2>a3) //false


console.log("5>6 || 6>4 : ",a1>a2 || a2>a3) //true

console.log("!(5>6) : ",!(5>6)) //true


//---------------------------------------------------------------------------------------------


/**
 * Conditional Statement :
 *      1. if statement 
 *      2. if-else statement
 *      3. if - else if  statement 
 * 
 * 
 * 
 * 
 */


// if statement
let age1 = 15;
if(age1 >= 18) {
    console.log("You can Vote")
}
if(age1<18){
    console.log("You can't Vote")
}




// if else statement

let age2 = 20
if(age2>=18){
    console.log("You can Vote")
}else{
    console.log("You Can't vote")
}


let n = 10
if(n % 2 === 0){
    console.log(n, "is EVEN")
}else{
    console.log(n, "is ODD")
}


// let mode = "dark"
let mode = "light"
let color
if(mode === "dark"){
    color = "black"
}else{
    color = "white"
}
console.log(color)



// if else if

let age3 = 13
if(age3<=12){
    console.log("Child")
}
else if(age3<18 && age3>12){
    console.log("Teenager")
} 
else if(age3>=18 && age3<50){
    console.log("Adult")
}
else {
    console.log("OLD")
}


// Note : If we have only one line of code then we can write it without {} curly braces | but this is not a industry standard.
// Ex: 
name = "Anuja"
if(name === "Anuja") console.log(name, "Jha")

//--------------------------------------------------------

// Ternary Operator 

let umr = 18
let result = umr >= 18    ?     "Adult" :       "NOT Adult"
//             TRUE          This will store     This will not store 
console.log(result)


let umr2 = 10
umr2 >=18 ? console.log("YOU CAN VOTE")  :  console.log("YOU CANNOT VOTE")
// FALSE         // NOT PRINT                    // PRINT


// ------------------------------------------------------------

// switch - case 

let day = 1
switch(day){
    case 1: 
        console.log("Monday")
        break;
    case 2: 
        console.log("Tuesday")
        break;
    case 3: 
        console.log("Wednesday")
        break;
    case 4: 
        console.log("Thursday")
        break;
    case 5: 
        console.log("Friday")
        break;
    case 6: 
        console.log("Saturday")
        break;
    case 7: 
        console.log("Sunday")
        break;
    default:
        console.log("Not A valid day")
}

















