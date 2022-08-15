import { ChangeColorModePayload, ChangeTablessortCriteriaPayload } from "../typescript/types";
import { CHANGE_COLOR_MODE, RUN_TABLES_SEARCH, CHANGE_TABLES_SORT_CRITERIA, RUN_TABLES_FILTER } from "./action_types";

export function chnageColorMode (payload: ChangeColorModePayload):any{
    return function(dispath : any): void{
        dispath({ type: CHANGE_COLOR_MODE, payload });
        dispath({ type: RUN_TABLES_FILTER });
    }
}

export function chnageTablessortCriteria (payload: ChangeTablessortCriteriaPayload):any{
    return function(dispath : any): void{
        dispath({ type: CHANGE_TABLES_SORT_CRITERIA, payload });
        dispath({ type: RUN_TABLES_FILTER });
    }
}


export function changeTablesSearchTerm (payload: string):any{
    return function(dispath : any): void{
        dispath({ type: RUN_TABLES_SEARCH, payload });
        dispath({ type: RUN_TABLES_FILTER });
    }
}

