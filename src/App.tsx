import './App.css';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTablesSearchTerm, chnageColorMode, changeTablesSortCriteria, createTable, editColorInsideTable, deleteTable, editTable, addColorToTable, deleteColorFromTable, login } from './redux/thunks';

import { addItemToLocaleStorage } from './api/add_item_to_locale_storage';
import { getGuestUserFromLocaleStorage } from './api/get_guest_user_from_locale_storage';

import TableClass from './classes/Table';
import Layout from './components/Layout/Layout';


function App() {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const tablesToRender = useSelector((state: any) => state.user.user.tables)


    useEffect(() => {
        if(!getGuestUserFromLocaleStorage() && !user.authorized){
            addItemToLocaleStorage("guest_user", user);
        }

        else{
            //dispatch({ type: LOGIN, payload: getGuestUserFromLocaleStorage()});
        }
    }, [])

    function handleColorModeChange(event : (React.ChangeEvent<HTMLSelectElement> )){
        if(event.target.value === "rgb" || event.target.value === "hsl"){
            dispatch(chnageColorMode({ colorMode: event.target.value }));
        }
    }

    function handleTablesSortCriteriaChnage(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "name" || event.target.value === "date"){
            dispatch(changeTablesSortCriteria({ sortCriteria: event.target.value }));
        }
    }

    function handleTablesSearch(event: React.ChangeEvent<HTMLInputElement>){
        dispatch(changeTablesSearchTerm({ searchTerm: event.target.value }))
    }


    document.body.onclick = function(){
        //dispatch(editTable({ oldTableName: "Welcome table", tableName: "Initial Overviewsz" }));
        //dispatch(deleteTable({ tableName: "Welcome table" }))
        //dispatch(addColorToTable({ tableName: "Welcome table", color: new Color("Bereza", { r: 40, g: 20, b: 30}) }))
        //const newColor = new Color("Pin", {r: 50, g: 50, b: 50});
        //dispatch(editColorInsideTable({ tableName: "Welcome table", oldColorName: "dark", color: newColor }));
        //dispatch(deleteColorFromTable({ tableName: "Welcome table", colorName: "Dark" }));
        console.log("Click")
        //dispatch(login({ login: "pivasik", password: "pivasik" }))
    }

    return (
        <div className="App">
            <Layout
                tablesToRender={tablesToRender}

                handleColorModeChange={handleColorModeChange}
                handleTablesSortCriteriaChange={handleTablesSortCriteriaChnage}
                handleTablesSearch={handleTablesSearch}
            />
        </div>
    );
}

export default App;
