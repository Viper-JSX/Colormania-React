import { useSelector } from "react-redux";
import TableClass from "../../../classes/Table";
import Color from "../Color/Color";

function TableOpener( { table } : { table: TableClass } ):JSX.Element{
    const themeName = useSelector((state:any) => state.theme.themeName);
    console.log(themeName)
    return(
        <div className={`tableOpener ${themeName}`}>
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