let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am fulfilled")
        resolve(true)
    }, 5000)
})


let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am rejected")
        reject(new Error("I am an Error"))
    }, 5000)
})

p1.then((value) => {
    console.log(value)

})