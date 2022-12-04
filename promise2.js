let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("resolved after 3 seconds")
        resolve(56)
    }, 3000)
})

p1.then((value)=>{

    console.log(value)
    let p2 = newPromise((resolve, reject)=>{
        resolve("Promise 2")
    }
})
