import { useSelector } from "react-redux";
import { TableColorsProps } from "../../../typescript/types";

import Color from "../Color/Color";
import OpenColorCreator from "../Open_color_creator";


function TableColors({ tableName, table, colorsToRender, handleColorDelete} : TableColorsProps):JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <div className={`tableColors ${themeName}`}>
        {
            colorsToRender.length > 0 ?
            colorsToRender.map((color) => <Color color={color} tableName={tableName} handleColorDelete={handleColorDelete} key={`${tableName}_${color.name}`} />)
            :
            (
                table.colors.length === 0 ?
                <b className="message -tableIsEmpty">This table is empty</b>
                :
                <b className="message -noResultsFound">No results found</b>
            ) 
        }
        <OpenColorCreator tableName={table.name} />
    </div>
    );
}

export default TableColors;