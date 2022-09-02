import { useSelector } from "react-redux";
import { animationDelayDifference } from "../../../app_config/app_config";
import TableClass from "../../../classes/Table";
import { AppState, TableOpenerProps } from "../../../typescript/types";
import Color from "../Color/Color";

function TableOpener( { table, index, handleTableDelete } : TableOpenerProps ):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);
    console.log(themeName)
    return(
        <div className={`tableOpener ${themeName}`} style={{ animationDelay: `${index * animationDelayDifference}s` }}>
            <button className="deleteButton deleteTableButton" onClick={() => handleTableDelete({ tableName: table.name })}>X</button>
            <div className={`tableOpenerTitleContainer ${themeName}`}>
                <b className="tableOpenerTitle">{table.name}</b>
            </div>
            <div className={`tableOpenerColors ${themeName}`}>
                {
                    table.colors.map((color, index) => <Color color={color} index={index} />)
                }
            </div>
        </div>
    );
}

export default TableOpener;