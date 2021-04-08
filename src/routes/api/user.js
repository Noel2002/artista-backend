import express from 'express';
import { login } from '../../controllers/user/login';
import { signup } from '../../controllers/user/signup';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;