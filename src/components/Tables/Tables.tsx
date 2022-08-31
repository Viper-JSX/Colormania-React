import { Link, NavLink } from "react-router-dom";
import { stringToUrl } from "../../api/string_to_url";
import { TablesProps } from "../../typescript/types";
import FilterTools from "../Header/Filter_tools/Filter_tools";
import OpenTableCreator from "../Table_editor/Open_table_creator";
import OpenColorCreator from "./Open_color_creator";
import TableOpener from "./Table_opener/Table_opener";

function Tables({ tables, handleColorDelete, handleTablesSearch, handleTablesSortCriteriaChange } : TablesProps):JSX.Element{
    return(
        <div className="tables">
            <FilterTools handleTablesSearch={handleTablesSearch} handleTablesSortCriteriaChange={handleTablesSortCriteriaChange} />

            <div className="tableOpenersContainer">
                {
                    tables.map((table) => <NavLink to={stringToUrl(table.name)}><TableOpener table={table} /></NavLink> )
                }
                <OpenTableCreator />
            </div>
            
        </div>
    );
}

export default Tables;