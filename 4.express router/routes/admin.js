const express = require('express')

const router = express.Router()

router.get('/add-product',(req,res)=>{
    res.send('<h1>Add Product</h1><form action="/store-product" method="post"><input type="text" name="title"><input type="submit" value="Submit"></form>')
})

router.post('/store-product',(req,res)=>{
    console.log('Form data: ',req.body)
    res.send('<h3>Product Submitted</h3>')
})

module.exports = router