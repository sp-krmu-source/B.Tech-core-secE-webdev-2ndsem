// 1. synchronous code will execute first then asynchronous code.
// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },5000)
// setTimeout(()=>{
//     console.log("c");
// },3000)
// setTimeout(()=>{
//     console.log("d")
// },2000)
// console.log("e");

// output
// a
// e
// d
// c
// b


// function sample(callback){
//     console.log("sample")
//     callback()
// }
// function demo(){
//     console.log("demo")
// }
// sample(demo)

//callback hell: to perform multiple async logic in out code we have to take the functions nestedly.
// Disadvantages: 
// 1. Hard to debug
// 2. code readability is bad
// 3. Hard to manage the codes 
// setTimeout(()=>{
//     console.log("a");
//     setTimeout(()=>{
//         console.log("b");
//         setTimeout(()=>{
//             console.log("c");
//             setTimeout(()=>{
//                 console.log("d");
//                 setTimeout(()=>{
//                     console.log("e");
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


var a=10;
console.log(a);
function demo(){
    let b=20;
    console.log(b);
}
demo();