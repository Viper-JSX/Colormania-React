import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { checkNicknameExistance } from "../api/check_nickname_existance";
import { validateLogin } from "../api/validate_login";
import { validatePassword } from "../api/validate_password";
import { messageShowTime } from "../app_config/app_config";
import { AddColorToTablePayload, ChangeTablesSearcTermhPayload, ChangeTablesSortCriteriaPayload, CreateTablePayload, DeleteColorFromTablePayload, DeleteTablePayload, EditColorInsideTablePayload, EditTablePayload, UserLoginPayload, UserRegisterPayload } from "../typescript/types";
import { users } from "../various_things/users";
import { RUN_TABLES_SEARCH, CHANGE_TABLES_SORT_CRITERIA, CREATE_TABLE, EDIT_TABLE, DELETE_TABLE, ADD_COLOR_TO_TABLE, EDIT_COLOR_INSIDE_TABLE, DELETE_COLOR_FROM_TABLE, LOGIN, REGISTER, SET_MESSAGE } from "./action_types";

//-------------------------Tables filter---------------------------//


export function changeTablesSortCriteria (payload: ChangeTablesSortCriteriaPayload):any{
    return function(dispatch: ThunkDispatch<{}, {}, AnyAction>): void{
        dispatch({ type: CHANGE_TABLES_SORT_CRITERIA, payload });
    }
}


export function changeTablesSearchTerm (payload: ChangeTablesSearcTermhPayload):any{
    return function(dispatch : ThunkDispatch<{}, {}, AnyAction>): void{
        dispatch({ type: RUN_TABLES_SEARCH, payload });
    }
}



//-------------------------User-----------------------------//

export function login(payload: UserLoginPayload):any{
    return function(dispatch: ThunkDispatch<{}, {}, AnyAction>):void{
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
    return function(dispatch: ThunkDispatch<{}, {}, AnyAction>){
                const lowerCasedPayload:UserRegisterPayload = { ...payload };
                lowerCasedPayload.login = payload.login.toLowerCase();
                lowerCasedPayload.password = payload.password.toLowerCase();

                console.log(lowerCasedPayload)
                dispatch({ type: REGISTER, payload: lowerCasedPayload });
            }
}

export function createTable(payload: CreateTablePayload):any{
    return function (dispatch: ThunkDispatch<{}, {}, AnyAction>):void{
        dispatch({ type: CREATE_TABLE, payload });
    }
}

export function editTable(payload: EditTablePayload):any{
    return function (dispatch: ThunkDispatch<{}, {}, AnyAction>):void{
        dispatch({ type: EDIT_TABLE, payload });
    }
}

export function deleteTable(payload: DeleteTablePayload):any{
    return function (dispatch: ThunkDispatch<{}, {}, AnyAction>):void{
        dispatch({ type: DELETE_TABLE, payload });
    }
}


export function addColorToTable(payload: AddColorToTablePayload):any{
    return function(dispatch: ThunkDispatch<{}, {}, AnyAction>){
        dispatch({ type: ADD_COLOR_TO_TABLE, payload });
    }
}

export function editColorInsideTable(payload: EditColorInsideTablePayload):any{
    return function(dispatch: ThunkDispatch<{}, {}, AnyAction>){
        dispatch({ type: EDIT_COLOR_INSIDE_TABLE, payload });
    }
}

export function deleteColorFromTable(payload: DeleteColorFromTablePayload):any{
    return function(dispatch: ThunkDispatch<{}, {}, AnyAction>){
        dispatch({ type: DELETE_COLOR_FROM_TABLE, payload });
    }
}

export function setMessage(payload: { messageText: string }):any{
    return function(dispatch: ThunkDispatch<{}, {}, AnyAction>):void{
        dispatch({ type: SET_MESSAGE, payload });

        setTimeout(() => dispatch({ type: SET_MESSAGE, payload: {...payload, messageText: ""} }), messageShowTime);
    }
}