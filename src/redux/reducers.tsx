import { combineReducers } from "redux";

import { ActionType, MessageState, TableFilterState, ThemeState, UserState } from "../typescript/types";

import UserClass from "../classes/User";
import { ADD_COLOR_TO_TABLE, CHANGE_COLOR_MODE, CHANGE_TABLES_SORT_CRITERIA, CHANGE_THEME, CREATE_TABLE, DELETE_COLOR_FROM_TABLE, DELETE_TABLE, EDIT_COLOR_INSIDE_TABLE, EDIT_TABLE, LOGIN, LOGOUT, REGISTER, RUN_TABLES_SEARCH, SET_MESSAGE } from "./action_types";
import { users } from "../various_things/users";
import { addItemToLocaleStorage } from "../api/add_item_to_locale_storage";
import { getGuestUserFromLocaleStorage } from "../api/get_guest_user_from_locale_storage";

function tablesFilter(state:TableFilterState = { sortBy: "name", searchTerm: ""}, action: ActionType):TableFilterState{
    switch(action.type){
        case CHANGE_TABLES_SORT_CRITERIA:{
            return {...state, sortBy: action.payload.sortCriteria };
        }
        case RUN_TABLES_SEARCH:{
            return { ...state, searchTerm: action.payload.searchTerm };
        }
        default:{
            return state;
        }
    }
}


function user(state: UserState = { user: getGuestUserFromLocaleStorage() ? getGuestUserFromLocaleStorage()! : new UserClass("stranger", "", "")  , forceUpdate: {} }, action: ActionType ):UserState{
    switch(action.type){
        case LOGIN:{
            let userFound = false;

            for(let i = 0; i < users.length; i++){
                if(users[i].login === action.payload.login && users[i].password === action.payload.password){
                    userFound = true;
                    return { user: users[i], forceUpdate: {} };
                }
            }

            return state;
        } 

        case REGISTER:{
            const newUser = new UserClass(action.payload.nickname, action.payload.login, action.payload.password);
            newUser.tables = state.user.tables;
            users.push(newUser);

            return {...state, user: newUser, forceUpdate: new Object()};
        }

        case LOGOUT: {
            const userFromLocaleStorage = getGuestUserFromLocaleStorage();

            if(userFromLocaleStorage){
                return {...state, user: userFromLocaleStorage};
            }
            else{
                return {...state, user: new UserClass("stranger", "", "")};
            }
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

            if(!state.user.authorized){
                addItemToLocaleStorage("guest_user", state.user);
            }

            return { ...state, forceUpdate: new Object() };
        }
        
        case EDIT_TABLE:{
            let tableAlreadyExists = false;

            for(let i = 0; i < state.user.tables.length; i++){
                if(state.user.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase() && state.user.tables[i].name !== action.payload.oldTableName ){
                    tableAlreadyExists = true;
                    break;
                }
            }
            
            if(!tableAlreadyExists){
                for(let i = 0; i < state.user.tables.length; i++){
                    if(state.user.tables[i].name.toLowerCase() === action.payload.oldTableName.toLowerCase()){
                        state.user.tables[i].edit(action.payload.tableName);
                    }
                }
                if(!state.user.authorized){
                    addItemToLocaleStorage("guest_user", state.user);
                }
            }


            return { ...state, forceUpdate: new Object() };
        }

        case DELETE_TABLE:{
            state.user.deleteTable(action.payload.tableName);

            if(!state.user.authorized){
                addItemToLocaleStorage("guest_user", state.user);
            }

            return { ...state, forceUpdate: new Object() };
        }

        case ADD_COLOR_TO_TABLE:{
            let colorAlreadyExistsInsideCurrentTable = false;
            for(let i = 0; i < state.user.tables.length; i++){
                if(state.user.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase()){
                    for(let j = 0; j < state.user.tables[i].colors.length; j++){
                        if(state.user.tables[i].colors[j].name.toLowerCase() === action.payload.color.name.toLowerCase()){
                            colorAlreadyExistsInsideCurrentTable = true;
                            break;
                        }
                    }
                    break;
                }
            }

            if(!colorAlreadyExistsInsideCurrentTable){
                state.user.addColorToTable(action.payload.tableName, action.payload.color);

                if(!state.user.authorized){
                    addItemToLocaleStorage("guest_user", state.user);
                }
            }

            return { ...state, forceUpdate: new Object() };
        }

        case EDIT_COLOR_INSIDE_TABLE:{
            let colorAlreayExistsInsideCurrentTable = false;

            for(let i = 0; i < state.user.tables.length; i++){
                if(state.user.tables[i].name.toLowerCase() === action.payload.tableName.toLowerCase()){
                    for(let j = 0; j < state.user.tables[i].colors.length; j++){
                        if(state.user.tables[i].colors[j].name.toLowerCase() === action.payload.colorName.toLowerCase() && state.user.tables[i].colors[j].name.toLowerCase() !== action.payload.oldColorName.toLowerCase()){
                            colorAlreayExistsInsideCurrentTable = true;
                            break;
                        }
                    }
                    break;
                }
            }
           
            if(!colorAlreayExistsInsideCurrentTable){
                state.user.editColorInsideTable(action.payload.tableName, action.payload.oldColorName, action.payload.colorName, action.payload.rgbValue);
                
                if(!state.user.authorized){
                    addItemToLocaleStorage("guest_user", state.user);
                }
            }

            return { ...state, forceUpdate: new Object() };
        }

        case DELETE_COLOR_FROM_TABLE:{
            state.user.deleteColorFromTable(action.payload.tableName, action.payload.colorName);
            
            if(!state.user.authorized){
                addItemToLocaleStorage("guest_user", state.user);
            }
            
            return { ...state, forceUpdate: new Object() };
        }

        default: {
            return state; //maybe use forceUpdate too
        }
    }
}

function theme(state: ThemeState = { themeName: "light"}, action:ActionType ){
    switch(action.type){
        case CHANGE_THEME:{
            return { ...state, themeName: action.payload.themeName };
        }
        default:{
            return state;
        }
    }
}

function message(state: MessageState = { messageText: "" }, action:ActionType){
    switch(action.type){
        case SET_MESSAGE:{
            return { ...state, messageText: action.payload.messageText };
        }
        default:{
            return state;
        }
    }
}

export const rootReducer = combineReducers({tablesFilter: tablesFilter, user: user, theme: theme, message: message});