import TableClass from "../../../classes/Table";
import Color from "../Color/Color";

function TableOpener( { table } : { table: TableClass } ):JSX.Element{
    console.log(table)
    return(
        <div className="tableOpener">
            <b className="tableOpenerName">{table.name}</b>
            <div className="tableOpenerColors">
                {
                    table.colors.map((color) => <Color color={color} />)
                }
            </div>
        </div>
    );
}

export default TableOpener;