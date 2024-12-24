const name = "Yagnavallika"
const emailId="yagnavallika@gmail.com"
const id=19

// Conacadination using + 
console.log(name+emailId+id); //Yagnavallikayagnavallika@gmail.com19

//Concadination using back ticks
console.log(`The name of the student is ${name} and her roll id is ${id} and her emailid is ${emailId}`);

//Other way of declaring the string
const studentName=new String('Yagnavallika');
console.log(studentName);
//to access a particular index value 
console.log(studentName[0]);
console.log(studentName.__proto__);


// If you want to know the length of string
console.log(studentName.length);

//If you want to convert it into upper case
console.log(studentName.toUpperCase());

//If you want to know what char is at that particular position  
console.log(studentName.charAt(3));

//If you want to know the index of that particular char
console.log(studentName.indexOf('k'));

//If you want to take the substring using substring method. If you use -ve values here it will ignore it.
const newString=studentName.substring(0,5);
console.log(newString);

/*Getting the sub string using slice . In slice we can use negative values. 
The negative values will start from end of the string*/ 
const anotherString=studentName.slice(-12,5);
console.log(anotherString);

//If you want to remove the extra spaces 
const newStringOne="   Yagnavallika@   "
console.log(newStringOne); //    Yagnavallika@     
console.log(newStringOne.trim());//Yagnavallika@

//If you want to replace somethings then you will use replace
const url="https://www.googlekcom/"
console.log(url.replace('k','.'))  //1st one is the string you want to change after comma u will  wrtie the string u wanna replace.

//To know that particular string is present or not
console.log(url.includes('google'));

//to convert string into array based on some value 
console.log(studentName.split('a')); //['Y','gn','v','llik',''] 