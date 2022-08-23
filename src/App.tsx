import './App.css';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTablesSearchTerm, changeTablesSortCriteria, createTable, editColorInsideTable, deleteTable, editTable, addColorToTable, deleteColorFromTable, login, register, setMessage } from './redux/thunks';

import { addItemToLocaleStorage } from './api/add_item_to_locale_storage';
import { getGuestUserFromLocaleStorage } from './api/get_guest_user_from_locale_storage';

import Layout from './components/Layout/Layout';
import filterTables from './api/filter_tables';
import ColorClass from './classes/Color';
import { AddColorToTableParams, EditColorParams, HandleTableEditParams, LoginData, RegisterData, RGBValue } from './typescript/types';
import { useNavigate } from 'react-router';


function App() {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.user);
    const tablesToRender = useSelector((state: any) => filterTables({ tables: state.user.user.tables, filterOptions: state.tablesFilter }));    
    const message = useSelector((state:any) => state.message);
    const navigate = useNavigate();
    console.log(message);

    //dispatch(setMessage({ messageText: "Nothing happened" }))

    useEffect(() => {
        if(!getGuestUserFromLocaleStorage() && !user.authorized){
            addItemToLocaleStorage("guest_user", user);
        }
    }, [])


    function handleTablesSortCriteriaChnage(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "name" || event.target.value === "date"){
            console.log("in handlerdd", event.target)
            dispatch(changeTablesSortCriteria({ sortCriteria: event.target.value }));
        }
    }

    function handleTableCreate({ tableName } : { tableName: string }):void{
        let tableAlreadyExists = false;

        for(let i = 0; i < user.tables.length; i++){
            if(user.tables[i].name.toLowerCase() === tableName.toLowerCase()){
                tableAlreadyExists = true;
                break;
            }
        }

        if(tableAlreadyExists){
            dispatch(setMessage({ messageText: "Table with such name already exists" }));
        }

        navigate("/tables");
        dispatch(createTable({ tableName }));
    }

    function handleTablesSearch(event: React.ChangeEvent<HTMLInputElement>){
        dispatch(changeTablesSearchTerm({ searchTerm: event.target.value }))
    }

    function handleTableEdit({ oldTableName, tableName} : HandleTableEditParams):void{
        let tableAlreadyExists = false;

        if(oldTableName.toLowerCase() !== tableName.toLowerCase()){ //Table name has been changed
            for(let i = 0; i < user.tables.length; i++){
                if(user.tables[i].name.toLowerCase() === tableName.toLowerCase()){
                    tableAlreadyExists = true;
                    break;
                }
            }
        }

        if(tableAlreadyExists){
            dispatch(setMessage({ messageText: "Table with such name already exists" }));
            return;
        }

        dispatch(editTable({ oldTableName, tableName }));
        navigate("/tables");
    }

    function handleAddColorToTable({ tableName, colorName, rgbValue } : AddColorToTableParams):void{
        let colorAlreadyExists = false;

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
            dispatch(setMessage({ messageText: "Color with such name already exists inside this table" }));
            return;
        }

        const color = new ColorClass(colorName, rgbValue);
        dispatch(addColorToTable({ tableName, color }));
    }

    function handleColorEdit({ tableName, oldColorName, colorName, rgbValue } : EditColorParams):void{
        let colorAlreadyExists = false;

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
            dispatch(setMessage({ messageText: "Color with such name already exists inside this table" }));
            return;
        }

        navigate(-1);
        dispatch(editColorInsideTable({ tableName, oldColorName, colorName, rgbValue}));
    }

    function handleColorDelete({ tableName, colorName } : {tableName: string, colorName: string}):void{
        dispatch(deleteColorFromTable({ tableName, colorName }));
    }

    function handleLogin({ login, password } : LoginData):void{

    }

    function handleRegister({ nickname, login, password } : RegisterData):void{

    }

    function handleLogout():void{
        
    }

    document.body.onclick = function(){
        //dispatch(createTable({tableName: "Sobakens"}));
        //dispatch(editTable({ oldTableName: "Welcome table", tableName: "Initial Overviewzzzz" }));
        //dispatch(deleteTable({ tableName: "Welcome table" }))
        //dispatch(addColorToTable({ tableName: "Welcome table", color: new Color("Bereza", { r: 40, g: 20, b: 30}) }))
        //const newColor = new Color("Pin", {r: 50, g: 50, b: 50});
        //dispatch(editColorInsideTable({ tableName: "Welcome table", oldColorName: "dark", color: newColor }));
        //dispatch(deleteColorFromTable({ tableName: "Welcome table", colorName: "Dark" }));
        //console.log("Click")
        //dispatch(login({ login: "pivasik", password: "pivasik" }))
        //dispatch(register({nickname: "Ivaniii", login: "pivasik", password: "ssssssssssssssssss"}));
        //handleTablCreate({ tableName:"Siuuuuuur" });
        //handleColorEdit({ tableName: "Welcome table", oldColorName: "dark", colorName: "Pinkyyyyyyyyyy", rgbValue: { r: 10, g: 10, b: 200 } });
        //handleAddColorToTable({  tableName: "welcome table", colorName: "darker", rgbValue: { r: 140, g: 10, b: 200 }});
    }

    return (
        <div className="App">
            <Layout
                tablesToRender={tablesToRender}

                handleTablesSortCriteriaChange={handleTablesSortCriteriaChnage}
                handleTableCreate={handleTableCreate}
                handleTablesSearch={handleTablesSearch}
                handleTableEdit={handleTableEdit}

                mode="create"
                handleAddColorToTable={handleAddColorToTable}
                handleColorEdit={handleColorEdit}
                handleColorDelete={handleColorDelete}

                handleLogin={handleLogin}
                handleRegister={handleRegister}
                
            />
        </div>
    );
}

export default App;
