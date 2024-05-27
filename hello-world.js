// 1-
console.log("HELLO WORLD")
// 2-
const http = require("http")

const server = http.createServer((req, res)=>{

res.write("<h1>Hello Node!!!!</h1>\n");

res.end()

})

server.listen(3000)

// 3-

const fs = require("fs")

fs.writeFile("welcome.txt", "Tmatim", (err, data) => {
    if(err){
        console.error(err)
    }else{
        console.log("File Created w jawou bh")
    }
})

fs.readFile("welcome.txt", (err, data) => {
    if(err){
        console.error(err)
    }else{
        console.log(data.toString())
    }
})