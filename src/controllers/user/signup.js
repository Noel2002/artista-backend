import models from '../../database/models';

export const signup=async (req, res, next)=>{
    try{

        const user = await  models.User.create(req.body);
        // console.log(user);
        return res.status(201).json({status:201, message: 'User created success', data: user});
    }
    catch(err){
        return res.status(500).json(error.stack);
    }
    

}