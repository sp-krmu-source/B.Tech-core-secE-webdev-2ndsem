let user={
    fullname:"S.P Acharya",
    address:{
        city:"Gurugram",
        state:"Haryana"
    },
    mobileno:1234567890,
    favcolor:["black","white","blue"],
    demo:function(){
        return "demo function";
    }
}
// console.log(user.fullname,user.mobileno,user.favcolor[1],
//     user.demo(), user.address.city
// );


// Object methods

// Object.keys(variable name)

// console.log(Object.keys(user))

// console.log(Object.values(user))

// console.log(Object.entries(user));



const car = { 
    make: "Mahindra", 
    model: "Thar" 
};
// we can't add a new key and value pair but we can change or update existing values
Object.seal(car);

// we can't add a new key and value pair also can't change or update existing values
Object.freeze(car);

car.model="XUV700";
car.color = "black";
console.log(car);

var date =  new Date()
console.log(date)