const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema.Types

const CompanySchema = new mongoose.Schema({
    user : {
        type : ObjectId,
        ref: 'Register'
    },

    CompanyName : {
        type : String,
    },

    Established : {
        type : String,
    },

    HR_Name : {
        type : String,
    },
    
    email : {
        type : String,
    },
})


const Company = mongoose.model('Company' , CompanySchema)

module.exports = Company