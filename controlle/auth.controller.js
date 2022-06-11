const User = require('../modlels/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userRegister =async (req,res)=>{
   try{
     const { name, age, email, password , role} = req.body;




     if(!(name && age && email && password)){
         res.status(400).send("all input is required...")
     }

 
     const olduser = await User.findOne({email});

     if(olduser){
         return res.status(409).send("User Alredy Exist please login")
     }

     encryptPassword = await bcrypt.hash(password,10);


     // create user in database
    
       const user = await User.create({
        name,
        age,
        role,
        email: email.toLowerCase(),
        password:encryptPassword,
       })

       //create token

       const token = jwt.sign({
           user_id:user._id,email},
           process.env.TOKEN_KEY,
           {
            expiresIn:"1d",
           });


       // save user token
       user.token = token;

       //return new user
       res.status(200).json(user);

   }catch(err){
       res.send()
   }
  
}


const userLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;

        if(!(email && password)){
            res.status(400).send("All input is  Required...")
        }

        const user = await User.findOne({email})

        if(user && (await bcrypt.compare(password,user.password))){


            const token = jwt.sign({
                user_id:user._id,email
            },
             process.env.TOKEN_KEY,
             {
                 expiresIn:"1d"
             }
            );

            //save user token;

            user.token = token;

            //user

            res.status(200).json(user);
        }
        res.status(400).send("Invalid user..")
    }catch(err){
        res.send()
    }
}





module.exports = {userRegister,userLogin}