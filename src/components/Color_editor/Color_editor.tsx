import iro from "@jaames/iro";
import { useSelector } from "react-redux";

import React, { ChangeEvent, useState } from "react";
import { ColorEditorProps, OpenColorEditorProps, RGBValue } from "../../typescript/types";
import { hexToRgb } from "../../api/hex_to_rgb";
import { NavLink, useLocation } from "react-router-dom";
import { rgbToHex } from "../../api/rgb_to_hex";

function ColorEditor({ mode, handleAddColorToTable, handleColorEdit} : ColorEditorProps):JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

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
            <input className="colorNameInput" type="text" value={colorName} placeholder="Color name" onChange={handleColorNameInput}/>
            <input className="colorInput" type="color" value={currentColorValue.hex}  onChange={handleColorInput}  />

            {
                mode === "create" ? 
                <button className="addColorToTable" onClick={() => handleAddColorToTable({ tableName, colorName, rgbValue: currentColorValue.rgb })} >Add</button>
                :
                <button className="addColorToTable" onClick={() => handleColorEdit({ tableName, oldColorName, colorName, rgbValue: currentColorValue.rgb })} >Save</button>
            }
        </div>
    );

}

export default ColorEditor;