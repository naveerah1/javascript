//nn bb ss u
let a = null;
let b = 345;
let c = true; //can also be false
let d = BigInt("567") + BigInt("3");
let e = "ALEX VOLKOV";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof b);
//objects
const item = {
  ALEX: true,
  VOLKOV: false,
  AGE: 20,
  DOB: undefined,
};
console.log(item["VOLKOV"]);
