import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Router } from "react-router";
import { stringToUrl } from "../../api/string_to_url";
import Color from "../../classes/Color";
import TableClass from "../../classes/Table";
import { LayoutProps } from "../../typescript/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePage from "../Home_page/Home_page";
import Table from "../Tables/Table";
import Tables from "../Tables/Tables";
import UserProfile from "../User/User_profile";

function Layout({ appTitle, handleColorModeChange, handleTablesSortCriteriaChange, handleTablesSearch } : LayoutProps):JSX.Element{
    const tablesToRender = useSelector((state: any) => state.tablesFilter.filteredTables);
    
    return(
        <div id="layout">
            <Header 
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