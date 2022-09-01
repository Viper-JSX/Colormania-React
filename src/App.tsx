import "./css/App.css";
//import "./css/dark.css"

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { changeTablesSearchTerm, changeTablesSortCriteria, createTable, editColorInsideTable, editTable, addColorToTable, deleteColorFromTable, login as doLogin, register as doRegister, setMessage, deleteTable } from './redux/thunks';

import { addItemToLocaleStorage } from './api/add_item_to_locale_storage';
import { getGuestUserFromLocaleStorage } from './api/get_guest_user_from_locale_storage';

import Layout from './components/Layout/Layout';
import filterTables from './api/filter_tables';
import ColorClass from './classes/Color';
import { AddColorToTableParams, DeleteTablePayload, EditColorParams, HandleTableEditParams, LoginData, RegisterData } from './typescript/types';
import { useNavigate } from 'react-router';
import { changeTheme, logout as doLogout } from './redux/action_functions';
import { forEachChild } from "typescript";
import { stringToUrl } from "./api/string_to_url";
import { SET_MESSAGE } from "./redux/action_types";

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.user);
    const tablesToRender = useSelector((state: any) => filterTables({ tables: state.user.user.tables, filterOptions: state.tablesFilter }));    
    const message = useSelector((state:any) => state.message);
    const themeName = useSelector((state:any) => state.theme.themeName);
    const navigate = useNavigate();

    useSelector((state:any) => console.log(state.theme));

    useEffect(() => {
        if(!getGuestUserFromLocaleStorage() && !user.authorized){
            addItemToLocaleStorage("guest_user", user);
        }
    }, []);

    function showMessage(messageText: string){
        dispatch(setMessage({ messageText }));
    }

    function handleTablesSortCriteriaChnage(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "name" || event.target.value === "date"){
            console.log("in handlerdd", event.target)
            dispatch(changeTablesSortCriteria({ sortCriteria: event.target.value }));
        }
    }

    function handleTableCreate({ tableName } : { tableName: string }):void{
        let tableAlreadyExists = false;

        if(!tableName){
            showMessage("Table must have a name");
            return;
        }

        for(let i = 0; i < user.tables.length; i++){
            if(user.tables[i].name.toLowerCase() === tableName.toLowerCase()){
                tableAlreadyExists = true;
                break;
            }
        }

        if(tableAlreadyExists){
            showMessage("Table with such name already exists");
        }

        navigate("/tables");
        dispatch(createTable({ tableName }));
    }

    function handleTablesSearch(event: React.ChangeEvent<HTMLInputElement>){
        dispatch(changeTablesSearchTerm({ searchTerm: event.target.value }))
    }

    function handleTableEdit({ oldTableName, tableName} : HandleTableEditParams):void{
        let tableAlreadyExists = false;

        if(!tableName){
            showMessage("Table must have a name");
            return;
        }

        if(oldTableName.toLowerCase() !== tableName.toLowerCase()){ //Table name has been changed
            for(let i = 0; i < user.tables.length; i++){
                if(user.tables[i].name.toLowerCase() === tableName.toLowerCase()){
                    tableAlreadyExists = true;
                    break;
                }
            }
        }

        if(tableAlreadyExists){
            showMessage("Table with such name already exists");
            return;
        }

        dispatch(editTable({ oldTableName, tableName }));
        navigate("/tables");
    }

    function handleTableDelete({ tableName } : DeleteTablePayload):void{
        dispatch(deleteTable({ tableName }));

        setTimeout(() => navigate("/tables"), 10);
    }

    function handleAddColorToTable({ tableName, colorName, rgbValue } : AddColorToTableParams):void{
        let colorAlreadyExists = false;

        if(!colorName){
            showMessage("Color must have a name");
            return;
        }

        for(let i = 0; i < user.tables.length; i++){
            if(user.tables[i].name.toLowerCase() === tableName.toLowerCase()){
                for(let j = 0; j < user.tables[i].colors.length; j++){
                    if(user.tables[i].colors[j].name.toLowerCase() === colorName){
                    colorAlreadyExists = true;  
                    console.log("Exists");
                    break;  
                    }
                }
                break;
            }
        }
    
        if(colorAlreadyExists){
            console.log("not Exists");
            showMessage("Color with such name already exists inside this table");
            return;
        }

        const color = new ColorClass(colorName, rgbValue);
        dispatch(addColorToTable({ tableName, color }));
        navigate(`/tables/${stringToUrl(tableName)}`);
    }

    function handleColorEdit({ tableName, oldColorName, colorName, rgbValue } : EditColorParams):void{
        let colorAlreadyExists = false;

        if(!colorName){
            showMessage("Color must have a name");
            return;
        }

        if(oldColorName.toLowerCase() !== colorName.toLowerCase()){ //Color name has been changed
            for(let i = 0; i < user.tables.length; i++){
                console.log("Exists");
                if(user.tables[i].name.toLowerCase() === tableName.toLowerCase()){
                    for(let j = 0; j < user.tables[i].colors.length; j++){
                        if(user.tables[i].colors[j].name.toLowerCase() === colorName.toLowerCase()){
                        colorAlreadyExists = true;  
                        break;  
                        }
                    }
                    break;
                }
            }
        }
    
        if(colorAlreadyExists){
            showMessage("Color with such name already exists inside this table");
            return;
        }

        navigate(-1);
        dispatch(editColorInsideTable({ tableName, oldColorName, colorName, rgbValue}));
    }

    function handleColorDelete({ tableName, colorName } : {tableName: string, colorName: string}):void{
        dispatch(deleteColorFromTable({ tableName, colorName }));
    }

    function handleLogin({ event, login, password } : LoginData):void{
        event.preventDefault();
        dispatch(doLogin({ password, login }));
        navigate("/user")
    }

    function handleRegister({ event, nickname, login, password } : RegisterData):void{
        event.preventDefault();
        console.log(nickname, login, password )
        dispatch(doRegister({ nickname, login, password }))
        navigate("/user")
    }

    function handleLogout():void{
        dispatch(doLogout());
        navigate("/user")
    }

    function handleThemeChange(event: React.ChangeEvent<HTMLSelectElement>):void{
        if(event.target.value === "light" || event.target.value === "dark"){
            dispatch(changeTheme({ themeName: event.target.value }));
        }
    }

    document.body.onclick = function(){
        
    }


    return (
        <div className={`App ${themeName}`}>
            <Layout
                tablesToRender={tablesToRender}

                handleTablesSortCriteriaChange={handleTablesSortCriteriaChnage}

                handleTableCreate={handleTableCreate}
                handleTablesSearch={handleTablesSearch}
                handleTableEdit={handleTableEdit}
                handleTableDelete={handleTableDelete}

               mode="create"
               handleAddColorToTable={handleAddColorToTable}
               handleColorEdit={handleColorEdit}
               handleColorDelete={handleColorDelete}

                handleLogin={handleLogin}
                handleRegister={handleRegister}
                handleLogout={handleLogout}

                handleThemeChange={handleThemeChange}

            />
        </div>
    );
}

export default App;
