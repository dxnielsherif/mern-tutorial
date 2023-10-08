//userController.js
const asyncHandler = require('express-async-handler');

//@desc Login user
//@router POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req,res)  => {
    res.json({message: 'Login User'})
})

//@desc Register new user
//@router POST /api/users
//@access Public
const registerUser = asyncHandler(async (req,res) => {
    const { name, email,password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please provide all fields')
    }
    res.json({message: 'Registered User'})
})



//@desc Get  user data
//@router get /api/users/me
//@access Public
const getMe = asyncHandler(async (req,res) => {
    res.json({message: 'User data display'})
})


module.exports = {registerUser,
getMe,
loginUser}
