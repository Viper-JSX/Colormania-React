import TableClass from "../../../classes/Table";

function TableOpener( { table } : { table: TableClass } ):JSX.Element{
    console.log(table)
    return(
        <div className="tableOpener">
            <b className="tableOpenerName">{table.name}</b>
            <div className="tableOpenerColors">

            </div>
        </div>
    );
}

export default TableOpener;