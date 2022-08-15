import { ActionType, ChangeColorModePayload, ChangeTablessortCriteriaPayload } from "../typescript/types";
import { CHANGE_COLOR_MODE, RUN_TABLES_SEARCH, CHANGE_TABLES_SORT_CRITERIA, RUN_TABLES_FILTER } from "./action_types";

//export function changeColorMode(payload: ChangeColorModePayload):ActionType{
//    return({ type: CHANGE_COLOR_MODE, payload: payload })
//}
//
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