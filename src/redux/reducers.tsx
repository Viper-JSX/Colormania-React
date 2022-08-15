import { combineReducers } from "redux";

import { ActionType, TableFilterState } from "../typescript/types";

import TableClass from "../classes/Table";
import UserClass from "../classes/User";
import { CHANGE_COLOR_MODE } from "./action_types";

const defaultTable = new TableClass("Initial table", new Date());

function tablesFilter(state:TableFilterState = {colorMode: "rgb", sortBy: "name", searchTerm: "", filteredTables: [defaultTable]}, action: ActionType):TableFilterState{
    switch(action.type){
        case CHANGE_COLOR_MODE:{
            return {...state, colorMode: action.payload};
        }
        default:{
            return state;
        }
    }
}

function user(state: UserClass = new UserClass("stranger", "", "", [defaultTable]), action: ActionType ):UserClass{
    return state;
}

export const rootReducer = combineReducers({tablesFilter: tablesFilter, user: user});