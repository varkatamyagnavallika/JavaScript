let personName="Yagnavallika" //String datatype
let booleanAction=true; //Boolean datatype
let personRollno="20C39A0519"; //String datatype
let studentDetails;  //undefeined datatype
let studentDOB=null; //null datatype
let score=121;  //interger or number datatype

//Printing the datatype 
console.log(typeof personName);
console.log(typeof booleanAction);
console.log(typeof personRollno);
console.log(typeof studentDetails);
console.log(typeof studentDOB);
console.log(typeof score);

//Printing the datatype by taking the variable as a method.
console.log();
console.log(typeof (personName));
console.log(typeof (booleanAction));
console.log(typeof (personRollno));
console.log(typeof (studentDetails));
console.log(typeof (studentDOB));
console.log(typeof (score));

//Data conversations
/* converting string to number*/
console.log();
let personFristName=Number(personName); 
console.log(typeof personFristName); //output:- number
/* but string cannot be number so lets print the value */
console.log(personFristName); //NaN
console.log();
/* converting string to number */
let personRollnumber = Number(personRollno);
console.log(personRollnumber); // output:- NaN-Not a Number
console.log();
/* converting null to number */
let conversationNull=Number(studentDOB);
console.log(typeof conversationNull); //Number
console.log(conversationNull); //Zero(0)
console.log();
/*converting undefined to number*/
let unDefinedValue=Number(studentDetails);
console.log(typeof unDefinedValue); //Number
console.log(unDefinedValue); //NaN
console.log();
/* conversation of boolean to number */
let conversationBoolean=Number(booleanAction);
console.log(typeof conversationBoolean); //Number
console.log(conversationBoolean); //1 - beacuase it is true 
console.log();