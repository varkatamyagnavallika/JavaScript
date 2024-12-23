//Primitive datatypes are stored in stack memory.
 
let myName="Yagnavallika"
let anotherName=myName

console.log(myName) //Yagnavallika
console.log(anotherName) //Yagnavallika
//If we want to change the value of another name

anotherName="Varkatam"

console.log(myName) //Yagnavallika
console.log(anotherName) //Varkatam

/* Here in stack when we try to change the value of anotherName only that value will be changed.
Here whenever we refer some vaiables we will refer the copy not the original varible data. */
