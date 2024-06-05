/**
 * fetch API 
 *  The Fetch API provides an interface for fetching (sending/receiving) resources.
 * 
 * Its uses Request and Response object 
 * 
 * The fetch() method is used to fetch a resource (data).
 * 
 * let promise = fetch(url, [option])
 *                      |
 *                      |--> GET request
 * 
 * 
 * AJAX is Asynchronous JS a& XML
 * 
 * JSON is JavaScript Object Notation
 * 
 * json() method: return a second promise that resolve with the result of parsing the reponse body text as JSON. (Input is JSON, Output is JS Object)
 * 
 * 
 */

const factPara = document.querySelector("#fact")
const factBtn = document.querySelector("#btn")


const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);

const getFacts = async () =>{
    console.log("Getting Data.....")
    let response = await fetch(URL);
    console.log(response);   // return JSON fromat 
    // console.log(response.status);
    let data = await response.json();  // making it readable
    console.log(data);
    console.log(data[0].text);

    factPara.innerText = data[0].text;
}


factBtn.addEventListener("click", ()=>{
    getFacts();
})


//by promise chaining: 
// function getFacts2(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data[2].text;
//     })
// }

// factBtn.addEventListener("click", ()=>{
//     getFacts2();
// })