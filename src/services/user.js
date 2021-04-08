import models from '../database/models';

export const getUserByEmail = async (email)=>{
    try{
        const user = await models.User.findOne( {where: {email},raw:true});
        // console.log(user);
        if(!user){
            return {
                error: 'user not found',
            }
        }
        return user;
        
    }
    catch(err){
        console.log(err.stack);

    }
    
}

export const updateRefreshToken = async (token,email)=>{
    try {
      const user= await models.User.update({refreshToken:token}, {where: {email}, raw:true});  
      return {
          success: true,
          user,
      }
    } catch (error) {
        return {
            error: "failed to update token",
            stack: error.stack || error.message
        }
    }
}