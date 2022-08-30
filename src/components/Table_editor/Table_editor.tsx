import React, { useState } from "react";
import { useSelector } from "react-redux";
import { stringToUrl } from "../../api/string_to_url";
import { TableEditorProps } from "../../typescript/types";
import GoToLinkButton from "../General_reusable_components/Go_to_link_button";

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
                    <>
                        <GoToLinkButton path="/tables" >Cancel</GoToLinkButton>
                        <button className="createButton" onClick={() => props.handleTableCreate({ tableName })}>Create</button>
                    </>
                    :
                    <>
                        <GoToLinkButton path={`/tables/${stringToUrl(props.oldTableName)}`} >Cancel</GoToLinkButton>
                        <button className="saveTableChangesButton" onClick={() => props.handleTableEdit({ oldTableName: props.oldTableName, tableName })}>Apply</button>
                    </>
                    
                }
            </div>
        </div>
    );
}

export default TableEditor;