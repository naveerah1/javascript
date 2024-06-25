console.log("This code shows some conditions where to use var,let and const");
// var a=30;
// var a="p";
let b = "ALEX";
const author = "ALEX";
author = 5; //Throws an error because constant cannot be changed
const ALEX = 0;
let c = null;
let d = undefined;
{
  var b = "VOLKOV";
  console.log(b);
}
console.log(b);
