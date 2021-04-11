import models from '../database/models';
import { getUserById } from '../services/user';
import { getTokenData } from '../utils/auth';
import { errorResponse } from '../utils/errorResponse';

export const createProject = async (req, res, next)=>{

    try {
        const project= await models.Project.create(req.body);
        return res.status(201).json({
            message:'Project created successfuly',
            status: 201,
            project,
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'failed to create Project',
            stack: error.stack
        })
    }
   
};

export const updateProject = async (req, res, next)=>{
    const {id}= req.params;
    try {
        const findProject = await models.Project.findOne({where:{id}});
        if(!findProject) return errorResponse(res, 404, 'Project doesn\'t exist');
        const Project= await models.Project.update(req.body, {where: {id}});
        return res.status(201).json({
            status: 201,
            message:'Project updated successfuly',
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to update Project',
            stack: error.stack
        })
    }
   
};

export const getProjects = async (req, res, next)=>{
    try {
        const page= (((req.query.page || 1) -1)*2);
        const projects= await models.Project.findAndCountAll({limit:2, offset: page});
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            projects

        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to retrieve Projects',
            stack: error.stack
        })
    }
   
};
export const getSingleProject = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const project = await models.Project.findOne({where:{id}});
     
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            project

        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to retrieve Project',
            stack: error.stack
        })
    }
   
};

export const deleteProject = async (req, res, next)=>{
    const {id}= req.params;
    try {
        const findProject = await models.Project.findOne({where:{id}});
        if(!findProject) return errorResponse(res, 404, 'Project doesn\'t exist');
        const project= await models.Project.destroy({where: {id}});
        return res.status(201).json({
            status: 201,
            message:'Project deleted successfuly',
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'failed to delete Project',
            stack: error.stack
        })
    }
   
};