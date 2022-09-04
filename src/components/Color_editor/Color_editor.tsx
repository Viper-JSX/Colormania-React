import { useSelector } from "react-redux";

import React, { ChangeEvent, useState } from "react";
import { AppState, ColorEditorProps, OpenColorEditorProps, RGBValue } from "../../typescript/types";
import { hexToRgb } from "../../api/hex_to_rgb";
import { useLocation } from "react-router-dom";
import { rgbToHex } from "../../api/rgb_to_hex";
import { stringToUrl } from "../../api/string_to_url";
import GoToLinkButton from "../General_reusable_components/Go_to_link_button";

function ColorEditor({ mode, handleAddColorToTable, handleColorEdit} : ColorEditorProps):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    const location  = useLocation();
    const state = location.state as any;

    const tableName:string = state.tableName;
    const colorToEdit:OpenColorEditorProps["colorToEdit"] = state?.colorToEdit;
    const oldColorName: string = colorToEdit?.oldColorName;

    const [ colorName, setColorName ] = useState<string>(() => oldColorName ? oldColorName : "");
    const [ currentColorValue, setCurrentColorValue ] = useState(() => {
        if(mode === "create"){
            return {
                hex: "#ffffff", 
                rgb: {r: 255, g: 255, b: 255}
            };
        }
    
        return {
            hex: rgbToHex(colorToEdit.rgbValue),
            rgb: colorToEdit.rgbValue
        };
    });

    function handleColorNameInput(event: ChangeEvent<HTMLInputElement>){
        setColorName(event.target.value);;
    } 

    function handleColorInput(event: React.ChangeEvent<HTMLInputElement>){
        const colorHexValue = event.target.value;
        const rgbValue = hexToRgb(colorHexValue);

        setCurrentColorValue({hex: colorHexValue, rgb: rgbValue});
    }

    return(
        <div className={`colorEditor ${themeName}`}>
            <b className="text title">
                <span>{mode === "create" ? "Create" : "Edit"} </span>
                <br />
            </b>
            <br />
            <input className="colorNameInput" type="text" value={colorName} placeholder="Color name" onChange={handleColorNameInput}/>
            <input className="colorInput" type="color" value={currentColorValue.hex}  onChange={handleColorInput}  />

            <GoToLinkButton path={`/tables/${stringToUrl(tableName)}`}>Cancel</GoToLinkButton>

            {
                mode === "create" ? 
                <button className="addColorToTableButton" onClick={() => handleAddColorToTable({ tableName, colorName, rgbValue: currentColorValue.rgb })} >Create</button>
                :
                <button className="saveColorChangesButton" onClick={() => handleColorEdit({ tableName, oldColorName, colorName, rgbValue: currentColorValue.rgb })} >Save</button>
            }
        </div>
    );

}

export default ColorEditor;