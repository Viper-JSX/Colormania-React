import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TableEditorProps } from "../../typescript/types";

function TableEditor(props: TableEditorProps):JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    const [ tableName, setTableName ] = useState<string>(():string => {
        if("handleTableCreate" in props){
            return "";
        }
        return props.oldTableName
    });

    function handleTableNameChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setTableName(event.target.value);
    }


    return(
        <div className="tableEditorWrapper">
            <div className={`tableEditor ${themeName}`}>
                <input className="tableNameInput" type="text" value={tableName} onChange={handleTableNameChange} />
                <br />
                {
                    "handleTableCreate" in props ? 
                    <button className="createButton" onClick={() => props.handleTableCreate({ tableName })}>Create</button>
                    :
                    <button className="saveTableChangesButton" onClick={() => props.handleTableEdit({ oldTableName: props.oldTableName, tableName })}>Apply</button>
                }
            </div>
        </div>
    );
}

export default TableEditor;