let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("resolved after 3 seconds")
        resolve(56)
    })
})