// nestewd objects

/*var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seats": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

*/

// WHILE LOOP 
/*var myArray = [];

var i = 0;
while(i < 7) {
    myArray.push(i);
    i++
}
console.log(myArray)

//FOR LOOP
var ourArray = []

for (var i = 1; i < 7; i++) {
    ourArray.push(i);
}
console.log(ourArray)

// for odd nos.
var toArray = []
for (i = 1; i < 12; i += 2) {
    toArray.push(i);
}
console.log(toArray)


var ourArr = [9, 10, 11, 12];
var ourTotal = 5;

for (var i = 0; i < 4; i++) {
    ourTotal += ourArr[i]
}

console.log(ourTotal)

//nesting for loops
function multiplyAll(arr) {
      var product = 1;

      for (var i = 0; i < arr.length ;i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
      }
      return product
}
    var product = multiplyAll([[1, 2],[3, 4],[5, 6, 7]]);

    console.log(product)

    // DO WHILE LOOP
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while(i < 5)

console.log(i, myArray)

*/
// rrandom fractions

/*function randomFraction(){
    return Math.random();
}

console.log(randomFraction());

// Math.floor() rounds down and returns the 
//largest integer less than or equal to a given number.
function randomNumber(){
  return Math.floor(Math.random() * 25);

}
console.log(randomNumber())
console.log(randomNumber())
console.log(randomNumber())
console.log(randomNumber())
*/

/*
function randomRange(myMin, myMax){
return Math.floor(Math.random() * (myMax - myMin + 1)) 
+ myMin;
}
console.log(randomRange(1, 8))

function checkNumber(a, b){
    return a === b;
}
console.log(checkNumber(2, "2"))*/


//nested ternary(conditional) operator 
function checkSign(num) {
    return num > 0 ?  "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(0))
console.log(checkSign(2))
console.log(checkSign(-2))

// var is "function scoped" whereas let is "block scoped".


// mutata an array declare with const
const s = [2, 3, 4];
function editInPlace(){
    s[0] = 1;
    s[1] = 3;
    s[2] = 
} 