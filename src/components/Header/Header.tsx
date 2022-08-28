import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { HeaderProps } from "../../typescript/types";
import AppTitle from "./App_title";
import FilterTools from "./Filter_tools/Filter_tools";
import ThemeSwitch from "./Theme_switch";


function Header({ appTitle, handleTablesSortCriteriaChange, handleTablesSearch, handleThemeChange } : HeaderProps):JSX.Element{
    const nickname = useSelector((state:any) => state.user.user.nickname);
    const themeName = useSelector((state: any) => state.theme.themeName);
    
    return(
        <header id="header" className={`${themeName}`}>
            <AppTitle titleText={appTitle || "ColorMania by Yura Shtefanko" + nickname} />
            <Routes>
                <Route path="tables" element={<FilterTools handleTablesSortCriteriaChange={handleTablesSortCriteriaChange} handleTablesSearch={handleTablesSearch}  />} />
            </Routes>
            <ThemeSwitch handleThemeChange={handleThemeChange} />
        </header>
    );
}

export default Header;
