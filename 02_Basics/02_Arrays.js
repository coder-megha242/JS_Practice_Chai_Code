const marval_heros = ["Thor", "IronMan", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

marval_heros.push(dc_heros);// push ll work on existing array // output ["Thor", "IronMan", "spiderman" ["superman", "batman", "flash"]]

console.log(marval_heros);

const all_Heros = marval_heros.concat(dc_heros);
console.log(all_Heros); // concat ll create new array and then it ll proper full array // Output ["Thor", "IronMan", "spiderman","superman", "batman", "flash"];



//spred operator 

const all_New_Heros = [...marvel_heros, ...dc_heros];
console.log(all_New_Heros);// spread operator ll create new array and then it ll full array but you can add multiple array in one array.



//flat
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_anoter_array = another_array.flat(infinity);
console.log(real_anoter_array);

console.log(Array.isArray("Hitesh")); // isArray ll check if it is array or not
console.log(Array.from("Hitesh")); // from ll convert any datatype in array.

console.log(Array.from({name:"Hitesh"}));// here you have to mention create array from key and objet that ll we see in future.



let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3)); // here .of ll conert muliple value into one array. output [100, 200, 300]






