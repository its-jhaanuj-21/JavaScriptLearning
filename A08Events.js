
// Event Handler
// We can create only one event handler., if we create multiple last one is functional 
// Inline event handler have less priority than external JS event handler 
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("Button was clicked by external Event Handler!!")
}

let div2 = document.querySelector("#Div2");
div2.onmouseover =() =>{
    console.log("Hovred inside div")
}


// Event object 

let btn3 = document.querySelector("#btn3");
btn3.onclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}


// Event Listeners 
// Can create multiple Event listeners for any event and all will executes 

let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
    console.log("Clicked by EventListener");
});

btn4.addEventListener("dblclick", () => {
    console.log("Double Clicked by EventListeners");
});

btn4.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

