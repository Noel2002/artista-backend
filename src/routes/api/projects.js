import express from 'express';
import { createProject, deleteProject, getProjects, getSingleProject, updateProject } from '../../controllers/projects';
import { isLoggedIn } from '../../middlewares/isLoggedIn';

const router = express.Router();


router.post('/', isLoggedIn, createProject);
router.patch('/:id', isLoggedIn, updateProject);
router.get('/', getProjects);
router.get('/:id', getSingleProject);
router.delete('/:id', isLoggedIn, deleteProject);
export default router;