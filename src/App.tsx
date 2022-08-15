import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Layout from './components/Layout/Layout';
import { changeTablesSearchTerm, chnageColorMode, changeTablesSortCriteria } from './redux/thunks';
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

    console.log(useSelector((state) => state));

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
