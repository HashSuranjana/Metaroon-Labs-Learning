import http from "node:http"
import fs from "node:fs"
import {log } from "node:console"


http.createServer((req,res) => {
    fs.readFile('index.html', (err,data) => {
        res.writeHead(200,'Logging Success')
        res.write(data)
        res.end()
    })
}).listen(8080)

const data = "The beauty of nature lies in its diversity and complexity. From the towering peaks of mountains to the serene calm of ocean waves, nature provides endless inspiration and wonder. It serves as a reminder of the delicate balance that sustains life on Earth. The chirping of birds, the rustling of leaves, and the gentle flow of rivers all contribute to the symphony of sounds that create a peaceful atmosphere. Nature not only offers a refuge for animals and plants but also provides humans with a place of tranquility and escape. As we walk through a forest or stand at the edge of a vast landscape, we often feel a deep connection to the world around us. This bond with nature is essential for our mental well-being, fostering a sense of harmony and appreciation for the environment that sustains all forms of life."

const data2 = "\nMy Name is Hash"


//fs.appendFile() and fs.writeFile() is doing same thing and gets same parameters

//wirte to a file (if file doesn't exist it creates a file)
//appendFile takes 2 parameters ( directory with file name, data that wants to write)

fs.appendFile('./new.txt',data2, (err) => {
    if(err) throw err;
    log("write success !")
})

//deleting files
// fs.unlink('../text.txt', (err) =>{
//     if(err) throw err
//     log('Delete SuccessFully')
// })


//Renaming files
// fs.rename('./new.txt','./renamedText.txt', (err) =>{
//     if(err) throw err
//     log('Renamed Successfully!')
// })

//upload files 
 http.createServer((req,res) => {
    res.write('<h1> Upload Files </h1>')
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
 }).listen(5050)