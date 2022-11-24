

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

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild("script");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
)