import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Color from './classes/Color';
import TableClass from './classes/Table';
import Layout from './components/Layout/Layout';
import { DELETE_TABLE } from './redux/action_types';
import { changeTablesSearchTerm, chnageColorMode, changeTablesSortCriteria, createTable, editColorInsideTable, deleteTable, editTable, addColorToTable } from './redux/thunks';
import { ChangeColorModePayload, ChangeTablesSortCriteriaPayload } from './typescript/types';

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
        dispatch(addColorToTable({ tableName: "Welcome table", color: new Color("Bereza", { r: 40, g: 20, b: 30}), tablesToFilter }))
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
