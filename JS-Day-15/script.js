// setTimeout(() => {
//     console.log("1")
//     setTimeout(() => {
//         console.log("1")
//         setTimeout(() => {
//             console.log("1")
//             setTimeout(() => {
//                 console.log("1")
//                 setTimeout(() => {
//                     console.log("1")
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// function pro(num) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(num);
//             res();
//         }, 1000)
//     })
// }
// pro(1)
//     .then(() => pro(2))
//     .then(() => pro(3))
//     .then(() => pro(4))
//     .then(() => pro(5))





// const pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise resolved");
//     },3000)
// })


// function getData(){
//     pro.then(x=>console.log(x));
//     console.log("after promise");
// }
// getData();


// why async and await exist?
// 1. to avoid promise chaining
// 2. To execute the async code properly witrhout confusion
// 3. To handle the promise in a better way



// 1. Async function always return a promise. 

// async function getData(){
//   return "async intro";
// }
// console.log(getData())


// 1. await always used inside async function
// 2. await uses infront of the promise

// Await: it pauses the async function untill the promise returns a result

// const pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Payment Done");
//     },5000)
// })

// async function getData(){
//     const res = await pro;
//     console.log(res);
//     console.log("Dashboard Access")

// }
// getData()


// Fetch API

// fetch('https://jsonplaceholder.typicode.com/users') it returns a promise, if the link is correct then promise resolved
//     .then(response => response.json()). // .json() converts to Javascript object and also return a promise.
//     .then(json => console.log(json)) 

// Using asyc and await 
// async function getData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let json = await response.json()
//         console.log(json)
//     } catch (err) {
//         console.error(err);
//     }
// }
// getData()


// Fetch weather data

async function getData(city) {

    const API_Key = "af9f63c59a649f27d602b96a43d0bd14";
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
        let data = await response.json();
        console.log(data);

        console.log(city);
        console.log(" City Temp: ", data.main.temp);
        console.log("Humidity",data.main.humidity)

       
    } catch (err) {
        console.error(err);
    }
}
getData("Gurugram")

