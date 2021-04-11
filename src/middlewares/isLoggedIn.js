import { decodeToken } from '../utils/auth';
import {errorResponse} from '../utils/errorResponse';
import models from '../database/models';
export const isLoggedIn = async(req,res,next)=>{

    if(!req.headers.authorization) {
        return errorResponse(res, 403,'No headers found');
    }

    const authHeader = req.headers.authorization.split(' ');
    const [authString, token] = authHeader;

    if(authString !== 'Bearer'){
        return errorResponse(res, 403,'No auth headers found');
    }

    if (!token) {
        return errorResponse(res, 403,'No token found');
    }

    const decodedToken = decodeToken(token);
    // console.log(decodedToken);
    if (!decodedToken){
        return errorResponse(res, 403, {message:'token cannot be decoded'});
    }

    // console.log(models);
    const user = await verifyUserToken(decodedToken.id, token);
    // console.log('user verified',user);
    if(!user){
        return errorResponse(res, 403, 'You are not logged in. Please Login!');
    }
   


    return next();
};

export const verifyUserToken = async (id, token)=>{
    try {
        const query = {
            attributes: ["id", "first_name", "last_name", "username"],
            where: { id, refreshtoken: token }
        };
        // console.log(query);
        const user = await models.User.findOne({where:{refreshToken:token,id},raw:true});
        return user;
    } catch (error) {
        console.log(error.stack);
      
    }
}
