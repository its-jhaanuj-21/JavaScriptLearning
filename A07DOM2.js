// Accessing attributes of Tag / node 

let div = document.querySelector("div")
console.log(div);

let id = div.getAttribute("id")
console.log(id)

let name = div.getAttribute("name");
console.log(name)

//-------------------------------------------

let para = document.querySelector("p")
console.log(para);

let cls = para.getAttribute("class")
console.log(cls)

// setting the values of attribute : 

let cls2 = para.setAttribute("class", "newClass")
console.log(cls)

// -----------------------------------------------

// Style manipulation 

let div2 = document.querySelector("div");
console.log(div2.style)

div2.style.backgroundColor = "yellow";

div2.style.fontSize = "20px"

// div2.innerText = "Hello !!!"


// --------------------------------------------------

/// Insertion of element: 

let btn1 = document.createElement("button");
btn1.innerText = "Click Me:append!!"
console.log(btn1)

div.append(btn1)  // inside node at bottom 

let btn2 = document.createElement("button");
btn2.innerText = "Click Me: prepend!!"
div.prepend(btn2)  // inside node at top 

let btn3 = document.createElement("button");
btn3.innerText = "Click Me: before!!"
div.before(btn3)  // outside before node  

let btn4 = document.createElement("button");
btn4.innerText = "Click Me: after!!"
div.after(btn4)  // outside after node

//-----------------------------------------------------

// delete Elemet

btn1.remove()

