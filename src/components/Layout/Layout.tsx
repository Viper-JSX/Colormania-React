import React from "react";
import { Routes, Route } from "react-router";
import TableClass from "../../classes/Table";
import { LayoutProps } from "../../typescript/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePage from "../Home_page/Home_page";
import Tables from "../Tables/Tables";


function Layout({ appTitle, handleColorModeChange, handleTableSortCriteriaChange, handleTableSearch } : LayoutProps):JSX.Element{
    return(
        <div id="layout">
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tables" element={<Tables tables={[new TableClass("tablename", new Date())]} />} />
                    
                    <Route path="/user" />
                </Routes>

            <Footer />
        </div>
    )
    
}

export default Layout