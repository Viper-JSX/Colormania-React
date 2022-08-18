import { Action, combineReducers } from "redux";

import { ActionType, TableFilterState, UserState } from "../typescript/types";

import TableClass from "../classes/Table";
import UserClass from "../classes/User";
import { ADD_COLOR_TO_TABLE, CHANGE_COLOR_MODE, CHANGE_TABLES_SORT_CRITERIA, CREATE_TABLE, DELETE_COLOR_FROM_TABLE, DELETE_TABLE, EDIT_COLOR_INSIDE_TABLE, EDIT_TABLE, LOGIN, LOGOUT, REGISTER, RUN_TABLES_FILTER, RUN_TABLES_SEARCH } from "./action_types";
import initialColorTables from "../various_things/initial_color_tables";
import { users } from "../various_things/users";
import User from "../classes/User";

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

function user(state: UserState = { user: new UserClass("stranger", "", ""), forceUpdate: {} }, action: ActionType ):UserState{
    switch(action.type){
        case LOGIN:{
            console.log("Login")
            let userFound = false;

            for(let i = 0; i < users.length; i++){
                if(users[i].login === action.payload.login && users[i].password === action.payload.password){
                    userFound = true;
                    console.log("Found");
                    return { user: users[i], forceUpdate: {} };
                }
            }
            if(!userFound){
                console.log("Not Found");
            }

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

            for(let i = 0; i < state.user.tables.length; i++){
                if(state.user.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase()){ //Table already exists
                    tableAlreadyExists = true;
                    break;
                }
            }
            
            if(!tableAlreadyExists){
                state.user.createTable(action.payload.tableName);
            }

            return { ...state, forceUpdate: new Object() };
        }
        
        case EDIT_TABLE:{
            let tableAlreadyExists = false;

            for(let i = 0; i < state.user.tables.length; i++){
                if(state.user.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase() && state.user.tables[i].name !== action.payload.oldTableName ){
                    tableAlreadyExists = true;
                    console.log("already exists");
                    break;
                }
            }
            
            if(!tableAlreadyExists){
                for(let i = 0; i < state.user.tables.length; i++){
                    if(state.user.tables[i].name.toLowerCase() === action.payload.oldTableName.toLowerCase()){
                        state.user.tables[i].edit(action.payload.tableName);
                    }
                }
            }

            return { ...state, forceUpdate: new Object() };
        }

        case DELETE_TABLE:{
            state.user.deleteTable(action.payload.tableName);
    
            return { ...state, forceUpdate: new Object() };
        }

        case ADD_COLOR_TO_TABLE:{
            let colorAlreadyExistsInsideCurrentTable = false;

            for(let i = 0; i < state.user.tables.length; i++){
                if(state.user.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase()){
                    for(let j = 0; j < state.user.tables[i].colors.length; j++){
                        if(state.user.tables[i].colors[j].name.toLocaleLowerCase() === action.payload.color.name.toLowerCase()){
                            colorAlreadyExistsInsideCurrentTable = true;
                            console.log("Color already exists")
                            break;
                        }
                    }
                    break;
                }
            }

            if(!colorAlreadyExistsInsideCurrentTable){
                state.user.addColorToTable(action.payload.tableName, action.payload.color);
            }

            return { ...state, forceUpdate: new Object() };
        }

        case EDIT_COLOR_INSIDE_TABLE:{
            let colorAlreayExistsInsideCurrentTable = false;

            for(let i = 0; i < state.user.tables.length; i++){
                if(state.user.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase()){
                    for(let j = 0; j < state.user.tables[i].colors.length; j++){
                        if(state.user.tables[i].colors[j].name.toLocaleLowerCase() === action.payload.color.name.toLowerCase() && state.user.tables[i].colors[j].name.toLocaleLowerCase() !== action.payload.oldColorName.toLowerCase()){
                            colorAlreayExistsInsideCurrentTable = true;
                            break;
                        }
                    }
                    break;
                }
            }
           
            if(!colorAlreayExistsInsideCurrentTable){
                console.log("Edit color");
                state.user.editColorInsideTable(action.payload.tableName, action.payload.oldColorName, action.payload.color);
            }

            return { ...state, forceUpdate: new Object() };
        }

        case DELETE_COLOR_FROM_TABLE:{
            state.user.deleteColorFromTable(action.payload.tableName, action.payload.colorName);

            return { ...state, forceUpdate: new Object() }//state; //users[0];
        }

        default: {
            return state;
        }
    }
}

export const rootReducer = combineReducers({tablesFilter: tablesFilter, user: user});