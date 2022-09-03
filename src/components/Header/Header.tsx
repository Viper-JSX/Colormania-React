import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { AppState, HeaderProps } from "../../typescript/types";
import AppTitle from "./App_title";
import FilterTools from "./Filter_tools/Filter_tools";
import ThemeSwitch from "./Theme_switch";


function Header({ appTitle, handleTablesSortCriteriaChange, handleTablesSearch, handleThemeChange } : HeaderProps):JSX.Element{
    const nickname = useSelector((state: AppState) => state.user.user.nickname);
    const themeName = useSelector((state: AppState) => state.theme.themeName);
    
    return(
        <header id="header" className={`${themeName}`}>
            <AppTitle titleText={appTitle || "ColorMania"} />
            <ThemeSwitch handleThemeChange={handleThemeChange} />
        </header>
    );
}

export default Header;
