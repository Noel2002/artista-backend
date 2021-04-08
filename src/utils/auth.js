import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword= async (pass)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPass= await bcrypt.hash(pass,salt);

    return hashedPass;
}

export const comparePass= async (plainPass,hashedPass)=>{
    const isValid= await bcrypt.compare(plainPass,hashedPass);
    return isValid;
}

export const generateToken = (payload)=>{
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: '7d'});
    // console.log(token);
    return token;
}

export const decodeToken = (token)=>{
    const decoded= jwt.verify(token);
}