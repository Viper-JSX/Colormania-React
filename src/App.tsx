import './App.css';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTablesSearchTerm, changeTablesSortCriteria, createTable, editColorInsideTable, deleteTable, editTable, addColorToTable, deleteColorFromTable, login, register } from './redux/thunks';

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

    function handleTablesSearch(event: React.ChangeEvent<HTMLInputElement>){
        dispatch(changeTablesSearchTerm({ searchTerm: event.target.value }))
    }

    function handleAddColorToTable({ tableName, colorName, rgbValue } : AddColorToTableParams):void{
        const color = new ColorClass(colorName, rgbValue);
        console.log(color);
        dispatch(addColorToTable({ tableName, color }));
    }

    function handleColorEdit({ tableName, oldColorName, colorName, rgbValue } : EditColorParams):void{
        console.log(rgbValue);
        dispatch(editColorInsideTable({ tableName, oldColorName, colorName, rgbValue}));
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
        //dispatch(login({ login: "pivasi", password: "pivasik" }))
        //dispatch(register({nickname: "Ivaniii", login: "pivasik", password: "ssssssssssssssssss"}));

        //handleColorEdit({ tableName: "Welcome table", oldColorName: "dark", colorName: "Pinkyyyyyyyyyy", rgbValue: { r: 10, g: 10, b: 200 } });
    }

    return (
        <div className="App">
            <Layout
                tablesToRender={tablesToRender}

                handleTablesSortCriteriaChange={handleTablesSortCriteriaChnage}
                handleTablesSearch={handleTablesSearch}

                mode="create"
                handleAddColorToTable={handleAddColorToTable}
                handleColorEdit={handleColorEdit}
            />
        </div>
    );
}

export default App;
