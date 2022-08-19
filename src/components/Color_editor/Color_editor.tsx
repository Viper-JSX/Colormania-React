import iro from "@jaames/iro";

import React, { ChangeEvent, useState } from "react";
import { ColorEditorProps, RGBValue } from "../../typescript/types";
import { hexToRgb } from "../../api/hex_to_rgb";
import { NavLink } from "react-router-dom";

function ColorEditor({ mode, handleAddColorToTable } : ColorEditorProps):JSX.Element{
    const [ colorName, setColorName ] = useState<string>("");
    const [ currentColorValue, setCurrentColorValue ] = useState<{ hex: string, rgb: RGBValue }>({
        hex: "#ffffff", 
        rgb: {r: 255, g: 255, b: 255}
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
            <button className="addColorToTable" onClick={() => handleAddColorToTable({ tableName: "Welcome table", colorName, rgbValue: currentColorValue.rgb })} >Add</button>
            {/*<NavLink to="/">Main</NavLink>*/}
        </div>
    );
}

export default ColorEditor;