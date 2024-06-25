// //chapter1_q1 create a string and add number to it
let a = "Josh"
let b=6
console.log(a+b)

// //chapter1_q2 use typeof operator to find the datatype of the string in last question
console.log(typeof (a+b))

// //chapter1_q3 create a const object in javascript can you change it to hold a number later
const a1 = {
  name : "Josh",
  section : 1,
  isprincipal : false
}
a1="Josh"//Throws an error because it canot contain string that also means it can not contain any number.

// //chapter1_q4 try to add a new key to the const object in problem 3 were you able to do it
a1['friend'] = "AVA"
a1['name']="chen"
console.log(a1)

//chapter1_q5 write a js program to create a word meaning dictionary of 5 words
const dict = {
  Aggrandize : "To enhance power" ,
  Abrogate : "Cancel",
  Absolve : "To free from guilt",
  Arrant :  " Completely",
  Artless : "Without deception"
}
console.log(dict.Absolve)
