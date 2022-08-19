import './App.css';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTablesSearchTerm, chnageColorMode, changeTablesSortCriteria, createTable, editColorInsideTable, deleteTable, editTable, addColorToTable, deleteColorFromTable, login, register } from './redux/thunks';

import { addItemToLocaleStorage } from './api/add_item_to_locale_storage';
import { getGuestUserFromLocaleStorage } from './api/get_guest_user_from_locale_storage';

import { logout } from './redux/action_functions';

import Layout from './components/Layout/Layout';
import filterTables from './api/filter_tables';
import ColorClass from './classes/Color';
import { AddColorToTableParams, EditColorParams, RGBValue } from './typescript/types';


function App() {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.user);
    const tablesToRender = useSelector((state: any) => filterTables({ tables: state.user.user.tables, filterOptions: state.tablesFilter }));    
    const error = useSelector((state:any) => state.error);
    //console.log(error.errorText);
    console.log(user.tables)

    useEffect(() => {
        if(!getGuestUserFromLocaleStorage() && !user.authorized){
            addItemToLocaleStorage("guest_user", user);
        }
    }, [])

    function handleColorModeChange(event : (React.ChangeEvent<HTMLSelectElement> )){
        if(event.target.value === "rgb" || event.target.value === "hsl"){
            dispatch(chnageColorMode({ colorMode: event.target.value }));
        }
    }

    function handleTablesSortCriteriaChnage(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "name" || event.target.value === "date"){
            console.log("in handlerdd", event.target)
            dispatch(changeTablesSortCriteria({ sortCriteria: event.target.value }));
        }
    }

    function handleTablesSearch(event: React.ChangeEvent<HTMLInputElement>){
        dispatch(changeTablesSearchTerm({ searchTerm: event.target.value }))
    }

    function handleAddColorToTable({ tableName, colorName, rgbValue } : AddColorToTableParams):void{
        const color = new ColorClass(colorName, rgbValue);
        console.log(color);
        dispatch(addColorToTable({ tableName, color }));
    }

    function handleColorEdit({ tableName, oldColorName, colorName, rgbValue } : EditColorParams):void{
        dispatch(editColorInsideTable({ tableName, colorName, colorName rgbValue }))
    }

    document.body.onclick = function(){
        //dispatch(createTable({tableName: "Sobakens"}));
        //dispatch(editTable({ oldTableName: "Welcome table", tableName: "Initial Overviewsz" }));
        //dispatch(deleteTable({ tableName: "Welcome table" }))
        //dispatch(addColorToTable({ tableName: "Welcome table", color: new Color("Bereza", { r: 40, g: 20, b: 30}) }))
        //const newColor = new Color("Pin", {r: 50, g: 50, b: 50});
        //dispatch(editColorInsideTable({ tableName: "Welcome table", oldColorName: "dark", color: newColor }));
        //dispatch(deleteColorFromTable({ tableName: "Welcome table", colorName: "Dark" }));
        //console.log("Click")
        dispatch(login({ login: "pivasi", password: "pivasik" }))
        //dispatch(register({nickname: "Ivaniii", login: "pivasik", password: "ssssssssssssssssss"}));
    }

    //document.body.ondblclick = function(){
    //    dispatch(logout());
    //}

    //document.body.onkeydown = function(){
    //    dispatch(createTable({ tableName: "New tables" }));
    //}

    return (
        <div className="App">
            <Layout
                tablesToRender={tablesToRender}

                handleColorModeChange={handleColorModeChange}
                handleTablesSortCriteriaChange={handleTablesSortCriteriaChnage}
                handleTablesSearch={handleTablesSearch}

                mode={"create"} //Color editor mode, it's not necessary;
                handleAddColorToTable={handleAddColorToTable}
                handleColorEdit={}
            />
        </div>
    );
}

export default App;
