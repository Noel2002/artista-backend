import express from 'express';
import blogs from './api/blogs';
import user from './api/user';
import projects from './api/projects';
import skills from './api/skills';
import comments from './api/comments';


const router = express.Router();

router.use('/blogs', blogs);
router.use('/user', user);
router.use('/projects', projects);
router.use('/skills', skills);
router.use('/comments', comments);

export default router;