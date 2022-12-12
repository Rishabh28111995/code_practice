var myArray = [["rish", 23], ["cat", 13]];
myArray.push(["Manish", 45])
console.log(myArray)
//[ [ 'rish', 23 ], [ 'cat', 13 ], [ 'Manish', 45 ] ]

// Remove array
var ourArray = [1, 2, 3, 4]
ourArray.pop();
console.log(ourArray)
//[ 1, 2, 3 ]

var firstArray = [[1, 2], 3, 4, 5]
firstArray.shift()
console.log(firstArray) 
//[ 3, 4, 5 ]

// to add elememt at the beginning of an array just opp. to push
var secondArray = ["Cat", "Dog", "Love"]
secondArray.unshift(["lion", 24])
console.log(secondArray)
//[ [ 'lion', 24 ], 'Cat', 'Dog', 'Love' ]

