let p = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am fulfilled")
        resolve(true)
    }, 5000)
})
console.log(p)