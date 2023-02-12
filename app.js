// Modules allows us to break up the code sep. files.
const names = require('./2-names')
const sayHi = require('./3-anything')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)