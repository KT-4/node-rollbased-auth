const express = require('express')
const router = express.Router()
const {createUser,getUser,getsingleUser,updateUser,deleteUser} = require('../controlle/user.controller')
const auth = require('../middlewares/auth')

// Create a User


router.post('/users',createUser)

// Get all user
  
router.get('/users',getUser)

// Get single User
   
router.get('/users/:id',getsingleUser)

// Update a User

router.patch('/users/:id',updateUser)


// Delete a User


router.delete('/users/:id',deleteUser)



module.exports = router