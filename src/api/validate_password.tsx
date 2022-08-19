export function validatePassword(password: string):boolean{
    let isValid:boolean = true;
    if(password.length < 8) isValid = false;

    return isValid;
}
