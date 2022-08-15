import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Layout from './components/Layout/Layout';
import { chnageColorMode } from './redux/thunks';

function App() {
    const dispatch = useDispatch();
    
    function handleColorModeChange(event : React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "rgb" || event.target.value === "hsl"){
            dispatch(chnageColorMode(event.target.value));
        }
    }

    function handleTablesSortTermChnage(){

    }

    function handleTablesSearch(){

    }

    console.log(useSelector((state) => state));

    return (
        <div className="App">
            <Layout
                handleColorModeChange={handleColorModeChange}
            />
        </div>
    );
}

export default App;
