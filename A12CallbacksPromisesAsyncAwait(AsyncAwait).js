function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200)
        }, 2000)
    })
}

async function getWeatherData(){
    await api();  // 1st
    await api();  // 2nd
    await api();  // 3rd
}


//--------------------------------------------------------

function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data: ", dataId);
            resolve("success");
        }, 2000);
    });
};

async function getAllData(){
    console.log("Getting data 1........");
    await getData(1);
    console.log("Getting data 2........");
    await getData(2);
    console.log("Getting data 3........");
    await getData(3);
    console.log("Getting data 4........");
    await getData(4);
}

//-------------------------------------------------------

/*  IIFE : Immediately invoked function expression
    -----------------------------------------------
    IIFE ia a function that is called immediately as soon as it is defined 

*/

(async function (){
    console.log("Getting data 1........");
    await getData(1);
    console.log("Getting data 2........");
    await getData(2);
    console.log("Getting data 3........");
    await getData(3);
    console.log("Getting data 4........");
    await getData(4);
})();
