import './App.css';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTablesSearchTerm, chnageColorMode, changeTablesSortCriteria, createTable, editColorInsideTable, deleteTable, editTable, addColorToTable, deleteColorFromTable } from './redux/thunks';

import TableClass from './classes/Table';
import Layout from './components/Layout/Layout';
import { getItemFromLocalStorage } from './api/get_item_from_locale_storage';
import { addItemToLocaleStorage } from './api/add_item_to_locale_storage';

function App() {
    const dispatch = useDispatch();
    const tablesToFilter:TableClass[] = useSelector((state: any) => state.user.tables)

    function handleColorModeChange(event : (React.ChangeEvent<HTMLSelectElement> )){
        if(event.target.value === "rgb" || event.target.value === "hsl"){
            dispatch(chnageColorMode({ colorMode: event.target.value, tablesToFilter }));
        }
    }

    function handleTablesSortCriteriaChnage(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "name" || event.target.value === "date"){
            dispatch(changeTablesSortCriteria({ sortCriteria: event.target.value, tablesToFilter }));
        }
    }

    function handleTablesSearch(event: React.ChangeEvent<HTMLInputElement>){
        dispatch(changeTablesSearchTerm({ searchTerm: event.target.value, tablesToFilter }))
    }


    document.body.onclick = function(){
        //dispatch(editTable({ oldTableName: "Welcome table", tableName: "Initial Overviewsz", tablesToFilter }));
        //dispatch(deleteTable({ tableName: "Welcome table", tablesToFilter }))
        //dispatch(addColorToTable({ tableName: "Welcome table", color: new Color("Bereza", { r: 40, g: 20, b: 30}), tablesToFilter }))
        //const newColor = new Color("Pin", {r: 50, g: 50, b: 50});
        //dispatch(editColorInsideTable({ tableName: "Welcome table", oldColorName: "dark", color: newColor, tablesToFilter }));
        dispatch(deleteColorFromTable({ tableName: "Welcome table", colorName: "Dark", tablesToFilter }));
    }

    return (
        <div className="App">
            <Layout
                handleColorModeChange={handleColorModeChange}
                handleTablesSortCriteriaChange={handleTablesSortCriteriaChnage}
                handleTablesSearch={handleTablesSearch}
            />
        </div>
    );
}

export default App;
