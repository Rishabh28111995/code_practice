

//console.log("hello worrrrllllld");

//for(let i = 0;i<5;i++){
//    console.log(i)
//}
// synchronous programming
//let a = prompt("What is your Name?")
//let b = prompt("What is your Age?")
//let c = prompt("What is your favorite player?")
//console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous programming
/*console.log("Start")    
setTimeout(function(){
    console.log("Hey i am good");
}, 5000)
console.log("End")*/

// Callbacks

function loadScript(src) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function() {
    ("Loaded script with SRC: " + src)
    })
    document.body.appendChild("script");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
