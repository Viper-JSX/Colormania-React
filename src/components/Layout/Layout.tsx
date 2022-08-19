import { Routes, Route, Router } from "react-router";
import { stringToUrl } from "../../api/string_to_url";

import { LayoutProps } from "../../typescript/types";

import TableClass from "../../classes/Table";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePage from "../Home_page/Home_page";
import Table from "../Tables/Table";
import Tables from "../Tables/Tables";
import UserProfile from "../User/User_profile";

function Layout({ appTitle, tablesToRender, handleColorModeChange, handleTablesSortCriteriaChange, handleTablesSearch } : LayoutProps):JSX.Element{
    return(
        <div id="layout">
            <Header 
                appTitle={appTitle}
                handleColorModeChange={handleColorModeChange}
                handleTablesSortCriteriaChange={handleTablesSortCriteriaChange}
                handleTablesSearch={handleTablesSearch}
            />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/tables" element={<Tables tables={tablesToRender} />} />
                    {
                        tablesToRender.map((table:TableClass) =>
                            <Route path={`/tables/${stringToUrl(table.name)}`} element={<Table table={table} />}  key={`${table.name}_table`}/>
                        )            
                    }

                    <Route path="/user" element={<UserProfile />} />
                    <Route path="*" element={<b>Page not found</b>} />
                </Routes>

            <Footer />
        </div>
    )
    
}

export default Layout