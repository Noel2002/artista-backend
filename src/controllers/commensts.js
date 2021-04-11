import models from '../database/models';
import { errorResponse } from '../utils/errorResponse';

export const createComment = async (req, res, next)=>{
    try {
        const {blogId} = req.params;
        req.body.blogId= blogId;
        const Comment= await models.Comment.create(req.body);
        return res.status(201).json({
            message:'Comment created successfuly',
            status: 201,
            Comment,
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to create Comment',
            stack: error.stack
        })
    }
   
};

export const getComments = async (req, res, next)=>{
    try {
        const {blogId} = req.params;
        const Comments= await models.Comment.findAll({where: {blogId}});     
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            Comments

        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to retrieve Comments',
            stack: error.stack
        })
    }
   
};
export const getSingleComment = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const Comment = await models.Comment.findOne({where:{id}});
     
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            Comment

        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to retrieve Comment',
            stack: error.stack
        })
    }
   
};

export const deleteComment = async (req, res, next)=>{
    const {id}= req.params;
    try {
        const findComment = await models.Comment.findOne({where:{id}});
        if(!findComment) return errorResponse(res, 404, 'Comment doesn\'t exist');
        const Comment= await models.Comment.destroy({where: {id}});
        return res.status(201).json({
            status: 201,
            message:'Comment deleted successfuly',
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'failed to delete Comment',
            stack: error.stack
        })
    }
   
};