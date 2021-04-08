import express from 'express';
import blogs from './api/blogs';
import user from './api/user';


const router = express.Router();

router.use('/blogs', blogs);
router.use('/user', user);

export default router;