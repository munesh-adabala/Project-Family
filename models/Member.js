const {default:mongoose} = require('mongoose')

const MemberSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    gender:{
    type:String,
    enum: ["male","female"]
    },
    spouse:{
        type: Number,
        require:true
    },
    children:{
        type: Array
    }
})

module.exports = mongoose.model("Member",MemberSchema,"member")