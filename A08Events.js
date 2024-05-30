
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


// Removing Event Listener

let btn5 = document.querySelector("#btn5");

let event1 = () => {
    console.log("Click -- event1");
}
let event2 = () => {
    console.log("Click -- event2");
}
let event3 = () => {
    console.log("Click -- event3");
}

btn5.addEventListener("click", event1);
btn5.addEventListener("click", event2);
btn5.addEventListener("click", event3);

btn5.removeEventListener("click", event2);


// Question to chnage the mode of the screen
let modebtn = document.querySelector("#modebtn");
let mode = "light";
let clickToChangeMode = () =>{
    let body = document.querySelector("body");
    if(mode === "light"){
        body.style.backgroundColor = "Black";
        mode = "dark";
    }else if (mode === "dark"){
        body.style.backgroundColor = "White";
        mode = "light";
    }
}
modebtn.addEventListener("click", clickToChangeMode)


// Question to chnage the mode of the screen by css class
let modebtn2 = document.querySelector("#modebtn2");
let body = document.querySelector("body");
let currmode = "light";

modebtn2.addEventListener("click", () =>{
    if(currmode === "light"){
        console.log(currmode);
        body.classList.add("dark")
        body.classList.remove("light");
        currmode = "dark";
    }else if (currmode === "dark"){
        console.log(currmode);
        body.classList.add("light")
        body.classList.remove("dark");
        currmode = "light";
    }
})
