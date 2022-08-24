import { ActionType, ChangeTablesSortCriteriaPayload, ChangeThemePayload } from "../typescript/types";
import { LOGOUT, CHANGE_THEME } from "./action_types";

export function logout():ActionType{
    return { type: LOGOUT };
}

export function changeTheme(payload : ChangeThemePayload):ActionType{
    return { type: CHANGE_THEME, payload }
}
