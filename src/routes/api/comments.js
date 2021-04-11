import express from 'express';
import { createComment, deleteComment, getComments, getSingleComment } from '../../controllers/commensts';
import { isLoggedIn } from '../../middlewares/isLoggedIn';

const router = express.Router();


router.post('/:blogId', createComment);
router.get('/:blogId', getComments);
router.get('/commment/:id', getSingleComment);
router.delete('/:id', isLoggedIn, deleteComment);
export default router;