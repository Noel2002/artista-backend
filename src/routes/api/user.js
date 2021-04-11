import express from 'express';
import { login } from '../../controllers/user/login';
import { signup } from '../../controllers/user/signup';
import { getSingleUser, updateProfile } from '../../controllers/user/user';
import { isLoggedIn } from '../../middlewares/isLoggedIn';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/:id', getSingleUser);
router.patch('/:id',isLoggedIn, updateProfile);


export default router;