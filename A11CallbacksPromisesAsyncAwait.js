/**
 * Promise: 
 *  Promise is for "eventual" completion of task. It is an object in JS.
 *  It is a solution to callback Hell.
 * 
 *  Three state -> pending, fullfilled, rejected
 * 
 */

let promise = new Promise((resolve, reject) =>{
    console.log("I'm a promise")
    // reject("Error")
})