/*
    Function 
*/
// function sayMyName(){
//     console.log("Y");
//     console.log("a");
//     console.log("g");
//     console.log("n");
//     console.log("a");
// }
// sayMyName();
function add2Numbers(number1,number2){
    // console.log(number1 + number2);  
    //let result=number1+number2
    return number1+number2;
}
let number1=3;
let number2=4;
const result = add2Numbers(number1,number2);
console.log("Result : ",result);
//When you use return you will use any variable and store init and display. But, we cannot display the returned value without using a variable(With console.log())
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Yagnavallika"));
console.log(loginUserMessage());