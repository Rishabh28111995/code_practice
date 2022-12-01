let p = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am rejected")
        reject(new Error("I am an Error"))
    }, 5000)
})
console.log(p)