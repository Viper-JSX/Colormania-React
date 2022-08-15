import { combineReducers } from "redux";
import TableClass from "../classes/Table";
import { ActionType, TableFilterState } from "../typescript/types";

const defaultTable = new TableClass("Initial table", new Date());

function tablesFilter(state:TableFilterState = {colorMode: "rgb", sortBy: "name", searchTerm: "", filteredTables: [defaultTable]}, action: ActionType):TableFilterState{
    return state;
}


export const rootReducer = combineReducers(tablesFilter);