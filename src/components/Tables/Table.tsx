import Color from "./Color/Color";
import TableClass from "../../classes/Table";
import OpenColorCreator from "./Open_color_creator";

function Table({ table } : { table: TableClass }){
    return(
        <div className="table">
            <b className="tableName">{table.name}</b>
            <div className="tableColors">
                {
                    table.colors.map((color) => <Color color={color} key={`${table.name}_${color.name}`} />)
                }
            </div>
            <OpenColorCreator tableName={table.name} />
        </div>
    );
}

export default Table;