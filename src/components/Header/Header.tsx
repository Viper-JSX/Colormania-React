import { Routes, Route } from "react-router";
import { HeaderProps } from "../../typescript/types";
import AppTitle from "./App_title";
import FilterTools from "./Filter_tools/Filter_tools";


function Header({ appTitle, handleColorModeChange, handleTableSortCriteriaChange, handleTableSearch } : HeaderProps):JSX.Element{
    return(
        <header>
            <AppTitle titleText={appTitle || "Color Picker by Yura Shtefanko"} />
            <Routes>
                <Route path="tables" element={<FilterTools  handleColorModeChange={handleColorModeChange} handleTableSortCriteriaChange={handleTableSortCriteriaChange} handleTableSearch={handleTableSearch}  />} />
                {/*<Route path="/tables" element={<b>Sobora</b>} />*/}
            </Routes>
        </header>
    );
}

export default Header;
