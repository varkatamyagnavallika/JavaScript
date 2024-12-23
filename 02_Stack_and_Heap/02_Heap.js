// Non-Primitive datatypes will be stored in heap memory in the form of references.

let studentOne={
    studentName: "Yagnavallika",
    studentEmail : "Yagnavallika@gmail.com",
    studentRollno : 19,
}

let studentTwo= studentOne;
console.log(studentOne.studentName); //Yagnavallika
console.log(studentTwo.studentName); //Yagnavallika

studentTwo.studentName="Radha";
console.log(studentOne.studentName); //Radha
console.log(studentTwo.studentName); //Radha

/* In stack when we try to change one variable data only that data has been changed. 
but here in heap memory when we try to change on variable data it has been changed for two vaiables
beacause in heap the both variables have been refered so there wont be a copy as in stack
it will be directly refered to the original variable so any change done to any one variable then 
the refered one will also be changed. */
