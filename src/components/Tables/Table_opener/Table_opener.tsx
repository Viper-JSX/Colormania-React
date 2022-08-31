import { useSelector } from "react-redux";
import TableClass from "../../../classes/Table";
import { TableOpenerProps } from "../../../typescript/types";
import Color from "../Color/Color";

function TableOpener( { table, handleTableDelete } : TableOpenerProps ):JSX.Element{
    const themeName = useSelector((state:any) => state.theme.themeName);
    console.log(themeName)
    return(
        <div className={`tableOpener ${themeName}`}>
            <button className="deleteButton deleteTableButton" onClick={() => handleTableDelete({ tableName: table.name })}>X</button>
            <div className={`tableOpenerTitleContainer ${themeName}`}>
                <b className="tableOpenerTitle">{table.name}</b>
            </div>
            <div className={`tableOpenerColors ${themeName}`}>
                {
                    table.colors.map((color) => <Color color={color} />)
                }
            </div>
        </div>
    );
}

export default TableOpener;