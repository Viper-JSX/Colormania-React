import Color from "./Color/Color";
import TableClass from "../../classes/Table";

function Table({ table } : { table: TableClass }){
    table.colors.map((color) => console.log(color))
    console.log("Shit")
    return(
        <div className="table">
            <b className="tableName">{table.name}</b>
            {
                table.colors.map((color) => <Color color={color} key={`${table.name}_${color.name}`} />)
            }
        </div>
    );
}

export default Table;