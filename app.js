const express = require('express')
require('dotenv').config()
require('./config/db')
const cors = require('cors')

// create app
const app = express()
const Port = process.env.PORT || 3000
const routes = require('./routers/user.route')
const authroute = require('./routers/auther.routes')



//using cors

app.use(cors({origin:'http://localhost:4200'}))


// middleware
app.use(express.json())

//use router in app
app.use('/',routes)
app.use('/',authroute)

app.listen(Port,()=> console.log(`Server runing on port ${Port}`))