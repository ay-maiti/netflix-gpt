export const checkEmail = (email)=>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email);
}

export const checkPassword = (password_txt)=>{
    const pw_length = password_txt.length;
    const isValid = pw_length > 4 && pw_length < 60
    return isValid;
}