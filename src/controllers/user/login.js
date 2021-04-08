import { getUserByEmail, updateRefreshToken } from "../../services/user"
import { comparePass, generateToken } from "../../utils/auth";


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
    const {password, ...tokenData}= user;
    const token= generateToken(tokenData);
    const updateToken= await updateRefreshToken(token, email);
    if( updateToken.error){
        return res.status(500).json(updateToken);
    }
    return res.status(200).json({
        message: 'Log in successful',
        token,
        data: tokenData
    });
}