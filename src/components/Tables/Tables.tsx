import { Link, NavLink } from "react-router-dom";
import { stringToUrl } from "../../api/string_to_url";
import { TablesProps } from "../../typescript/types";
import OpenTableCreator from "../Table_editor/Open_table_creator";
import OpenColorCreator from "./Open_color_creator";
import TableOpener from "./Table_opener/Table_opener";

function Tables({ tables, handleColorDelete } : TablesProps):JSX.Element{
    return(
        <div className="tables">
            <b className="text">
                <span>Tables</span>
                <br />
                <Link to="/">{"<-"}Home page</Link>
            </b>
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