import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Color from './classes/Color';
import Layout from './components/Layout/Layout';
import { changeTablesSearchTerm, chnageColorMode, changeTablesSortCriteria, createTable, editColorInsideTable } from './redux/thunks';
import { ChangeColorModePayload, ChangeTablesSortCriteriaPayload } from './typescript/types';

function App() {
    const dispatch = useDispatch();
    const tablesToFilter = useSelector((state: any) => state.user.tables)

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
    //dispatch(editColorInsideTable({tableName: "sss", oldColorName: "old color", color: new Color("Only darkness", { r: 10, g: 10, b: 10 }), tablesToFilter }));

    document.body.onclick = function(){
        
    dispatch(createTable({tableName: "Welcome table1", tablesToFilter}));
    dispatch(createTable({tableName: "Some new table 12345", tablesToFilter}));
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
