import iro from "@jaames/iro";

import React, { ChangeEvent, useState } from "react";
import { ColorEditorProps, RGBValue } from "../../typescript/types";
import { hexToRgb } from "../../api/hex_to_rgb";
import { NavLink, useLocation } from "react-router-dom";

function ColorEditor({ mode, handleAddColorToTable } : ColorEditorProps):JSX.Element{
    const location = useLocation();
    const tableName:unknown = location.state.tableName;
    console.log(location);

    const [ colorName, setColorName ] = useState<string>("");
    const [ currentColorValue, setCurrentColorValue ] = useState(() => {
        if(mode === "create"){
            return {
                hex: "#ffffff", 
                rgb: {r: 255, g: 255, b: 255}
            };
        }
    
        return {
            hex: "#000000",
            rgb: {r: 255, g: 255, b: 255}
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
                <button className="addColorToTable" onClick={() => handleAddColorToTable({ tableName, colorName, rgbValue: currentColorValue.rgb })} >Add</button>
                :
                <button className="addColorToTable" onClick={() => handleAddColorToTable({ tableName, colorName, rgbValue: currentColorValue.rgb })} >Add</button>
            }
            <NavLink to="/">Main</NavLink>
        </div>
    );

}

export default ColorEditor;