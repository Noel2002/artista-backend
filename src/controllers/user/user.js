import { getUserInfo } from "../../services/user";
import { getTokenData } from "../../utils/auth";
import { errorResponse } from "../../utils/errorResponse";
import models from '../../database/models';

  export const getSingleUser= async (req,res,next)=>{
      try {

        const {id} = req.params;
        const user = await getUserInfo(id);
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            user,

        });

      } catch (error) {
          return errorResponse(res, 500, {
              error: 'failed to retrieve the user',
              stack: error.stack
          })
      }
      
  };

  export const updateProfile= async (req,res,next)=>{
    try {
        const authHeaders= req.headers.authorization;
        const [authString, token] = authHeaders.split(" ");
        const user = getTokenData(token);
        const {id} = user;
        const update= await models.User.update(req.body, {where: {id}});        
        return res.status(200).json({
            status: 201,
            message:'User profile updated successfully',

        });

    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to update user profile',
            stack: error.stack
        })
    }
    
};