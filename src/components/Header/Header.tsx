import { Routes, Route } from "react-router";
import { HeaderProps } from "../../typescript/types";
import AppTitle from "./App_title";
import FilterTools from "./Filter_tools/Filter_tools";


function Header({ appTitle, handleColorModeChange, handleTablesSortCriteriaChange, handleTablesSearch } : HeaderProps):JSX.Element{
    return(
        <header>
            <AppTitle titleText={appTitle || "Color Picker by Yura Shtefanko"} />
            <Routes>
                <Route path="tables" element={<FilterTools  handleColorModeChange={handleColorModeChange} handleTablesSortCriteriaChange={handleTablesSortCriteriaChange} handleTablesSearch={handleTablesSearch}  />} />
            </Routes>
        </header>
    );
}

export default Header;
