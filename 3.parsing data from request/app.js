const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded())
app.use('/add-product',(req,res)=>{
    res.send('<h1>Add Product</h1><form action="/store-product" method="post"><input type="text" name="title"><input type="submit" value="Submit"></form>')
})

app.use('/store-product',(req,res)=>{
    console.log('Form data: ',req.body)
    res.send('<h3>Product Submitted</h3>')
})

app.listen(3000)