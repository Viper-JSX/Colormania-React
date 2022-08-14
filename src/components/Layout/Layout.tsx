import React from "react";
import { Routes, Route } from "react-router";
import { stringToUrl } from "../../api/string_to_url";
import TableClass from "../../classes/Table";
import { LayoutProps } from "../../typescript/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePage from "../Home_page/Home_page";
import Table from "../Tables/Table";
import Tables from "../Tables/Tables";

const tables:TableClass[] = [
    new TableClass("tablename", new Date()), 
    new TableClass("maleNa da xla", new Date()), 
    new TableClass("somebody stupid", new Date()) ];

tables.map((table) => console.log(stringToUrl(table.name)));

function Layout({ appTitle, handleColorModeChange, handleTableSortCriteriaChange, handleTableSearch } : LayoutProps):JSX.Element{
    return(
        <div id="layout">
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tables" element={<Tables tables={tables} />} />
                    {
                        tables.map((table) =>
                            <Route path={`/tables/${stringToUrl(table.name)}`} element={<b>{table.name}</b>} key={`${table.name}_route`} />
                        )            
                    }

                    <Route path="/user" />
                </Routes>

            <Footer />
        </div>
    )
    
}

export default Layout