// 01 - Object

let cat = {
name : "Garfield",
age : 3,
isCute : true,
};

console.log(cat);

console.log(cat.age);

if (cat.isCute === true)

console.log("So Cute !");

// 02 - Combine

let cat2 = {
    name : "Oreo",
age : 2,
isCute : false, 
};
console.log(cat2);

let cats = [cat, cat2];

// console.log(cat.age);
console.log(cats[0].age);

// console.log(cat2.isCute);
console.log(cats[1].isCute);

// 03 - Even

function checkIfEven(num){
    if(num%2 === 0) console.log("even")
    else console.log("odd");
};
checkIfEven(210);

checkIfEven(71);


// 04- Compare

function compare(num1,num2){

if(num1 > num2) console.log (`${num1} is bigger`)
else if (num2 > num1) console.log(` ${num2} is bigger`)
else console.log("both are the same")
};


compare (123 , 321);
compare ( 9000 , 2);
compare ( 96 , 96);

// 05- Add Up


function addUp(num){
    var result=0
for ( let i=0 ; i <= num ;i++)
    result+= i;

return result;
};
console.log(addUp(12));


// 06 Time

function format(num){
var hours = Math.floor(num/3600);
var restSecondes = num % 3600;
var minutes = Math.floor(restSecondes/60);
var secondes = restSecondes %60;
console.log(`${hours} : ${minutes} : ${secondes}`);
};
 format(3700);

// BONUS

function generatePassword(num){
    
};






