import "./css/App.css";

import { users } from "./various_things/users";

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { changeTablesSearchTerm, changeTablesSortCriteria, createTable, editColorInsideTable, editTable, addColorToTable, deleteColorFromTable, login as doLogin, register as doRegister, setMessage, deleteTable, register } from './redux/thunks';

import { addItemToLocaleStorage } from './api/add_item_to_locale_storage';
import { getGuestUserFromLocaleStorage } from './api/get_guest_user_from_locale_storage';

import Layout from './components/Layout/Layout';
import filterTables from './api/filter_tables';
import ColorClass from './classes/Color';
import { AddColorToTableParams, DeleteTablePayload, EditColorParams, HandleTableEditParams, LoginData, RegisterData } from './typescript/types';
import { useNavigate } from 'react-router';
import { changeTheme, logout as doLogout } from './redux/action_functions';
import { stringToUrl } from "./api/string_to_url";
import { checkNicknameExistance } from "./api/check_nickname_existance";
import { validateLogin } from "./api/validate_login";
import { validatePassword } from "./api/validate_password";

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.user);
    const tablesToRender = useSelector((state: any) => filterTables({ tables: state.user.user.tables, filterOptions: state.tablesFilter }));    
    const message = useSelector((state:any) => state.message);
    const themeName = useSelector((state:any) => state.theme.themeName);
    const navigate = useNavigate();

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
            showMessage(`Table '${tableName}' already exists`);
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
            showMessage(`Color '${colorName}' already exists inside this table`);
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

        for(let i = 0; i < users.length; i++){
            if(users[i].login === login.toLowerCase() && users[i].password === password.toLowerCase()){
                dispatch(doLogin({ password, login }));
                navigate("/user")
                return;
            }   
        }

        showMessage("Wrong login or password");

    }

    function handleRegister({ event, nickname, login, password } : RegisterData):void{
        event.preventDefault();

        const userNicknameDoesNotExist = checkNicknameExistance(nickname);
        const loginIsValidAndDoesNotExist = validateLogin(login);
        const passwordIsValid = validatePassword(password);


        if(userNicknameDoesNotExist && loginIsValidAndDoesNotExist && passwordIsValid){
            dispatch(register( {nickname, login, password} ));
            navigate("/user")
        }
        
        else if(!userNicknameDoesNotExist){
            dispatch(setMessage({ messageText: `Nickname '${nickname}' is already taken` }));
        }
        else if(!loginIsValidAndDoesNotExist){
            dispatch(setMessage({ messageText: `Login '${login}' is invalid or already taken` }));
        }
        else if(!passwordIsValid){
            dispatch(setMessage({ messageText: `Password '${login}' is invalalid, password must be at least 8 characters long and contain numbers` }));
        }
        else{
            console.log("Unknown message");
            dispatch(setMessage({ messageText: `Unknown message` }));
        }
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
