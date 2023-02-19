//OS module.
const os = require('os') // built in module

// info about current user
const user = os.userInfo()
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    
}