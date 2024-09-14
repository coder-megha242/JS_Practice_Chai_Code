let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocalString());

console.log(typeof myDate()); // object

//let myCreatedDate = new Date(2023, 0, 23);// Months starts with 0 in javascrit bcz its single digit and its array that wy its stars with 0

let myCreatedDate = new Date("2023-01-14");// You can give your own Format Date like dd-yy-mm
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocalString());//Local date and time ll get printed

let myTimeStamp = Date.now()
console.log("myTimeStamp");



