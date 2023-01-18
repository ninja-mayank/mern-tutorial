const mongoose = require('mongoose')

const userScema = mongoose.Schema({
    name : {
        type : String,
        required : [true,'Please add name'],
    },
    email : {
        type : String,
        required : [true,'Please add an email'],
        unique : true,
    },
    password : {
        type : String,
        required : [true,'Please add a password'],
    },
},{
    timestamps : true,
},{
    typeKey: '$type'
})

module.exports = mongoose.model('User',userScema)