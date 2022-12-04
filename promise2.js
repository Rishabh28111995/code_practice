let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("resolved after 3 seconds")
        resolve(56)
    }, 3000)
})

p1.then((value)=>{

    console.log(value)
    let p2 = new Promise((resolve, reject)=>{
       setTimeout(()) resolve("Promise 2")
    })
    return p2
}).then((value)=>{
    console.log("We are Done")
})
