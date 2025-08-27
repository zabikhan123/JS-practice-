// loops in js  3 luctire



// for (let i = 1 ; i <= 10 ; i++){
//     console.log("hello world")
// }
// let sum = 0;
// for (let i =1; i <= 10 ; i++){
//     sum = sum +i;
// }
// console.log("sum =", sum);
// let sum = 10;
// let n = 100;
// for (let i = 1 ; i <= n ; i++){
//     sum = sum +i ;
// }
// console.log("sum =", sum);

// while loop in js

// let i = 1;
// while( i <= 10){
//     console.log(" i =", i);
//     i++;
// }

// let i = 1;
// while ( i <= 10){
//     console.log("i =", i)
//     i++;
// }


// do while loop


// let i = 1;
// do{
//     console.log( "hello everone i'm from afg");
//     i++;
// }while(i <= 10);



// for of loop 


// let src = "afghanistan";
// let linght = 0;
// for(let i of src){
//     console.log( " i =", i);
//     linght++;
// };
// console.log("linght =", linght)


// for in loop


// let student = {
//     name : "ali khan",
//     number : 20,
//     ispass: true,
// }
// for( let key in student){
//     console.log("key = ", key , student[key]);
// }

// Quistion one 


// for(let num = 0; num <= 100 ; num++){
//     if(num % 2 === 0)
//         console.log("num =", num)
// }

// for (let num = 0 ; num <= 100; num++){
//     if(num % 2 !==0)
//         console.log("num =", num)
// }
// Quistion number to 

// let gamenumber= 20;
// let usernum= prompt("Enter the right number");
// while(gamenumber != usernum){
//     usernum = prompt("you entered the woring number guass again")
// }
// console.log("conguratulation you guass the right number")

// let winnum= 29;
// let usernum= prompt("guass the win number")
// while(winnum != usernum){
//     usernum= prompt("you enter the woring number guass again")
//     console.log( "usernum = ", usernum)
// }
// console.log("conguratulation you guass the right number")




// templet literals

// let obj={
//     item :"pen",
//     price: 10,
// }
// console.log("the cast of ", obj.item ,"is ",obj.price,"rupees")



// we use \n for next line
// we use  \t  ti add the tabe 

//string metod in js

// let str = "afghanistan";
// str = str.toUpperCase();

// trim metod is use to  remove  the start and the end space

// let afg = " afg        hinstan   kabul  ";
// console.log(afg.trim())

// we use it to return a part of string

// let str = "afghanistan";
// console.log(str.slice(3 , 8))

// we use it to connict the two and more the two string // we can also use + for concat

// let str1 = "hello";
// let str2 = "buy";
// let resu = str1.concat( " ",str2);
// console.log(resu)

// we can use replace metod to change content of a string 

// let num = "hello";
// console.log(num.replace("h","y"))


// we can use charAt metod for define the number of index

// let num = "hello";
// console.log(num.charAt(4))

// Quistion one 

// let fullName= prompt("Enter your fullname whitout space")
// let username = "@" + fullName + fullName.length ;
// console.log(username)






// array in js 

// let num= [
//     {name: "ali",
//     number: 32,
//     }
// ]

let name = [98, 91, 84, 80,70,60]
for(let ind = 0; ind < name.length; ind++){
    console.log("index =", name[ind])
}


let cetiy=["kabul","mazar","bamyan","logar","herat",]
for(let place of cetiy){
    console.log(place);
}