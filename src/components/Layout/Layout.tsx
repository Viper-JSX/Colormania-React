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
import ColorEditor from "../Color_editor/Color_editor";
import TableEditor from "../Table_editor/Table_editor";
import Message from "../Message/Message";
import AuthorizationForm from "../Authorization_form/Authorization_form";
import Login from "../Authorization_form/Login";
import Register from "../Authorization_form/Register";

function Layout({ appTitle, tablesToRender, handleTablesSortCriteriaChange, handleTableCreate, handleTablesSearch, handleTableEdit, handleAddColorToTable, handleColorEdit, handleColorDelete } : LayoutProps):JSX.Element{
    return(
        <div id="layout">
            <Header 
                appTitle={appTitle}
                handleTablesSortCriteriaChange={handleTablesSortCriteriaChange}
                handleTablesSearch={handleTablesSearch}
            />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/tables" element={<Tables tables={tablesToRender} handleColorDelete={handleColorDelete} />} >
                        <Route path="create" element></Route>
                    </Route>
                    {
                        tablesToRender.map((table:TableClass) =>
                            <Route path={`/tables/${stringToUrl(table.name)}`} element={<Table table={table} handleColorDelete={handleColorDelete} />}  key={`${table.name}_table`}>
                                <Route path="edit" element={<TableEditor mode="edit" oldTableName={table.name} handleTableEdit={handleTableEdit} />} />
                            </Route>
                        )            
                    }
                    <Route path="/create-table" element={<TableEditor mode="edit" handleTableCreate={handleTableCreate} />} />
                    <Route path="/tables/:tablename/add-color" element={<ColorEditor mode="create" handleAddColorToTable={handleAddColorToTable} handleColorEdit={handleColorEdit} />} />
                    <Route path="/tables/:tablename/:colorname/edit" element={<ColorEditor handleAddColorToTable={handleAddColorToTable} handleColorEdit={handleColorEdit}  mode="edit" />} />
                    <Route path="/user" element={<UserProfile />}>
                        <Route path="authorization" element={<AuthorizationForm />}>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<b>Page not found</b>} />
                </Routes>
            <Message />
            <Footer />
        </div>
    )
    
}

export default Layout