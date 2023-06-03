const {default:mongoose} = require('mongoose')

async function connectDB(){
    await mongoose.connect("mongodb+srv://muneshadabala333:munesh99@project-family.vxgugvm.mongodb.net/family-db")
}

module.exports = connectDB;