const score=401
const balance=new Number(101);
console.log(balance); //[Number: 101]
console.log(score); //401

//Converting number into String
console.log(balance.toString()); 

// To  know the length
console.log(balance.toString().length); 

//Percission value. 
console.log(balance.toFixed(1)); 

// use to give a perisized value,string(it returns only string).
const otherNuumber = 21.2121;
console.log(otherNuumber.toPrecision(3));

//Use to give in us standed 
const hundreds = 1000001
console.log(hundreds.toLocaleString());

//For indian values
console.log(hundreds.toLocaleString('en-IN'));

// +++++++ Maths +++++++
//Max and min values

console.log(Math); //If here then we only get object. but when we do it in console then it will give all the methods
console.log(Math.abs(-5)); // We will only get the +ve values.

// Gives the round off if 0.5 above it will give before decimal +1 if less just the number before decimal
console.log(Math.round(3.3));  // 3 because 0.3<0.5
console.log(Math.round(3.7)); //4 because 0.7>0.5
console.log(Math.ceil(3.4)); // 4 Takes the highest value
console.log(Math.floor(4.9)); // 4 takes the lowest value
console.log(Math.sqrt(score));

//To find the max and min from a particualr range
console.log(Math.min(score,3332,4));
console.log(Math.max(score,1,2,3));

//Everytime it will get a new value in between 0 and 1 range
console.log(Math.random()); // Give output in between 0 and 1
console.log((Math.random()*10)+1);//for someone like dice r someother things
console.log(Math.floor(Math.random()*10)+1); 

const min=11
const max=21
console.log(Math.floor(Math.random() * (max-min + 1)) + min); //when we want the output abvoe min
 