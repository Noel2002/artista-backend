import express from 'express';
import blogs from './api/blogs';


const router = express.Router();

router.use('/blogs', blogs);

export default router;