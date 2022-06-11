const {userRegister,userLogin} = require('../controlle/auth.controller')



const express = require('express')
const router = express.Router()


router.post('/register',userRegister)
router.post('/login',userLogin)




module.exports = router