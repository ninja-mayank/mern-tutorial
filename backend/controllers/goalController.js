const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req,res) => {
    res.json({message : 'Get goals'})
})

const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.json({message : 'Set goals'})
})

const updateGoal = asyncHandler(async (req,res) => {
    res.json({message : `Update goal ${req.params.id}`})
})

const deleteGoal = asyncHandler(async (req,res) => {
    res.json({message : `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}