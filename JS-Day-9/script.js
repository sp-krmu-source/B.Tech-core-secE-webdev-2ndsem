// const para = document.querySelectorAll("p");
// console.log(para);

// para.forEach((para,index)=>{
//     if(index%2===0){
//         para.style.color="blue"
//     }
//     else{
//         para.style.color="green"
//     }
// })
// para[para.length-1].style.fontWeight="bold"

// textcontent
// innertext
// innerhtml

// const demo=document.getElementById("demo");
// demo.innerHTML="<b>This is a new para</b>"
// console.log(demo.innerHTML)

// create a new element and append 
const newpara = document.createElement("p");
newpara.textContent = "This is a dynamically created paragraph";
console.log(newpara)

document.getElementById("content").append(newpara);


// const image=document.createElement("img");
// image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")

// image.setAttribute("alt","K.R Mangalam");

// document.getElementById("gallery").append(image);

setInterval(() => {
    let date = new Date()
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("digi-clock").textContent = hour + ":" + min + ":" + second;

}, 1000)



