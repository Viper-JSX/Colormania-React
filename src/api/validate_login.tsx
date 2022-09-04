import { users } from "../various_things/users";

export function validateLogin(login: string):boolean{
    let isValid:boolean = true;

    if(login.length < 8){
        isValid = false;
    }

    for(let i = 0; i < users.length; i++){
        if(users[i].login === login.toLowerCase()){
            isValid = false;
            break;
        }
    }
    return isValid
}