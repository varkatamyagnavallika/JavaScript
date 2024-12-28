/* Temporal.Now.instannt() - gets the current system exact time
Temporal.Now.timeZone() - get the current system time zone
Temporal.Now.zoneDateTime- get the current date and wall-clock time in the system time zone and specified calender
Temporal.Now.zonedDateTimeISO() - get the current date and wall-clock time in the system time zojne and ISO- 8601 calendar
Temporal.Now.plainDate(calendar)-get current date in the system time zone and specified calendar
Temporal.Now.plainDateTime(calendar)- get thecurrent system date/time in the system time zone but return an object that doesnt remmber its zone so should NOT be used to drive other values.
*/

let myDate=new Date();
console.log(myDate);

//Converting it into string
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

let myCreatedDate=new Date(2024,0,23) // jan number is 0 in javascript
console.log(myCreatedDate.toDateString()); 

let myCreatedDates=new Date(2024,1,23) // feb number is 1 in javascript
console.log(myCreatedDates.toDateString());
console.log(myCreatedDates.toLocaleDateString());

let mycreateDate=new Date("2023-01-23") //yyyy-mm-dd or you can take dd-mm-yyyy
console.log(mycreateDate.toLocaleString());

let myTimeStamp =Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
//to convert it into secs
console.log(Date.now()/1000); //It will get a decimal values
console.log(Math.floor(Date.now()/1000)); //Without decimal values
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); //+1 beacuase here normally the month count starts from 0
console.log(newDate.getDay());

console.log(`${ newDate.getDay()} and the month is ${newDate.getMonth()}`);
newDate.toLocaleString('default',{
    weekday: "long",
})