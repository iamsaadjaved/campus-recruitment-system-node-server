const express = require('express')
const route = express.Router()
const Company = require('../models/company.model')
const PostJob = require('../models/postjob.model')
const auth = require('../middleware/auth')


route.post('/companyRegister' , auth , async (req , res) => {
   
        try {
             const company = await new Company({
                 user: req.profile._id,
                 ...req.body
             }).save()
         
             res.status(201).send(company)
         }
        
         catch(e){
             res.send({error : e.message}) 
         }   

    

})

route.get('/companyData' , async (req , res) => {
    const company = await Company.find({})
    res.status(200).send(company)
})

module.exports = route

route.delete('/CompanyDelete' , async (req , res) => {
    console.log(req.query.id) 
    const { id } = req.query
    const deleted = await Company.findOneAndDelete({_id: id})
    res.status(200).send(deleted)
 })

route.get('/CompanyDetail' , async (req , res) => {
    const { id } = req.query
    const company = await Company.findOne({_id: id})
    res.status(200).send(company)
})


route.get('/userCompany' , auth , async (req , res) => {
    const _id = req.profile._id
    userCompany = await Company.findOne({ user: _id })
    res.status(200).send(userCompany)
})

route.post('/updateCompany' , auth , async (req , res) => {
    const _id = req.body._id
    company = await Company.findOne({ _id  })
    
    Object.assign( company , req.body )

    await company.save()

    res.status(200).send(company)
})

route.post('/postjob/' , auth , async (req , res) => {
   const postjob = await new PostJob({
        user: req.profile._id,
        ...req.body

    }).save()

    res.status(201).send(postjob)
})


route.get('/jobs/:id' , auth , async (req , res) => {
    const _id = req.params.id

    const postjob = await PostJob.findOne({ _id })
    await postjob.populate('user').execPopulate()
 
     res.status(200).send(postjob)
 })
 
 route.get('/alljobs' , auth , async (req , res) => {

    const alljobs = await req.profile.populate('postJob').execPopulate() 
    // await postjob.populate('user').execPopulate()
    console.log(alljobs)

     res.status(200).send(alljobs)
 })
 
 route.get('/alljobsForStudent' , auth , async (req , res) => {

    const jobs = await PostJob.find({}) 
    // await postjob.populate('user').execPopulate()
    console.log(jobs)

     res.status(200).send(jobs)
 })
 
