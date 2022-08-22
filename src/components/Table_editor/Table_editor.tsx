import React, { useState } from "react";
import { TableEditorProps } from "../../typescript/types";

function TableEditor({ handleTableEdit } : TableEditorProps):JSX.Element{
    const oldTableName = "";
    const [ tableName, setTableName ] = useState<string>(/*oldTableName*/"");

    function handleTableNameChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setTableName(event.target.value);
    }

    return(
        <div>
            <input className="tableNameInput" type="text" value={tableName} />
            <button className="saveTableChangesButton" onChange={() => handleTableEdit({ oldTableName, tableName })}>Apply</button>
        </div>
    );
}

export default TableEditor;