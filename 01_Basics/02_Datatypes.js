//There are two types of Data types.

/* 1. Primitive Data type
   2. Non- Primitive or Reference Data type.

   In primitive dt:-
   i. String
   ii. Number or int
   iii. Boolean
   iv. null
   v. undefined
   vi. symbol
   vii. BigInt

   In non-primitive Datatype or reference Datatype
   i. Array
   ii. Objects
   iii. Functions

*/

//Primitive Datatypes...
"use strict" //It is used to treat all the Javascript code as newer version 
let studentName="Yagnavallika";
let studentRollno=19;
let studentBranch="CSE";
let presentToCollege=true;
let collegeName;
let jobOffers=null;

//To declare the data type of the variable.
console.log();
console.log("Declaring the dataype with the use of variable :- ");
console.log();
console.log(typeof studentName);
console.log(typeof studentRollno);
console.log(typeof studentBranch);
console.log(typeof presentToCollege);
console.log(typeof collegeName);
console.log(typeof jobOffers);
console.log();


// other way of knowing the datatype with out the variable declaration.
console.log("Declaring the datatype without a variable declaration. ");
console.log();
console.log(typeof "Yagnavallika");
console.log(typeof 19);
console.log(typeof true);
console.log(typeof null);  //null is an object.

//Non-primitive datatype or reference datatype.
const heros=["Spiderman","iron man", "Shaktiman"]; //Array

let myObj={
    Name : "Ram",
    age : 21,
} //Object

const muFunction = function() {
    console.log("Hello all ..... !");  
} //Function.
