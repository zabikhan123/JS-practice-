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

// let name = [98, 91, 84, 80,70,60]
// for(let ind = 0; ind < name.length; ind++){
//     console.log("index =", name[ind])
// }


// let cetiy=["kabul","mazar","bamyan","logar","herat",]
// for(let place of cetiy){
//     console.log(place);
// }
// let cetiy=["kabul","mazar","bamyan","logar","herat",]
// for(let i of cetiy){
//     console.log(i)
// }
 
//Quiction number one

// let num = [98, 91, 84, 80,70,60];

// let sum = 0;

// for(let val of num){
//     sum += val;
// }

// let avg = sum / num.length;
// console.log("avg of class is = ", avg)

//  let num = [98, 91, 84, 80,70,60];
//  let sum = 0;
//  for(let val of num){
//     sum += val;
//  }
//  let avg = sum / num.length;
//  console.log(`avrage of class is = ${avg}`)


// Quistion number two

// let items = [290,300, 222, 400,390,800,500,600];
// for(let i = 0 ; i < items.length ; i++){
//    let offer = items[i] / 10;
//    items[i] -= offer;
// }


// console.log(items);
// let items = [290,300, 222, 400,390,800,500,600];
// for(let i = 0 ; i < items.length ; i++){
//    let offer = items[i] / 10;
//    items[i] -= offer;
// }
// console.log(items)

// push metod in js the are added the items in the ind of array

// let items = ["apple","mango","banana","orange","patato","tomato","painapple","grapes","kivi"]

// items.push("mana","juse");

// console.log(items);

// pop metod in js the remove item from the ind of array

// let items = ["apple","mango","banana","orange","patato","tomato","painapple","grapes","kivi"]
// items.pop();
// console.log(items);



// tostring we use it to convert everting in to string

let items = [32,32,43,45,56,76,78,98,87,676,545,];
console.log("befor change it to string",items)

items.toString()
console.log(items);
