//const http = require("http")
const express = require("express")

const app = express()

app.use((req,res,next)=>{
    console.log("Firest Middle");
    next()
})
app.use((req,res)=>{
    console.log("second middleware");
    res.send("<h1>welcome to express js programming</h1>")
    //res.send({data:"message"})
})

//const server = http.createServer(app)
//server.listen(3000)
app.listen(3000)