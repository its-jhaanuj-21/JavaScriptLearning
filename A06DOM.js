/**
 * Window Object : 
 *  The window object represents an open window in a browser. It is browser's object (not JavaScript's) & it automatically created by browser.
 * 
 * It is a global object with lots of properties & method
 */


// window.console.log("Hello");
// window.alert("Press OK!!")


// Window (object) -> document (object/model of html) -> html

console.log(window);
console.log(window.document)
console.dir(window)

console.dir(document)

console.dir(document.body)

console.dir(document.head)


console.dir(document.body.childNodes[1])

// document.body.style.backgroundColor = "green"


// DOM Manipulation : 
// selecting element by ID
let heading = document.getElementById("heading")
console.log(heading)
console.dir(heading)  

//selecting element by class
let headings = document.getElementsByClassName("heading")
console.log(headings)  // return html collection 
console.dir(headings)  
// if class name is not available it will return empty array

//selecting elements by tag name
let paras = document.getElementsByTagName("p")
console.log(paras)

// selecting elements by 