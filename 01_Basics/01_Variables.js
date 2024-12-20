//Creating different variable types and declaring them.
const accountID=121;//Creating constant variable using const.A constant variable value cannot be changed
let accountName="Yagnavallika"; // creating a variable using let keyword
var accountPassword="1234"; 
accountBranch="Hyderabad";

//Printing the values
console.log(accountID); 
console.log(accountName);
console.log(accountPassword);
console.log(accountBranch);

//Other way of printing the variables.
console.table([accountID,accountName,accountPassword,accountBranch]); //This will print in the form of table.

// We can create a variable without declaring also 
let accountState; //If we try to print this variable then you will get an output as undefined.

/*
Note:- We will create a variable by using let keyword only. because when we use var keyword we 
will get an block scope or functional scope.
*/

/* 
Once an value is assigned to a constant variable it wont be changed at anycost.
Example:- accountId=123 // This will get an error if you try to exectute it.
*/