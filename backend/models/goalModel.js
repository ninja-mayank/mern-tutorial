const mongoose = require('mongoose')
const goalScema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User',
    },
    text : {
        type : String, 
        required : [true,'Please add a text value'],
    },
},{
    timestamps : true,
},{
    typeKey: '$type'
})

module.exports = mongoose.model('Goal', goalScema)