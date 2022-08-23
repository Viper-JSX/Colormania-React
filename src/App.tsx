import './App.css';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTablesSearchTerm, changeTablesSortCriteria, createTable, editColorInsideTable, deleteTable, editTable, addColorToTable, deleteColorFromTable, login, register, setMessage } from './redux/thunks';

import { addItemToLocaleStorage } from './api/add_item_to_locale_storage';
import { getGuestUserFromLocaleStorage } from './api/get_guest_user_from_locale_storage';

import Layout from './components/Layout/Layout';
import filterTables from './api/filter_tables';
import ColorClass from './classes/Color';
import { AddColorToTableParams, EditColorParams, HandleTableEditParams, RGBValue } from './typescript/types';
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

    function handleTablesSearch(event: React.ChangeEvent<HTMLInputElement>){
        dispatch(changeTablesSearchTerm({ searchTerm: event.target.value }))
    }

    function handleTableEdit({ oldTableName, tableName} : HandleTableEditParams):void{
        let tableAlreadyExists = false;

        for(let i = 0; i < user.tables.length; i++){
            if(user.tables[i].name.toLowerCase() === tableName.toLocaleLowerCase() && oldTableName.toLowerCase() !== tableName.toLowerCase()){
                tableAlreadyExists = true;
                break;
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
        const color = new ColorClass(colorName, rgbValue);
        console.log(color);
        dispatch(addColorToTable({ tableName, color }));
    }

    function handleColorEdit({ tableName, oldColorName, colorName, rgbValue } : EditColorParams):void{
        dispatch(editColorInsideTable({ tableName, oldColorName, colorName, rgbValue}));
    }

    function handleColorDelete({ tableName, colorName } : {tableName: string, colorName: string}):void{
        dispatch(deleteColorFromTable({ tableName, colorName }));
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
        //dispatch(login({ login: "pivasik", password: "pivasik" }))
        //dispatch(register({nickname: "Ivaniii", login: "pivasik", password: "ssssssssssssssssss"}));

        //handleColorEdit({ tableName: "Welcome table", oldColorName: "dark", colorName: "Pinkyyyyyyyyyy", rgbValue: { r: 10, g: 10, b: 200 } });
    }

    return (
        <div className="App">
            <Layout
                tablesToRender={tablesToRender}

                handleTablesSortCriteriaChange={handleTablesSortCriteriaChnage}
                handleTablesSearch={handleTablesSearch}
                handleTableEdit={handleTableEdit}

                mode="create"
                handleAddColorToTable={handleAddColorToTable}
                handleColorEdit={handleColorEdit}
                handleColorDelete={handleColorDelete}
            />
        </div>
    );
}

export default App;
