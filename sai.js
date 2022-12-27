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
    let result = 1
    if (num == 0 || num == 1)
    {
    return result;
    }
    else if( num > 1 ){ 
        for (let i = num; i >= 1; i--){
            num *= i;
        }
        return num;
    }
    else {
        return " number is negative."
    }
}
console.log(factorial(4));

const recFact = (num)=>{
    if(num == 0)
    return 1
    else
    return num*recFact(num-1);
}
console.log(recFact(3))

 