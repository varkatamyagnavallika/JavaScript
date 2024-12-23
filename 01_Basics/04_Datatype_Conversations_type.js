console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true...

/* The reason why the 1st two conditions has given it as 
false and 3rd condition has given the output as false, Because 
The equaly to operator (==) and comparisons >, <,  >=, 
<= works differently.
Comparisons convert null to a number, treating it as 0.
In 1st statement we can see that there is a comparision operator but the symbol
greator than . as comparision operator converts the null to
0(Zero) so we got an output as false.
Thats why the 3rd conditions gives output as true
and remaining as false.*/

console.log(undefined==0); //false
console.log(undefined>0); //false
console.log(undefined >=0); //false

//But for undefined it wont be same as null.