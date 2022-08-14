import React from "react";
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

const tables:TableClass[] = [
    new TableClass("tablename", new Date()), 
    new TableClass("maleNa da xla", new Date()), 
    new TableClass("somebody stupid", new Date()) 
];

tables[0].addColor(new Color("dark", new Date(), { r: 10, g: 10, b: 10 }))

tables.map((table) => console.log(stringToUrl(table.name)));

function Layout({ appTitle, handleColorModeChange, handleTableSortCriteriaChange, handleTableSearch } : LayoutProps):JSX.Element{
    return(
        <div id="layout">
            <Header />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/tables" element={<Tables tables={tables} />} />
                    {
                        tables.map((table) =>
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