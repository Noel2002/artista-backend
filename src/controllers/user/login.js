import { getUserByEmail, updateRefreshToken } from "../../services/user"
import { comparePass, generateToken } from "../../utils/auth";
import { errorResponse } from "../../utils/errorResponse";


export const login = async (req,res,next)=>{
    const {email, password:pass} = req.body;
    const user = await getUserByEmail(email);
    if(user.error){
        return res.status(404).json({message: user.error});
    }
    const checkPass= await comparePass(pass, user.password);
    // console.log(checkPass);
    if(!checkPass){
        return res.status(400).json({message: "Wrong Password. Please try again!"});
    }
    const {id, username, email:userEmail, first_name, last_name, profile_picture}= user;
    const tokenData={
        id, 
        username, 
        email:userEmail, 
        first_name, 
        last_name, 
        profile_picture
    };
    const token= generateToken(tokenData);
    const updateToken= await updateRefreshToken(token, email);
    if( !updateToken ){
        return errorResponse(res,500,'Faliled to update refresh token')
    }
    return res.status(200).json({
        message: 'Log in successful',
        token,
        data: tokenData
    });
}