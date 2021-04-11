import models from '../database/models';
import { errorResponse } from '../utils/errorResponse';

export const createSkill = async (req, res, next)=>{
    try {
        const Skill= await models.Skill.create(req.body);
        return res.status(201).json({
            message:'Skill created successfuly',
            status: 201,
            Skill,
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to create Skill',
            stack: error.stack
        })
    }
   
};

export const updateSkill = async (req, res, next)=>{
    const {id}= req.params;
    try {
        const findSkill = await models.Skill.findOne({where:{id}});
        if(!findSkill) return errorResponse(res, 404, 'Skill doesn\'t exist');
        const Skill= await models.Skill.update(req.body, {where: {id}});
        return res.status(201).json({
            status: 201,
            message:'Skill updated successfuly',
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to update Skill',
            stack: error.stack
        })
    }
   
};

export const getSkills = async (req, res, next)=>{
    try {
        const page= (((req.query.page || 1) -1)*2);
        const Skills= await models.Skill.findAndCountAll({limit:6, offset: page})
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            Skills

        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to retrieve Skills',
            stack: error.stack
        })
    }
   
};
export const getSingleSkill = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const Skill = await models.Skill.findOne({where:{id}});
     
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            Skill

        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to retrieve Skill',
            stack: error.stack
        })
    }
   
};

export const deleteSkill = async (req, res, next)=>{
    const {id}= req.params;
    try {
        const findSkill = await models.Skill.findOne({where:{id}});
        if(!findSkill) return errorResponse(res, 404, 'Skill doesn\'t exist');
        const Skill= await models.Skill.destroy({where: {id}});
        return res.status(201).json({
            status: 201,
            message:'Skill deleted successfuly',
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'failed to delete Skill',
            stack: error.stack
        })
    }
   
};