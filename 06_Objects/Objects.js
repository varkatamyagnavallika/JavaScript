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



//const tinderUser=new  Object(); --> Singleton object
const tinderUser={} //Non singleton object
tinderUser.id="123abcd";
tinderUser.name="Yagna";
tinderUser.isLoggedIn=false;

console.log(tinderUser);

const regularUser={
    email: "yagna@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Varkatam",
            lastname: "Yagnavallika"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2: "b", 3: "c"}
const obj2={4:"a", 5: "b", 6: "c"}
// const obj3={obj1,obj2}
//or
//const obj3=Object.assign({},obj1,obj2); //--> here {} is target and obj1,obj2 is source.
//or
const obj3={...obj1,...obj2};
console.log(obj3);

//When you get values from database
const users=[
    {
        id:1,
        email:"V@gmail.com"
    },
    {   
    },
    {
    },
]
users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));

//API'S
//Destructuring
const course={
    courseName:"JavaScript",
    CouseInstructor:"Yagnavallika"
}
// course.courseName
const {courseName}=course
//Or like const {courseName : Name}=course
console.log(courseName); //console.log(Name);
 
//Destructuring in react
// const navbar=({company}) => {

// }
// navbar(company="Yagnavallika")

//API'S --> JSON (object)-->Representation {}
// {
//     "name":"Yagnavallika",
//     "coursername":"Js"
// }
//In the form of arrays
// [
//     {},
//     {},
//     {}
// ] //Random user me api -->Most useful api
