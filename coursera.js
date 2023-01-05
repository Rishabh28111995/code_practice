// nested loop
/*for (let i = 2023; i <= 2025; i++){
    console.log(i);
    for (let j = 6; j < 10; j++){
        console.log("-------", j)
        for( let k = 2; k < 4; k++){
            console.log("--", k)
        }
    }
}

for (let i = 1; i < 11; i++){
    if(i == 1){
        console.log("Gold medal")
    }else if (i == 2){
        console.log("Silver medal")
    }else if (i == 3){
        console.log("Bronze medal")
    }else{
        console.log(i)
    }
}

let i = 1;
if(i == 0 && i == 1) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

  for (let i = 1; i < 11; i++){
    switch(i){
       case 1:
        console.log("Gold medal")
        break;
        case 2:
            console.log("Silver medal")
            break;
            case 3:
                console.log("Bronze medal")
                break;
                default:
                case 4:
                    console.log(i)
                    break;
                    

    }
  }

  console.log("Goodbye")

  // object literals and dot notation.

  var house = {
    room: 3,
    color: "blue",
    cost: "$1000"
  }
  house.size = "10000sqft";
  house.windows = 10;
  console.log(house)
// object literals and bracket notation.
  var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);
*/
//Advantage of using bracket notation over dot notation
// is that it can evaluate expressions.
/*
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]])
}

console.log(Math.random())
console.log(Math.ceil(0.890)) // round off

var round = Math.random() * 10

var decimal = Math.ceil(round)
console.log(decimal)
*/

var result = "Hello".indexOf('l');
console.log(result)

var trim = Math.sqrt(7)
console.log(trim)

//bugs and errors

// Bugs are when the code runs without interruption
// but not working how we intended it to work.

//Errors is a faulty piece of code when happpens
// stops execution of code.
//syntax error
//type error
//reference error

try {
    console.log(a + b)
} catch (err) {
    console.log(err)
    console.log("There was an error.")
    console.log("The error is saved in error log.")
}
console.log('My prog. does not stop.')

try {
    throw new ReferenceError();

} catch(err) {
    console.log(err)
    console.log('')
}