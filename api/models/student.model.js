const mongoose = require('mongoose')



const StudentSchema = new mongoose.Schema({
    
    user : {
       type : mongoose.Schema.Types.ObjectId,
       ref: "Register" 
    },

    name : {
        type : String,
        required : true
    },

    age : {
        type : String,
        required : true
    },

    education : {
        type : String,
        required : true
    },
    
    marks : {
        type : String,
        required : true
    },


})


const Student = mongoose.model('Student' , StudentSchema)

module.exports = Student