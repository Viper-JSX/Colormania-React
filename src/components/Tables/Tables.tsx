import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { stringToUrl } from "../../api/string_to_url";
import { AppState, TablesProps } from "../../typescript/types";
import FilterTools from "../Header/Filter_tools/Filter_tools";
import OpenTableCreator from "../Table_editor/Open_table_creator";
import TableOpener from "./Table_opener/Table_opener";

function Tables({ tablesToRender, handleColorDelete, handleTablesSearch, handleTableDelete, handleTablesSortCriteriaChange, } : TablesProps):JSX.Element{
    const userTables = useSelector((state: AppState) => state.user.user.tables);
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <div className="tables">
            <FilterTools handleTablesSearch={handleTablesSearch} handleTablesSortCriteriaChange={handleTablesSortCriteriaChange} />

            <div className={`tableOpenersContainer ${themeName}`}>
                {
                    tablesToRender.length > 0 ?
                    tablesToRender.map((table, index) => <NavLink to={stringToUrl(table.name)} key={`${table.name.toLowerCase()}_opener`}><TableOpener table={table} index={index} handleTableDelete={handleTableDelete} /></NavLink> )
                    :
                    (
                        userTables.length === 0 ?
                        <b className="message -noTables">No tables</b>
                        :
                        <b className="message -noResultsFound">No results found</b>
                    )
                }
                <OpenTableCreator index={tablesToRender.length - 1} />
            </div>
            
        </div>
    );
}

export default Tables;