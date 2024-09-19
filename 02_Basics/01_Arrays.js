// Array 
// Javascript Arrays are resizable can contain a mix of datatype.



const myArr = [0, 1, 2, 3, 4, 5, 6,];
const myHero =["Shakiman", "Abc", "Xyz"];
const myArr2 = new Array(1, 2, 3, 4);



console.log(myArr);

// Array Methods

myArr.push(6);// It ll insert value inside the array
myArr.pop();// It ll Remove value From array last value ll be removed  
console.log(myArr);

myArr.unshift(9); //It ll insert value starting of the array.
myArr.shift()//It ll Remove value from starting of the array.

console.log(myArr.includes(9));//The array includes 9 or not.. //output ll ome in boolean datatype which is false or true.

console.log(myArr.indexOf(3)); // It ll check array index. 

const newArr = myArr.join();







