// 1 Array

var fruits = ["mango" , "lemon" , "blueberry"];
console.table(fruits);

// 2 Access

var ingrédients = ["eggs" , "milk", "butter"];
console.log(ingrédients[1]);
console.log(ingrédients.indexOf("butter"));


// 03 - Add and Remove
var objects=["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);


// 04 - Order 

var numbers= [4 , 10 , 8 , 12 , 6 ];

numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

// 05 - Boucle

var total = 0;
var limit = 10;

// for (var i = total; i < limit; i++) {  
//     console.log(i)
//   }

for (var i=0; i<=10; i++){
    total = total+i; //  ou total+ = i;
}
console.log(total);

// 06 - Reverse

var string = "Hello Konexio !";
 var splitted = string.split("");
 var reversed = [];

 for (i=0; i<= splitted.length; i++){
     reversed.unshift(splitted[i]);
 }
var result= reversed.join("");
console.log(result);


// BONUS 1


// //   - Créez une boucle qui part de 0 et s'arrête à 100
// //   - À chaque itération :
// //       - Si `i` est un multiple de 3 ⇒ affichez "fizz"
// //       - Si `i` est un multiple de 5 ⇒ affichez "buzz"
// //       - Si `i` est un multiple de 3 et 5 ⇒ affichez "fizzbuzz"
// //       - Si `i` est un multilple de 7 ⇒ ne l'affichez pas
// //       - Sinon, affichez la valeur de i

for(let i=0; i<=100; i++){
    
    
    if(i%3 == 0 && i%5 ==0){
        console.log("fizzbuzz");
   }
    else if(i%3 == 0){
        console.log("fizz");
    }
    else if (i%5 == 0){
        console.log("buzz");
    }
    
   else if (i%7 ==0){
       console.log("");
   }
   else {
       console.log(i);
   }
}


  // BONUS 2

    //   Reproduisez l'exercice 5 avec une boucle while
    var total = 0;
    var limit = 10;
    var i = 0;

while (i<= limit){
    total = total+i;
    i+=1; //ou i++
}
console.log(total);

//    BONUS 3
// - Créez un tableau avec le nom de chacun de vos camarades de promo
// - Affichez aléatoirement le nom de la personne tiré au sort

var name = ["Dupuis" , " Dupont" , "Dutronc" , " Durand"];

indice = Math.floor(Math.random() *name.length);
console.log(name[indice]);


// Bonus 4
var tab =[];
var nb;

for (let i=1; i<=20; i++) {
    nb = Math.floor(Math.random() *(100+1));
    tab.push(nb);

}
console.log(tab);

var max = 0;
for(let i=0; i<tab.length; i++){
    if(tab[i] > max){
        max = tab[i];
    }
}

console.log(max);





