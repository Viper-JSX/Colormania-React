import Color from "./Color/Color";
import OpenColorCreator from "./Open_color_creator";
import Search from "../General_reusable_components/Search";
import { useState } from "react";
import ColorClass from "../../classes/Color";
import { TableProps } from "../../typescript/types";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import GoToLinkButton from "../General_reusable_components/Go_to_link_button";

function Table({ table, handleColorDelete } : TableProps){
    const themeName = useSelector((state: any) => state.theme.themeName);
    const [ colorSearchTerm, setColorSearchTerm ] = useState<string>("");

    function handleSearchTermChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void{
        setColorSearchTerm(event.target.value);
    }

    const colorsToRender:ColorClass[] = table.colors.filter((color:ColorClass) => color.name.toLowerCase().indexOf(colorSearchTerm.toLowerCase()) >= 0);

    return(
        <div className={`table ${themeName}`}>
            <div className="tableTools">
                <GoToLinkButton path="edit">Edit table</GoToLinkButton>
                <b className="tableNameAndLink">
                    <span className="tableName">{table.name}</span>
                    <br/>
                    <Link to="/tables">{"<-"}Tables</Link>
                </b>
                <Search value={colorSearchTerm} placeholder={"Type color name"}  handler={handleSearchTermChange} />
            </div>
            
            <div className={`tableColors ${themeName}`}>
                {
                    colorsToRender.map((color) => <Color color={color} tableName={table.name} handleColorDelete={handleColorDelete} key={`${table.name}_${color.name}`} />)
                }
                <OpenColorCreator tableName={table.name} />
            </div>

            <Outlet />
        </div>
    );
}

export default Table;