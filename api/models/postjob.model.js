const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema.Types

const PostJobSchema = new mongoose.Schema({
    user : {
        type : ObjectId,
        ref: 'Register'
    },

    skill : {
        type : String,
    },

    minimumCGPA : {
        type : String,
    },

    minimumSalary : {
        type : String,
    },
    
    description : {
        type : String,
    },
})


const PostJob = mongoose.model('PostJob' , PostJobSchema)

module.exports = PostJob