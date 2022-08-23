import { checkNicknameExistance } from "../api/check_nickname_existance";
import { validateLogin } from "../api/validate_login";
import { validatePassword } from "../api/validate_password";
import { messageShowTime } from "../app_config/app_config";
import { AddColorToTablePayload, ChangeTablesSearcTermhPayload, ChangeTablesSortCriteriaPayload, CreateTablePayload, DeleteColorFromTablePayload, DeleteTablePayload, EditColorInsideTablePayload, EditTablePayload, UserLoginPayload, UserRegisterPayload } from "../typescript/types";
import { users } from "../various_things/users";
//import { setMessage } from "./action_functions";
import { RUN_TABLES_SEARCH, CHANGE_TABLES_SORT_CRITERIA, CREATE_TABLE, EDIT_TABLE, DELETE_TABLE, ADD_COLOR_TO_TABLE, EDIT_COLOR_INSIDE_TABLE, DELETE_COLOR_FROM_TABLE, LOGIN, REGISTER, SET_MESSAGE } from "./action_types";

//-------------------------Tables filter---------------------------//


export function changeTablesSortCriteria (payload: ChangeTablesSortCriteriaPayload):any{
    return function(dispatch : any): void{
        dispatch({ type: CHANGE_TABLES_SORT_CRITERIA, payload });
    }
}


export function changeTablesSearchTerm (payload: ChangeTablesSearcTermhPayload):any{
    return function(dispatch : any): void{
        dispatch({ type: RUN_TABLES_SEARCH, payload });
    }
}



//-------------------------User-----------------------------//

export function login(payload: UserLoginPayload):any{
    return function(dispatch:any):void{
        for(let i = 0; i < users.length; i++){
            if(users[i].login === payload.login.toLowerCase() && users[i].password === payload.password.toLowerCase()){
                dispatch({ type: LOGIN, payload: { login: payload.login, password: payload.password } });
                console.log("Logging in...");
                return;
            }   
        }

        dispatch(setMessage({ messageText: "Wrong login or password" }));
    }
}

export function register(payload: UserRegisterPayload):any{
    return function(dispatch: any){
        const userNicknameDoesNotExist = checkNicknameExistance(payload.nickname);
        const loginIsValidAndDoesNotExist = validateLogin(payload.login);
        const passwordIsValid = validatePassword(payload.password);


        if(userNicknameDoesNotExist && loginIsValidAndDoesNotExist && passwordIsValid){
            const lowerCasedPayload:UserRegisterPayload = { ...payload };
            lowerCasedPayload.login = payload.login.toLowerCase();
            lowerCasedPayload.password = payload.password.toLowerCase();

            console.log(lowerCasedPayload)
            dispatch({ type: REGISTER, payload: lowerCasedPayload });
        }
        
        else if(!userNicknameDoesNotExist){
            dispatch(setMessage({ messageText: `Nickname ${payload.nickname} is already taken` }));
        }
        else if(!loginIsValidAndDoesNotExist){
            dispatch(setMessage({ messageText: `Login ${payload.login} is invalid or already taken` }));
        }
        else if(!passwordIsValid){
            dispatch(setMessage({ messageText: `Password ${payload.login} is invalalid, password must be at least 8 characters long and contain numbers` }));
        }
        else{
            console.log("Unknown message");
            dispatch(setMessage({ messageText: `Unknown message` }));
        }

    }
}

export function createTable(payload: CreateTablePayload):any{
    return function (dispatch: any):void{
        //for(let i = 0; i < tables)

        dispatch({ type: CREATE_TABLE, payload });
    }
}

export function editTable(payload: EditTablePayload):any{
    return function (dispatch: any):void{
        dispatch({ type: EDIT_TABLE, payload });
    }
}

export function deleteTable(payload: DeleteTablePayload):any{
    return function (dispatch: any):void{
        dispatch({ type: DELETE_TABLE, payload });
    }
}


export function addColorToTable(payload: AddColorToTablePayload):any{
    return function(dispatch: any){
        dispatch({ type: ADD_COLOR_TO_TABLE, payload });
    }
}

export function editColorInsideTable(payload: EditColorInsideTablePayload):any{
    return function(dispatch: any){
        dispatch({ type: EDIT_COLOR_INSIDE_TABLE, payload });
    }
}

export function deleteColorFromTable(payload: DeleteColorFromTablePayload):any{
    return function(dispatch: any){
        dispatch({ type: DELETE_COLOR_FROM_TABLE, payload });
    }
}

export function setMessage(payload: { messageText: string }):any{
    return function(dispatch: any):void{
        dispatch({ type: SET_MESSAGE, payload });

        setTimeout(() => dispatch({ type: SET_MESSAGE, payload: {...payload, messageText: ""} }), messageShowTime);
    }
}