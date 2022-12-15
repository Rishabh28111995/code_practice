/*function sum(a, b) {
  console.log(a * a + b * b)
}
sum(9, 9);
sum(123, 78);
sum(9, 100);

function myLocalSpace() {
  var myVar = 10;
console.log(myVar)
}
myLocalSpace();
 
var outWear = "T-Shirt";
function myOutput() {
  var outWear = "Sweater";
   return outWear;
}
console.log(myOutput());
console.log(outWear)


function minusSeven(num) {
  return num - 7;

}
console.log(minusSeven(10));

function timesTen(num) {
  return num * 10
}
console.log(timesTen(10));

console.log(minusSeven(70));
console.log(timesTen(89));


var sum = 1;
function addThree() {
  sum =+ 3;
}
console.log(sum)*/

/*
function testEqual(val) {
  if (val != 12){
    return "Not Equal";
  }
  return "Equal";
}

//console.log(testEqual(10));
//console.log(testEqual(12));
//console.log(testEqual(20));

//Equality operator
//( strict)3===3 true
// 3==="3" false
// strict inequality operator
  // !==
 console.log(testEqual(12));

 function greaterThan (val) {
  if (val > 100) {
    return ("Over 100");
  } 
  if (val > 10) {
    return ("Over 10")

  }
  return ("10 or under"); 
 }

 console.log(greaterThan(12))
 console.log(greaterThan(1233455))


 function lessThanEqual (val) {
  if (val <= 10) {
    return "smaller or equal 10"
  }
  if (val <= 100){
    return "smaller or equal 100"
  }
    return "More than 100"
 }

 console.log(lessThanEqual(123))
 console.log(lessThanEqual(100))
 console.log(lessThanEqual(10))
 console.log(lessThanEqual(1))*/

function testLogicalEnd (val){
  if (val <= 50 && val >= 25){
    return "Yes"
  }
  return "No"
}
console.log(testLogicalEnd(49))
console.log(testLogicalEnd(100))

function testLogicalOr (val) {
  if (val < 10 || val > 20 ) {
    return "Outside";
  }
  return "Inside";

}

console.log(testLogicalOr(11))

