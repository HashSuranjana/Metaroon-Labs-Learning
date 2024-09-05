import os from 'os';
import path from 'path';
import console from 'console';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)

console.log(os.machine())  // returns machine type
console.log(os.platform()) // returns machine's os name (windows ,linux ,mac)
console.log(os.version()) // return windows version

console.log(__dirName)
console.log(path.basename(__fileName))
console.log(path.extname(__fileName))

