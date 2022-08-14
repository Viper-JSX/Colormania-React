import React from "react";
import { Routes, Route } from "react-router";
import { LayoutProps } from "../../typescript/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function Layout({ appTitle, handleColorModeChange, handleTableSortCriteriaChange, handleTableSearch } : LayoutProps):JSX.Element{
    return(
        <div id="layout">
            <Header />
                <Routes>
                    <Route path="/" element={null} />
                    <Route path="/tables" element={null} />
                </Routes>

            <Footer />
        </div>
    )
    
}

export default Layout