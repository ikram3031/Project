import asyncHandler from "express-async-handler"

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async(req,res) => {
    res.status(200).json({message:"User Authenticated"})
});

// @desc register a new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async(req,res) => {
    res.status(200).json({message:"User Authenticated"})
});


// @desc logOut  user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Log out user"})
});

// @desc getUserProfile  user
// route POST /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async(req,res) => {
    res.status(200).json({message:"User Authenticated"})
});

// @desc updateUserProfile  user
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async(req,res) => {
    res.status(200).json({message:"User Authenticated"})
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}