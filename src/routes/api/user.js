import express from 'express';
import { signup } from '../../controllers/user/signup';

const router = express.Router();

router.post('/signup', signup);

export default router;