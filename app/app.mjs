const express = require('express')
const serverless = require('serverless-http')
const app = express()
app.get('/hello', (req,res) => res.send('Hi Im Hit First Time 1'))
app.listen(4210, () => console.log("Listing on Port 4210"))

module.exports.handler = serverless(app)
