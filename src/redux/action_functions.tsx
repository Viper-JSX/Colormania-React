import UserClass from "../classes/User";
import { ActionType, ChangeTablesSortCriteriaPayload, ChangeThemePayload } from "../typescript/types";
import { CHANGE_COLOR_MODE, RUN_TABLES_SEARCH, CHANGE_TABLES_SORT_CRITERIA, REGISTER, LOGIN, LOGOUT, CHANGE_THEME } from "./action_types";

//export function login(payload: UserLogin){ //You may need to create a thunk, to dispatch RUN_TABLES_FILTER, cause old guest tables may remain untill first filter change
//    return { type: LOGIN, payload: payload};
//}
//
//export function register(payload: UserRegister):ActionType{
//    return { type: REGISTER, payload: payload};
//}

export function logout():ActionType{
    return { type: LOGOUT };
}

export function changeTheme(payload : ChangeThemePayload):ActionType{
    return { type: CHANGE_THEME, payload }
}


//export function changeTablessortCriteria(payload: ChangeTablessortCriteriaPayload):ActionType{
//    return { type: CHANGE_TABLES_SORT_FILTER, payload: payload };
//}
//
//export function changeTablesSearchTerm(payload: string){
//    return { type: RUN_TABLES_SEARCH, payload: payload };
//}
//
//export function runTablesFilter():ActionType{
//    return { type: RUN_TABLES_FILTER };
//}