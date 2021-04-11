import models from '../database/models';
import { getUserById } from '../services/user';
import { getTokenData } from '../utils/auth';
import { errorResponse } from '../utils/errorResponse';

export const createBlog = async (req, res, next)=>{
    const [authString, token] = req.headers.authorization.split(' ');
    const user = getTokenData(token);
    // console.log(user);
    req.body.authorId= user.id;
    try {
        const blog= await models.Blog.create(req.body);
        return res.status(201).json({
            message:'Blog created successfuly',
            status: 201,
            blog,
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'failed to create blog',
            stack: error.stack
        })
    }
   
};

export const updateBlog = async (req, res, next)=>{
    const {id}= req.params;
    try {
        const findBlog = await models.Blog.findOne({where:{id}});
        if(!findBlog) return errorResponse(res, 404, 'Blog doesn\'t exist');
        const blog= await models.Blog.update(req.body, {where: {id}});
        return res.status(201).json({
            status: 201,
            message:'Blog updated successfuly',
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'failed to update blog',
            stack: error.stack
        })
    }
   
};

export const getBlogs = async (req, res, next)=>{
    try {
        const blogs= await models.Blog.findAll();
        const blogsInfo = await Promise.all( blogs.map(async (blog)=>{
            const {authorId}= blog;
            const userInfo= await getUserById(authorId);

            return{
                blogInfo: blog,
                authorInfo: userInfo,
            }
        }));
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            blogs: blogsInfo

        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to retrieve blogs',
            stack: error.stack
        })
    }
   
};
export const getSingleBlog = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const blog = await models.Blog.findOne({where:{id}});
        const {authorId}= blog;
        const userInfo= await getUserById(authorId);
        const blogInfo= {
            blogInfo: blog,
            authorInfo: userInfo,
       }
        return res.status(200).json({
            status: 200,
            message:'Operation performed sucessfully',
            blog: blogInfo

        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'Failed to retrieve blog',
            stack: error.stack
        })
    }
   
};

export const deleteBlog = async (req, res, next)=>{
    const {id}= req.params;
    try {
        const findBlog = await models.Blog.findOne({where:{id}});
        if(!findBlog) return errorResponse(res, 404, 'Blog doesn\'t exist');
        const blog= await models.Blog.destroy({where: {id}});
        return res.status(201).json({
            status: 201,
            message:'Blog deleted successfuly',
        })
    } catch (error) {
        return errorResponse(res, 500, {
            error: 'failed to delete blog',
            stack: error.stack
        })
    }
   
};