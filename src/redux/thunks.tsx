import { ChangeColorModePayload, ChangeTablessortCriteriaPayload } from "../typescript/types";
import { CHANGE_COLOR_MODE, CHANGE_TABLES_SEARCH_TERM, CHANGE_TABLES_SORT_FILTER, RUN_TABLES_FILTER } from "./action_types";

export function chnageColorMode (payload: ChangeColorModePayload):any{
    return function(dispath : any): void{
        dispath({ type: CHANGE_COLOR_MODE, payload });
        dispath({ type: RUN_TABLES_FILTER });
    }
}

export function chnageTablessortCriteria (payload: ChangeTablessortCriteriaPayload):any{
    return function(dispath : any): void{
        dispath({ type: CHANGE_TABLES_SORT_FILTER, payload });
        dispath({ type: RUN_TABLES_FILTER });
    }
}


export function changeTablesSearchTerm (payload: string):any{
    return function(dispath : any): void{
        dispath({ type: CHANGE_TABLES_SEARCH_TERM, payload });
        dispath({ type: RUN_TABLES_FILTER });
    }
}

