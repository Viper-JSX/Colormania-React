import React, { useState } from "react";
import { TableEditorProps } from "../../typescript/types";

function TableEditor({ oldTableName, handleTableEdit } : TableEditorProps):JSX.Element{
    const [ tableName, setTableName ] = useState<string>(oldTableName);

    function handleTableNameChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setTableName(event.target.value);
    }

    return(
        <div>
            <input className="tableNameInput" type="text" value={tableName} onChange={handleTableNameChange} />
            <button className="saveTableChangesButton" onClick={() => handleTableEdit({ oldTableName, tableName })}>Apply</button>
        </div>
    );
}

export default TableEditor;