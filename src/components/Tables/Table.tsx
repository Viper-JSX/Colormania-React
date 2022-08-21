import Color from "./Color/Color";
import TableClass from "../../classes/Table";
import OpenColorCreator from "./Open_color_creator";
import Search from "../General_reusable_components/Search";
import { useState } from "react";
import ColorClass from "../../classes/Color";
import { TableProps } from "../../typescript/types";

function Table({ table, handleColorDelete } : TableProps){
    const [ colorSearchTerm, setColorSearchTerm ] = useState<string>("");

    function handleSearchTermChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void{
        setColorSearchTerm(event.target.value);
    }

    const colorsToRender:ColorClass[] = table.colors.filter((color:ColorClass) => color.name.toLowerCase().indexOf(colorSearchTerm.toLowerCase()) >= 0);

    return(
        <div className="table">
            <b className="tableName">{table.name}</b>
            <Search value={colorSearchTerm} placeholder={"Type color name"}  handler={handleSearchTermChange} />
            <div className="tableColors">
                {
                    colorsToRender.map((color) => <Color color={color} tableName={table.name} handleColorDelete={handleColorDelete} key={`${table.name}_${color.name}`} />)
                }
            </div>
            <OpenColorCreator tableName={table.name} />
        </div>
    );
}

export default Table;