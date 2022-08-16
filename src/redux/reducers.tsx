import { Action, combineReducers } from "redux";

import { ActionType, TableFilterState } from "../typescript/types";

import TableClass from "../classes/Table";
import UserClass from "../classes/User";
import { ADD_COLOR_TO_TABLE, CHANGE_COLOR_MODE, CHANGE_TABLES_SORT_CRITERIA, CREATE_TABLE, DELETE_COLOR_FROM_TABLE, DELETE_TABLE, EDIT_COLOR_INSIDE_TABLE, EDIT_TABLE, LOGIN, LOGOUT, REGISTER, RUN_TABLES_FILTER, RUN_TABLES_SEARCH } from "./action_types";
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
    switch(action.type){
        case LOGIN:{
            return state;
        } 

        case REGISTER:{
            return state;
        }

        case LOGOUT: {
            return state;
        }

        case CREATE_TABLE: {
            let tableAlreadyExists = false;

            for(let i = 0; i < state.tables.length; i++){
                if(state.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase()){ //Table already exists
                    tableAlreadyExists = true;
                    break;
                }
            }
            
            if(!tableAlreadyExists){
                state.createTable(action.payload.tableName);
            }

            return state;
        }
        
        case EDIT_TABLE:{
            let tableAlreadyExists = false;

            for(let i = 0; i < state.tables.length; i++){
                if(state.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase() && state.tables[i].name !== action.payload.oldTableName ){
                    tableAlreadyExists = true;
                    console.log("already exists");
                    break;
                }
            }
            
            if(!tableAlreadyExists){
                for(let i = 0; i < state.tables.length; i++){
                    if(state.tables[i].name.toLowerCase() === action.payload.oldTableName.toLowerCase()){
                        state.tables[i].edit(action.payload.tableName);
                    }
                }
            }

            return state;
        }

        case DELETE_TABLE:{
            state.deleteTable(action.payload.tableName);
    
            return state;
        }

        case ADD_COLOR_TO_TABLE:{
            let colorAlreadyExistsInsideCurrentTable = false;

            for(let i = 0; i < state.tables.length; i++){
                if(state.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase()){
                    for(let j = 0; j < state.tables[i].colors.length; j++){
                        if(state.tables[i].colors[j].name.toLocaleLowerCase() === action.payload.color.name.toLowerCase()){
                            colorAlreadyExistsInsideCurrentTable = true;
                            console.log("Color already exists")
                            break;
                        }
                    }
                    break;
                }
            }

            if(!colorAlreadyExistsInsideCurrentTable){
                state.addColorToTable(action.payload.tableName, action.payload.color);
            }

            return state;
        }

        case EDIT_COLOR_INSIDE_TABLE:{
            let colorAlreayExistsInsideCurrentTable = false;

            for(let i = 0; i < state.tables.length; i++){
                if(state.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase()){
                    for(let j = 0; j < state.tables[i].colors.length; j++){
                        if(state.tables[i].colors[j].name.toLocaleLowerCase() === action.payload.color.name.toLowerCase() && state.tables[i].colors[j].name.toLocaleLowerCase() !== action.payload.oldColorName.toLowerCase()){
                            colorAlreayExistsInsideCurrentTable = true;
                            break;
                        }
                    }
                    break;
                }
            }
           
            if(!colorAlreayExistsInsideCurrentTable){
                console.log("Edit color");
                state.editColorInsideTable(action.payload.tableName, action.payload.oldColorName, action.payload.color);
            }

            return state;
        }

        case DELETE_COLOR_FROM_TABLE:{
            state.deleteColorFromTable(action.payload.tableName, action.payload.colorName);

            return state;
        }

        default: {
            return state;
        }
    }
}

export const rootReducer = combineReducers({tablesFilter: tablesFilter, user: user});