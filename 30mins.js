/*console.log("hello world");
var myStr = "My name is Rishabh."
myStr += "Who are you?"
console.log(myStr)
var lastName = "Sharma";
console.log(lastName.length - 1)
console.log(lastName[5])
console.log(myStr.length)*/
//var a = 9;
//var b = 10;
//a += b;
//console.log(a)
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " +  myAdjective  +  myNoun  +  myVerb  + "to the store " + myAdverb;
    return result;

}
console.log(wordBlanks("dog" , "big ", " ran ", "quickly"));

var myArray = [10, 20, 30, 40, 50]
console.log(myArray[3])