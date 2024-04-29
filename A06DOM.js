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



// selecting elements by QuerySelector: 
// select anything => id, class, tag

let firstEl = document.querySelector("p"); // 1st  p
console.dir(firstEl);

let allEL = document.querySelectorAll("P");
console.log(allEL);   // return NodeList => list of all nodes 

let allClass = document.querySelectorAll(".heading")
console.dir(allClass)

let idEl = document.querySelector("#btn");
console.dir(idEl);


//------------------------------------------------------------
// Properties of element : 
    // can set and get the values of element by these properties 

let elem1 = document.querySelector("#btn");
console.dir(elem1.tagName)   // tagName

let elem2 = document.getElementById("heading");
console.dir(elem2.innerText)  // innerText

let divEl = document.querySelector("div");
console.dir(divEl.innerText) 


console.dir(divEl.innerHTML)  // innerHTML

divEl.innerText = "ABCD";
divEl.innerHTML = "<div> Inner Div </div>";

let heading1 = document.querySelector("h1");
console.dir(heading1.innerText)
heading1.innerText = "New Heading"
console.dir(heading1.innerText)
heading1.innerHTML = "<i> New Heading </i>"


let h2 = document.querySelector("h2");
console.dir(h2.innerText); // it will not print coz h2 is hidden 
console.dir(h2.innerHTML)
console.dir(h2.textContent)  // it will show hidden text as well 




