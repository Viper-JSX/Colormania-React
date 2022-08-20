import iro from "@jaames/iro";

import React, { ChangeEvent, useState } from "react";
import { ColorEditorProps, OpenColorEditorProps, RGBValue } from "../../typescript/types";
import { hexToRgb } from "../../api/hex_to_rgb";
import { NavLink, useLocation } from "react-router-dom";

function ColorEditor({ mode, handleAddColorToTable, handleColorEdit} : ColorEditorProps):JSX.Element{
    const location  = useLocation();
    const state = location.state;
    console.log(state);
    const tableName:string = state.tableName;
    const colorToEdit:OpenColorEditorProps["colorToEdit"] = state.colorToEdit;
    const oldColorName: string = colorToEdit.oldColorName;

    const [ colorName, setColorName ] = useState<string>(() => oldColorName ? oldColorName : "");
    const [ currentColorValue, setCurrentColorValue ] = useState(() => {
        if(mode === "create"){
            return {
                hex: "#ffffff", 
                rgb: {r: 255, g: 255, b: 255}
            };
        }
    
        return {
            hex: "#000000",
            rgb: colorToEdit.rgbValue//{r: 255, g: 255, b: 255}
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
        <div className="colorEditor">
            <input className="colorNameInput" type="text" value={colorName} onChange={handleColorNameInput}/>
            <input className="rgbInput" type="color" value={currentColorValue.hex}  onChange={handleColorInput}  />

            {
                mode === "create" ? 
                <button className="addColorToTable" onClick={() => handleAddColorToTable({ tableName: "welcome table", colorName, rgbValue: currentColorValue.rgb })} >Add</button>
                :
                <button className="addColorToTable" onClick={() => handleColorEdit({ tableName: "welcome table", oldColorName:"dark", colorName, rgbValue: currentColorValue.rgb })} >Add</button>
            }
            <NavLink to="/">Main</NavLink>
        </div>
    );

}

export default ColorEditor;