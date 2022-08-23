import React, { useState } from "react";
import { TableEditorProps } from "../../typescript/types";

function TableEditor(props: TableEditorProps):JSX.Element{

    const [ tableName, setTableName ] = useState<string>(():string => {
        if("handleTableCreate" in props){
            return "";
        }
        return props.oldTableName
    });

    function handleTableNameChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setTableName(event.target.value);
    }

    console.log("handleTableEdit")

    return(
        <div>
            <input className="tableNameInput" type="text" value={tableName} onChange={handleTableNameChange} />
            {
                "handleTableCreate" in props ? 
                <button className="createButton" onClick={() => props.handleTableCreate({ tableName })}>Create</button>
                :
                <button className="saveTableChangesButton" onClick={() => props.handleTableEdit({ oldTableName: props.oldTableName, tableName })}>Apply</button>

            }
        </div>
    );
}

export default TableEditor;