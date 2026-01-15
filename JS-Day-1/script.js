// Types of function

// 1. regular function

// function sample(){
//     return "sample";
// }
// console.log(sample());

// 2. arrow function
// It doesn't need return statement and it follows asynchronous operation

// const sample=(a,b)=>a+b;
// console.log(sample(5,10))

// const sample=(a,b)=>{
//     return a+b;
// }
// console.log(sample(5,10))

// 3. callback function
// if we pass a function as an argument inside another function
// callback=demo()
function sample(callback){
    console.log("sample");
    callback();
}
function demo(){
    console.log("demo");
}
sample(demo);

