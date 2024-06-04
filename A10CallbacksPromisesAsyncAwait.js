/**
Synchronous : 
Synchronous means the code runs in a particular sequence of insrtuctions given in the program. Each instruction waits for the previous instruction to complete its execution.
 

Asynchronous: 
    Due to synchoronous programming, sometimes imp instruction get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block them flow.


 */

// Synchrounous : 
console.log(1);
console.log(2);
console.log(3);
console.log(4);

// Asynchronous : 
let hello = () =>{
    console.log("Hello");
}
setTimeout(hello, 3000) // timeout  : 3 sec = 3000 milli sec

//--------------------------------------------------------------

setTimeout(() => {
    console.log("Hello2")
}, 4000);

//--------------------------------------------------------------

console.log("ONE");
console.log("TWO");
setTimeout(()=>{
    console.log("Counting Number....")
}, 5000)
console.log("THREE");
console.log("FOUR");


//--------------------------------------------------------------

/*

Callbacks: A callback is a function passed as an arguments to another function.

*/

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b)
}

calculator(2,3, (a,b)=>{
    console.log(a+b)
});

//--------------------------------------------------------------

/**
 * Callback Hell : 
 *  Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
 * 
 * This style of programming becomes difficult to understand and manage.
 */

function getData(dataId ){
    console.log("Data : ",dataId);
}

function getData2(dataId){
    setTimeout(()=>{
        console.log("Data: ",dataId)
    }, 3000)
}

// here we will get all the three data after 6 sec:
getData2(1)
getData2(2)
getData2(3)

// here data will featch sequentially one after another: 

function getData3(dataId, getNextData){
    setTimeout(()=>{
        console.log("Data: ", dataId);
        if(getNextData){
            getNextData();
        }
    },3000)
}

getData3(100, ()=>{
    getData3(200, ()=>{
        getData3(300, ()=>{     // CALLBACK HELL
            getData3(400)
        })
    })
})

