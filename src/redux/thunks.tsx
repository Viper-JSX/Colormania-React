import { ChangeColorModePayload, ChangeTablesSearcTermhPayload, ChangeTablesSortCriteriaPayload, CreateTablePayload, DeleteTablePayload, EditTablePayload } from "../typescript/types";
import { CHANGE_COLOR_MODE, RUN_TABLES_SEARCH, CHANGE_TABLES_SORT_CRITERIA, RUN_TABLES_FILTER, CREATE_TABLE, EDIT_TABLE, DELETE_TABLE } from "./action_types";

//-------------------------Tables filter---------------------------//

export function chnageColorMode (payload: ChangeColorModePayload):any{
    return function(dispath : any): void{
        dispath({ type: CHANGE_COLOR_MODE, payload });
        dispath({ type: RUN_TABLES_FILTER, payload });
    }
}

export function changeTablesSortCriteria (payload: ChangeTablesSortCriteriaPayload):any{
    return function(dispath : any): void{
        dispath({ type: CHANGE_TABLES_SORT_CRITERIA, payload });
        dispath({ type: RUN_TABLES_FILTER, payload });
    }
}


export function changeTablesSearchTerm (payload: ChangeTablesSearcTermhPayload):any{
    return function(dispath : any): void{
        dispath({ type: RUN_TABLES_SEARCH, payload });
        dispath({ type: RUN_TABLES_FILTER, payload });
    }
}



//-------------------------User-----------------------------//

export function createTable(payload: CreateTablePayload):any{
    return function (dispatch: any):void{
        dispatch({ type: CREATE_TABLE, payload });
        dispatch({ type: RUN_TABLES_FILTER, payload });
    }
}

export function editTable(payload: EditTablePayload):any{
    return function (dispatch: any):void{
        dispatch({ type: EDIT_TABLE, payload });
        dispatch({ type: RUN_TABLES_FILTER, payload });
    }
}

export function deleteTable(payload: DeleteTablePayload):any{
    return function (dispatch: any):void{
        dispatch({ type: DELETE_TABLE });
        dispatch({ type: RUN_TABLES_FILTER, payload });
    }
}