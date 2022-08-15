import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Layout from './components/Layout/Layout';
import { changeTablesSearchTerm, chnageColorMode, chnageTablessortCriteria } from './redux/thunks';
import { ChangeColorModePayload, ChangeTablessortCriteriaPayload } from './typescript/types';

function App() {
    const dispatch = useDispatch();
    
    function handleColorModeChange(event : (React.ChangeEvent<HTMLSelectElement> )){
        if(event.target.value === "rgb" || event.target.value === "hsl"){
            dispatch(chnageColorMode(event.target.value));
        }
    }

    function handleTablesSortCriteriaChnage(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "name" || event.target.value === "date"){
            dispatch(chnageTablessortCriteria(event.target.value));
        }
    }

    function handleTablesSearch(event: React.ChangeEvent<HTMLInputElement>){
        dispatch(changeTablesSearchTerm(event.target.value))
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
