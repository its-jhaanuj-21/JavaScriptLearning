// Question 1: 
// const Pen = {
//     name : "Parker Jotter Standard CT Ball Pen (Black)",
//     rating : 4.0,
//     isDealOfTheDay : true,
//     offer : 5,
//     price : 270,
// };

// console.log(Pen)


// ---------------------------------------------------

// Question 2: 

// const profile = {
//     username: "shradhakhapra",
//     isFollow : true,
//     posts : 195,
//     followers : 569000,
//     following : 4,
//     name : "Shradha Khapra",
//     threadId : "@shradhakhapra",
//     profileType : "Entrepreneur",
//     bio : "Apna College | Ex-Microsoft, DRDO\nTo educate someone is the highest privilege <3"
// };

// console.log(profile)
// console.log(typeof profile)   // object
// console.log(typeof profile.followers)  // numbers


//-------------------------------------------------------------------------------

// Ques 3: 

// let num = prompt("Enter a number")
// if(num % 5 === 0){
//     console.log("Multiple of 5")
// }else{
//     console.log("Not a nultiple of 5")
// }

//-------------------------------------------------------------------------------
// Ques 4

// let marks =  prompt("Enter the number" )
// let grade
// if(marks >=80 && marks <=100){
//     grade = "A"
// }
// else if(marks >=70 &&  marks <= 79){
//     grade = "B"
// }
// else if(marks >=60 && marks <= 69){
//     grade ="C"
// }
// else if(marks >=50 && marks <=59){
//     grade = "D"
// }
// else if(marks >=0 && marks <= 49){
//     grade = "F"
// }
// console.log(grade)

//-------------------------------------------------------------------------------
// Question 5: Priting Even number from 0 to 100

// for(let i = 0; i<=100; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }


//---------------------------------

// Question 6: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct number

let gameNum = 60
let userNum = prompt("Guess the number: ")

while(gameNum != userNum){
    userNum = prompt("You guessed wrong number!! Guess again !!")
}
console.log("Congrats !! You entered right number!!!")

// Note : When we entered anything in prompt it always returns string value