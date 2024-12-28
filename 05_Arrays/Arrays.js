// //Arrays are declared in sqaure brackets
const myArray=[1,3,5,7,9]
console.log(myArray[0]); //Accessing the values by index
//Other way of declaring array
const myHeros = ["Ironman","Spider man", "Dheem"]
const myArray2= new Array(1,2,3,4,5);
console.log(myArray2);

// /*Methods in array
// common methods
// 1. push() --> Adds elements
// 2. pop() --> use to remove
// 3. unshift() --> 
// 4. shift() -->
// 5. includes --> can includes questions

// */
myArray.push(11);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(9)
myArray.shift();
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(13));
const newArray=myArray.join()
console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

//Slice and splice
console.log("A ",myArray);
const myn1=myArray.slice(1,3) // 1--> starting , 3--> ending 3 wont include
console.log(myn1);
console.log("B ",myArray);

const myn2=myArray.splice(1,3) // 1--> starting , 3--> ending 3 wont include
console.log("c ",myArray);
console.log(myn2);
// // slice --> When you use slice it not manuplate the original array
// // splice --> When you use splice it manuplate the original array


const marvel_heros=["thor","Iron man","Spider man"];
const dc_heros=["Super man","Flash","Bat man"];
//marvel_heros.push(dc_heros) //We will add array in array. here in dc_heros are taken as single element.
// console.log(marvel_heros);

const allHeroes=marvel_heros.concat(dc_heros);
console.log(allHeroes);

//Spread operator --> ... 
const allnewheroes=[...marvel_heros, ...dc_heros] //Act as concat
console.log(allnewheroes); 

const another_arr=[1,2,3,[4,5,6],7,[11,13,15]];
const real_another_Array=another_arr.flat(Infinity);
console.log(real_another_Array);

console.log(Array.isArray("Yagnavallika"));
console.log(Array.from("Yagnavallika"));
console.log(Array.from({name:"Yagnavallika"}));

let score=101;
let score1=201;
let score2=301;
//Convert hem into a one array
console.log(Array.of(score,score1,score2));