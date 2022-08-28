import { NavLink } from "react-router-dom";
import { stringToUrl } from "../../api/string_to_url";
import { TablesProps } from "../../typescript/types";
import TableOpener from "./Table_opener/Table_opener";

function Tables({ tables, handleColorDelete } : TablesProps):JSX.Element{
    return(
        <div className="tables">
            <b>Tables</b>

            {
                tables.map((table) => <NavLink to={stringToUrl(table.name)}><TableOpener table={table} /></NavLink> )
            }
        </div>
    );
}

export default Tables;