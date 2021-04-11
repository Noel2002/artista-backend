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
        console.log(error.stack);
    }
};

export const getUserById = async (id)=>{
    try {
        const attributes= ["id","first_name", "last_name","username","profile_picture","email"]
      const user= await models.User.findOne({attributes, where: {id}, raw:true});  
      return user;
    } catch (error) {
        console.log(error.stack);
    }
};

 export const getUserInfo = async (id)=>{
    try {
        const attributes= ["id","first_name", "last_name","username","profile_picture","email","bio","dob"]
      const user= await models.User.findOne({attributes, where: {id}, raw:true});  
      return user;
    } catch (error) {
        console.log(error.stack);
    }
};
