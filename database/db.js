const {default:mongoose} = require('mongoose')

async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/project-family")
}

module.exports = connectDB;