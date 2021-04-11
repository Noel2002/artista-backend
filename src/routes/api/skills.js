import express from 'express';
import { createSkill, deleteSkill, getSingleSkill, getSkills, updateSkill } from '../../controllers/skills';
import { isLoggedIn } from '../../middlewares/isLoggedIn';

const router = express.Router();


router.post('/', isLoggedIn, createSkill);
router.patch('/:id', isLoggedIn, updateSkill);
router.get('/', getSkills);
router.get('/:id', getSingleSkill);
router.delete('/:id', isLoggedIn, deleteSkill);
export default router;