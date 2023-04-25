const express = require('express')
const MemberController = require('../controllers/member_controller')

const memberRouter = express.Router()

memberRouter.route('/')
.get(MemberController.getMembers)
.post(MemberController.addMember)



memberRouter.route('/:memberId')
.get(MemberController.getMemberById)
.patch(MemberController.updateMember)
.delete(MemberController.deleteMemberById)

module.exports = memberRouter