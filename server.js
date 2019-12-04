const express = require('express')
const app = express()
require('./api/database/mongoose')
const signupRoute = require('./api/Routes/signupRoutes')
const studentRoute = require('./api/Routes/studentRoutes')
const CompanyRoute = require('./api/Routes/CompanyRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(signupRoute)
app.use(studentRoute)
app.use(CompanyRoute)



app.listen('8000' , () => { console.log("running 8000") })