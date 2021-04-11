export const errorResponse = (res,status, error)=>{
    res.status(status).json({status, error})
}