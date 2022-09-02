import { useSelector } from "react-redux";
import { AppState, TableColorsProps } from "../../../typescript/types";

import Color from "../Color/Color";
import OpenColorCreator from "../Open_color_creator";


function TableColors({ tableName, table, colorsToRender, handleColorDelete} : TableColorsProps):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <div className={`tableColors ${themeName}`}>
        {
            colorsToRender.length > 0 ?
            colorsToRender.map((color, index) => <Color color={color} tableName={tableName} index={index} handleColorDelete={handleColorDelete} key={`${tableName}_${color.name}`} />)
            :
            (
                table.colors.length === 0 ?
                <b className="message -tableIsEmpty">This table is empty</b>
                :
                <b className="message -noResultsFound">No results found</b>
            ) 
        }
        <OpenColorCreator tableName={table.name} index={colorsToRender.length - 1} />
    </div>
    );
}

export default TableColors;