let sentence = "I am a comma separated sentence";
console.log(sentence.length);
let words = sentence.split(" ");
console.log(words); //[ 'I', 'am', 'a', 'comma', 'separated', 'sentence' ]

let words2 = sentence.split("a");
console.log(words2) //[ 'I ', 'm ', ' comm', ' sep', 'r', 'ted sentence' ]

// find out the occurance of "r" in the given text
let str = "tu meri me tera me tera tu meri";
console.log(str.split("r").length - 1);


// regular function
// function demo(){
//     console.log("demo")
// }
// demo()

// function sample(){
//     console.log("sample")
// }
// sample()


// callback function: we can pass a function as an argument inside another function

// callback=demo()
function sample(callback) {
    console.log("sample")
    callback()
}
function demo() {
    console.log("demo")
}
sample(demo)

//Arrow function

function demo3() {
    return "demo3";
}
console.log(demo3())

const demo2 = () => "demo2";
console.log(demo2())


//First class function
// 1. we can treat a variable as a function
// 2. we can pass a function as an argument inside another function
// 3. we can return a function from a function

// function test() {
//     return function test2(b) {
//         console.log("test2");
//         return function test3(a) {
//             console.log("test3")
//         }
//     }
// }
// test()()()
// let value = test()
// let value2=value(5)
// value2(20)

// 4. Higher order function

// Map, filter, reduce

//  6. Anonomous function: the function which doesn't have any. name
// setTimeout(()=>{

// },1000)

// 7. self invoking function(IIFE): to obtain data provacy and to call a function imidiately after the function scope.

// function classtest(){
//     console.log("classtest")
// }
// let a=10;
// function midterm(){
//     classtest();
// }
// midterm()





let test5 = (function(){
    return "sample5";
})()
console.log(test5)
