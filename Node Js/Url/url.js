import { log } from 'node:console'
import url from 'node:url'
var uc = require('upper-case') 

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

let get_url = url.parse(adr)

log(uc.upperCase('hello'))

log( get_url.port)
log( get_url.pathname)
log( get_url.path)