import express from 'express';

const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({status: 200, message: 'blogs route is reached'});
});

export default router;