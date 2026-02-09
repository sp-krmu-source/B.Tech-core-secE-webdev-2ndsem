document.getElementById("btn").addEventListener("click",()=>{
       // create h2 tag
    const subHead = document.createElement("h2").textContent="New Sub heading"
    // create image 
    const image=document.createElement("img")

    image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")

    image.setAttribute("alt","K.R Mangalam");

    // append both h2 and image inside content div
    document.getElementById("content").append(subHead)
    document.getElementById("content").append(image)
})