import express from 'express';
import { createBlog, getBlogs, updateBlog, getSingleBlog, deleteBlog } from '../../controllers/blogs';
import { isLoggedIn } from '../../middlewares/isLoggedIn';

const router = express.Router();


router.post('/', isLoggedIn, createBlog);
router.patch('/:id', isLoggedIn, updateBlog);
router.get('/', getBlogs);
router.get('/:id', getSingleBlog);
router.delete('/:id', isLoggedIn, deleteBlog);
export default router;