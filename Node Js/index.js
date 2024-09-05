const { log } = require('console')

const os = require ('os') //importing os package
const path = require ('path') //importing path package

log(os.machine())  // returns machine type
log(os.platform()) // returns machine's os name (windows ,linux ,mac)
log(os.version()) // return windows version

log(__dirname )  // returns directory Name
log(__filename) // return file name with the path 

log(path.basename(__filename)) //if this is __fileName it returns fileName and __dirName it returns folder Name