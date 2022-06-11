const Users = require('../modlels/user.model')


const createUser = async (req,res)=>{
    try{
        const user = new Users(req.body)
        user.save()
        res.status(201).send(user)

    }catch(e){
        res.status(500).send(e)  
    }
}


const getUser = async(req,res)=>{
    try{
        const user = await Users.find({})
        res.status(200).send(user)
    }catch(e){
         res.status(501).send(e)
    }
}

const getsingleUser = async(req,res)=>{
    try{
        const user = await Users.findById(req.params.id)
        res.status(200).send(user)
    }catch(e){
        res.status(501).send(e)
    }
}

const updateUser =  async(req,res)=>{
    try{
        const user = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send(user)
    }catch(e){
         res.status(501).send(e)
    }
}

const deleteUser = async(req,res)=>{
    try{
        const user = await Users.findByIdAndDelete(req.params.id)
        res.status(200).send(user)
    }catch(e){
         res.status(501).send(e)
    }
}


module.exports = {createUser,getUser,getsingleUser,updateUser,deleteUser}