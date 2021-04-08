import bcrypt from 'bcrypt';

export const hashPassword= async (pass)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPass= await bcrypt.hash(pass,salt);

    return hashedPass;
}

export const comparePass= async (plainPass,hashedPass)=>{
    const isValid= await bcrypt.compare(plainPass,hashedPass);

    return isValid;
}