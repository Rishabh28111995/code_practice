let promise = new Promise(function(resolve, reject){
    resolve(56)
})

console.log("Hello Rishabh")
setTimeout(function(){
    console.log("Hello to rishabh again in 5 seconds")
}, 5000)
console.log("my name is Rishabh")