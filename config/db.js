const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connection is successed")
}).catch((err)=>{
    console.log(err)
});

