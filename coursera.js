// nested loop
for (let i = 2023; i <= 2025; i++){
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

//Advantage of using bracket notation over dot notation
// is that it can evaluate expressions.

