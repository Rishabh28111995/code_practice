// iife is used when we dont need to declare a variable 
// at global scope....
/*

(function () {
    console.log("My favorite number is 3")
})()

//Temp. literals--( `------` )

const person = {
    name: "Rishabh sharma",
    age: 27
};
const greeting = `Hello, my name is ${person.name}.
I am ${person.age} years old.`;
console.log(greeting);

//simple fields
const createPerson = (name, age, gender) => ( { name, age, gender});
console.log(createPerson("Rishabh", "27", "Male"));
*/
// class syntax
// export and import
function factorial(num) {
    if (n === 0 || num === 1)
    return 1;}
    else { 
        for (let i = num; i >= 1; i--){
        num *= i;
    }
    return num;
}
  factorial(9);

 