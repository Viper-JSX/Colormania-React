import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { stringToUrl } from "../../api/string_to_url";
import { TablesProps } from "../../typescript/types";
import FilterTools from "../Header/Filter_tools/Filter_tools";
import OpenTableCreator from "../Table_editor/Open_table_creator";
import OpenColorCreator from "./Open_color_creator";
import TableOpener from "./Table_opener/Table_opener";

function Tables({ tables, handleColorDelete, handleTablesSearch, handleTableDelete, handleTablesSortCriteriaChange, } : TablesProps):JSX.Element{
    const userTables = useSelector((state: any) => state.user.user.tables);

    return(
        <div className="tables">
            <FilterTools handleTablesSearch={handleTablesSearch} handleTablesSortCriteriaChange={handleTablesSortCriteriaChange} />

            <div className="tableOpenersContainer">
                {
                    tables.length > 0 ?
                    tables.map((table, index) => <NavLink to={stringToUrl(table.name)}><TableOpener table={table} index={index} handleTableDelete={handleTableDelete} /></NavLink> )
                    :
                    (
                        userTables.length === 0 ?
                        <b className="message -noTables">No tables</b>
                        :
                        <b className="message -noResultsFound">No results found</b>
                    )
                }
                <OpenTableCreator index={tables.length - 1} />
            </div>
            
        </div>
    );
}

export default Tables;