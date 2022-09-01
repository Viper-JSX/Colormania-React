import { useState } from "react";
import { TableProps } from "../../../typescript/types";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import ColorClass from "../../../classes/Color";
import TableColors from "./Table_colors";
import TableInfo from "./Table_info";
import TableTools from "./Table_tools";

function Table({ table, handleColorDelete } : TableProps){
    const themeName = useSelector((state: any) => state.theme.themeName);
    const [ colorSearchTerm, setColorSearchTerm ] = useState<string>("");

    function handleSearchTermChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void{
        setColorSearchTerm(event.target.value);
    }

    const colorsToRender:ColorClass[] = table.colors.filter((color:ColorClass) => color.name.toLowerCase().indexOf(colorSearchTerm.toLowerCase()) >= 0);

    return(
        <div className={`table ${themeName}`}>
            <TableInfo tableName={table.name} />
            <TableTools colorSearchTerm={colorSearchTerm} handleSearchTermChange={handleSearchTermChange} />
            <TableColors tableName={table.name} table={table} colorsToRender={colorsToRender} handleColorDelete={handleColorDelete} />

            <Outlet />
        </div>
    );
}

export default Table;