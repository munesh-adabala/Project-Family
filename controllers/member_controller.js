const {ObjectId} = require('mongodb')
const Member = require('../models/Member')

exports.getMembers = async(req,res)=>{
    const data = await Member.find()
    res.json(data)
}

exports.addMember = async(req,res)=>{
    await Member.insertMany(req.body)
    res.json({data:"Added Member successfully..."})
}

exports.getMemberById = async(req,res)=>{
    const _id = new ObjectId(req.params.memberId)
    try{
    const data = await Member.findById(_id)
    if(data == null){
        res.json("Member with id: "+req.params.memberId+" not found")
    }
    res.json(data)
    }catch(error){
        console.log(error)
        
    }
}

exports.updateMember= async(req,res)=>{
    const _id = new ObjectId(req.params.memberId)
    await Member.updateOne({_id},{$set:req.body})
    res.json({data:"Updated Book successfully with Id: "+req.params.memberId})
}

exports.deleteMemberById = async(req,res)=>{
    const _id = new ObjectId(req.params.memberId)
    await Member.deleteOne({_id})
    res.send("Deleted member with id: "+req.params.memberId)
}


