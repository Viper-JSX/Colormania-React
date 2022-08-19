import { users } from "../various_things/users";

export function checkNicknameExistance(nickname: string): boolean{
    let doesNotExist = true;

    for(let i = 0; i < users.length; i++){
        if(users[i].nickname.toLowerCase() === nickname.toLowerCase()){
            doesNotExist = false;
        }
    }

    return doesNotExist;
}