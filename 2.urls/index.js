//const http = require("http")
const express = require("express")

const app = express()

// app.use((req,res,next)=>{
//     console.log("Firest Middle");
//     next()
// })
// app.use((req,res)=>{
//     console.log("second middleware");
//     res.send("<h1>welcome to express js programming</h1>")
//     //res.send({data:"message"})
// })

app.use('/second',(req,res)=>{
    console.log("second middleware");
    res.send("<h1>second page</h1>")
    //res.send({data:"message"})
})
app.use('/third',(req,res)=>{
    console.log("third middleware");
    res.send("<h1>third page</h1>")
    //res.send({data:"message"})
})
app.use('/first',(req,res)=>{
    console.log("first middleware");
    res.send("<h1>first page</h1>")
    //res.send({data:"message"})
})
app.use('/',(req,res)=>{
    console.log("first middleware");
    res.send("<h1>welcome to express js programming</h1>")
    //res.send({data:"message"})
})

log//const server = http.createServer(app)
//server.listen(3000)
app.listen(3000)
