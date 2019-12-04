const express = require('express')
const route = express.Router()
const auth = require('../middleware/auth')
const Student = require('../models/student.model')



route.get('/student/:id' , async (req , res) => {
     
     const _id = req.params.id
     
     const student = await Student.findById(_id)
     
     res.send(student)
      

})


route.get('/account' , auth , async (req , res) => {
     
    res.status(200).send(req.profile)
      

})

route.get('/private' , auth , async (req , res) => {
     
     res.status(200).send({profile: req.profile})

 
 })
 

// route.get('/auth' ,(req , res) => {
//      res.send({token: req.token , profile: req.profile})

// })

route.get('/students'  ,  async (req , res) => {
     const students = await Student.find({})
     res.send(students)

})

route.get('/singleStudent' , auth , async (req , res) => {
     const _id = req.profile._id
     singleStudent = await Student.findOne({ user: _id })
     res.status(200).send(singleStudent)
 })


 route.post('/updateStudent' , auth , async (req , res) => {
     const _id = req.body._id
     studentUpdate = await Student.findOne({ _id  })
     
     Object.assign( studentUpdate , req.body )
 
     await studentUpdate.save()
 
     res.status(200).send(studentUpdate)
 }) 

route.post('/studentRegistration' , auth , async (req , res) => {
     const student = await Student({
          user: req.profile._id,
          ...req.body
     }).save()

     res.status(201).send(student)

})

route.delete('/delete' , async (req , res) => {
   console.log(req.query.id) 
   const { id } = req.query
   const deleted = await Student.findOneAndDelete({_id: id})
   res.status(200).send(deleted)
})

route.get('/StudentDetail' , async (req , res) => {
     const { id } = req.query
     const student = await Student.findOne({_id : id})
     res.status(200).send(student)
})



module.exports = route