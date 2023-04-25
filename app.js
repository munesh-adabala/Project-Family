const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const connectDB = require('./database/db')
const memberRouter = require('./routes/members_router')
const PORT = 3000;


const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/app/v1/members',memberRouter)

app.get('/',(req,res)=>{
    res.send("Helloo....")
})

connectDB().then(()=>{
    console.log("Connected to db")
    app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
})
