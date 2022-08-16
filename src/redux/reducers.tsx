import { Action, combineReducers } from "redux";

import { ActionType, TableFilterState } from "../typescript/types";

import TableClass from "../classes/Table";
import UserClass from "../classes/User";
import { CHANGE_COLOR_MODE, CHANGE_TABLES_SORT_CRITERIA, RUN_TABLES_FILTER, RUN_TABLES_SEARCH } from "./action_types";
import initialColorTables from "../various_things/initial_color_tables";

function tablesFilter(state:TableFilterState = {colorMode: "rgb", sortBy: "name", searchTerm: "", filteredTables: initialColorTables}, action: ActionType):TableFilterState{
    switch(action.type){
        case CHANGE_COLOR_MODE:{
            return {...state, colorMode: action.payload.colorMode};
        }
        case CHANGE_TABLES_SORT_CRITERIA:{
            return {...state, sortBy: action.payload.sortCriteria };
        }
        case RUN_TABLES_SEARCH:{
            return { ...state, searchTerm: action.payload.searchTerm };
        }
        case RUN_TABLES_FILTER:{
            console.log(action)
            return { ...state, filteredTables: action.payload.tablesToFilter.filter((table: TableClass) => table.name.indexOf(state.searchTerm) >= 0) };
        }
        default:{
            return state;
        }
    }
}

function user(state: UserClass = new UserClass("stranger", "", ""), action: ActionType ):UserClass{
    console.log("User: ",action, state);
    //switch(action.type){
    //    //case 
    //}

    return state;
}

export const rootReducer = combineReducers({tablesFilter: tablesFilter, user: user});