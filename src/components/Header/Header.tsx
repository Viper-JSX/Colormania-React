import { HeaderProps } from "../../typescript/types";
import AppTitle from "./App_title";


function Header({ appTitle, handleColorModeChange, handleTableSortCriteriaChange, handleTableSearch } : HeaderProps):JSX.Element{
    return(
        <header>
            <AppTitle titleText={appTitle || "Color Picker by Yura Shtefanko"} />
        </header>
    );
}

export default Header;
