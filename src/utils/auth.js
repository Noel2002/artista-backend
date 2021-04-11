import models from '../database/models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


export const hashPassword= async (pass)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPass= await bcrypt.hash(pass,salt);

    return hashedPass;
};

export const comparePass= async (plainPass,hashedPass)=>{
    const isValid= await bcrypt.compare(plainPass,hashedPass);
    return isValid;
}

export const generateToken = (payload)=>{
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: '7d'});
    // console.log(token);
    return token;
};

export const decodeToken = (token)=>{
    try {
        const decoded= jwt.verify(token,process.env.TOKEN_SECRET);
        return decoded;
    } catch (error) {
        console.log(error.stack);
    }
   
};

export const verifyUserToken = async (id, token)=>{
    try {
        const query = {
            attributes: ["id", "first_name", "last_name", "username"],
            where: { id, refreshtoken: token }
        };
        console.log(query);
        const user = await models.User.findOne({where:{id}});
        return user;
    } catch (error) {
        console.log(error.stack);
      
    }
};

export const getTokenData = (token)=>{
    try {
        const decoded= jwt.verify(token,process.env.TOKEN_SECRET);
        return decoded;
    } catch (error) {
       console.log(error.stack)
    }
};