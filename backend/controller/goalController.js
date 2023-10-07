const asyncHandler = require('express-async-handler')
const goal = require('../models/goalModel')
// @desc Get goals , Get all goals 
//@route Get /api/goals
// @access Private 
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()
    res.status(200).json({ goals})
})

// @desc Set goals  
//@route Post /api/goals/
// @access Private 
const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new console.error('Please add text field');
    }
    
const  goals = await Goal.create({
    text: req.body.text
})
    res.status(200).json({ message: `Set Goals`})
})

// @desc Update goals 
//@route Put /api/goals/:id
// @access Private 
const updateGoals = asyncHandler(async(req,res) => {
    const goals = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal =  await Goal.findByIdAndUpdate(req.params.id ,req.body , {new:true} )
    res.status(200).json({ message: `Update goal ${updateGoal}`})
})

// @desc Delete goals
//@route Delete /api/goals/:id
// @access Private 
const deleteGoals = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
})


module.exports= {
    getGoals,
    setGoals,
    updateGoals,deleteGoals
}