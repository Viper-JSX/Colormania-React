import Color from "../../classes/Color";
import TableClass from "../../classes/Table";

function Table({ table } : { table: TableClass }){
    return(
        <div className="table">
            {table.name}
        </div>
    );
}

export default Table;