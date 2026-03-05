const form =document.getElementById("form");
const fullname=document.getElementById("name");
const course = document.getElementById("course");

form.addEventListener("submit",(event)=>{
    console.log(event.target.id);
    //   it prevents autorefresh
    
    const nameInput=fullname.value;
    const courseInput=course.value
  event.preventDefault();

  

  document.getElementById("output").innerText=nameInput+" "+courseInput

})