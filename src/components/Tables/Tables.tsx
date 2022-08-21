import { NavLink } from "react-router-dom";
import { stringToUrl } from "../../api/string_to_url";
import TableClass from "../../classes/Table";
import { TablesProps } from "../../typescript/types";
import Table from "./Table";

function Tables({ tables, handleColorDelete } : TablesProps):JSX.Element{
    return(
        <div className="tables">
            <b>Tables</b>

            {
                tables.map((table) => <NavLink to={stringToUrl(table.name)}>{table.name}</NavLink> )
            }
        </div>
    );
}

export default Tables;