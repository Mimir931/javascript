            // 01 Number

// var integer = 102;
// var float = 13.9;
// console.log(integer ,"\n", float);







            //  02 Convert
// var basic= 34;
// var stringified = basic;
// console.log(stringified);






            // 03 Round
// let num = 1.5;
// let rounded=Math.round(num);
// console.log(rounded);








            // 04 Arithmétique
// let test = 12;
// let bis = 5;

// let addition = test + bis;
// let soustraction = test - bis;
// let multiplication = test * bis;
// let division = test / bis;
// let pourcentage = test % bis;

// console.log(addition) // test + bis;
// console.log(soustraction) // test - bis;
// console.log(multiplication) //test * bis;
// console.log(division) //test / bis;
// console.log(pourcentage) //test % bis;







                        // 05 Comparaison

// let test2= 143;
// let bis2= 219;
// console.log(test2>bis2);








                   //  06 Condition 1

//  let limit=50;
//  let score=64;

//  if (score >= limit) {
//      console.log("Ok good"); 
//  } 
//  else {
//      console.log("Oh nooo ...!")
 
//   07  Condition 2

// let password = "azerty";
// if (password.length >5)
// {
//     console.log("The password is secure");












           // 08 Condition 3

          
        //     let score = 64;
        //    let password = "azerty";
        //    let limit = 50;


        //     let condition1= score >= limit;
        //     let condition2= password.length > 5;


        //    if (condition1 && condition2){
        //        console.log("Ok good !")
        //    }
        //    else if( condition1 || condition2){
        //        console.log("Something is good")
        //    }
        //    else{
        //        console.log("Nothing it's good")
        //    }
        




// BONUS 1

let random = Math.floor(Math.random() * (6 - 1 + 1) +1);
if (random === 6) {
    console.log("Yes I win !")
} else {
    console.log("So close");
}

// BONUS 2

let month = "Jan";
    switch(month) {
        case "Jan": 
        console.log("Winter");
        break;
        case "april": 
        console.log("spring");
        break;
        case "oct": 
        console.log("Fall");
        break;
        case "mai": 
        console.log("Summer");
        break;
        default: 4
        console.log("That's not a month...");
    }


    

    // BONUS 3






    

    let number = 3.6;
    let decimal = number - Math.floor(number);  // 3.6 - 3 == 0.6
    if(decimal>= 0.5){
        console.log(Math.ceil(number));
    } else{
        console.log(Math.floor(number));
    }


    console.log(Math.round(number));

     

    


