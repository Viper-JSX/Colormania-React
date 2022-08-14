import TableClass from "../../classes/Table";
import Table from "./Table";

function Tables({ tables } : {tables: TableClass[]}):JSX.Element{
    return(
        <div className="tables">
            <b>Tables</b>

            {
                tables.map((table) => <Table table={table} /> )
            }
        </div>
    );
}

export default Tables;