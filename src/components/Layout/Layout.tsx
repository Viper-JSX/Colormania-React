import React from "react";
import { Routes, Route } from "react-router";
import { LayoutProps } from "../../typescript/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function Layout({ appTitle, handleColorModeChange } : LayoutProps):JSX.Element{
    return(
        <div id="layout">
            <Header />
                <Routes>
                    <Route path="" />
                </Routes>

            <Footer />
        </div>
    )
    
}

export default Layout