//Singleton 
//Object.create ---> // Is called singeton by which the constructor is done
//object literals
const jsuser={
    name: "Yagnavallika",
    "Full name":"V Yagnavallika", //When you thus type of declaration then we cannot access it by using .
    rollno: 19,
    location: "Warangal",
    email: "vyr@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday","Saturday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
// console.log(jsuser.Full name);//It will give an error

console.log(jsuser["Full name"]);
// Object.freeze(jsuser) //When you freeze an obj then we cant change the object afterwards
// jsuser.email="Yagnavallika@gmail.com" //It wont be applied because we have applied freeze for object jsuser
// console.log(jsuser);

jsuser.greeting=function() { 
    console.log("Hello Js User");
}
jsuser.greetingTwo=function() {
    console.log(`HEllo js user, ${this.name}`);
}
console.log(jsuser.greeting);  // function return back it has not exectuted but returned
console.log(jsuser.greetingTwo());