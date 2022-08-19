import React, { useState } from "react";
import { ColorEditorProps, RGBValue } from "../../typescript/types";
import iro from "@jaames/iro";

function ColorEditor({ mode } : ColorEditorProps):JSX.Element{
    //console.log(mode)
    
    const [ currentColorValue, setCurrentColorValue ] = useState<{ hex: string, rgb: RGBValue }>({
        hex: "#ffffff", 
        rgb: {r: 255, g: 255, b: 255}
    });

    function handleColorInput(event: React.ChangeEvent<HTMLInputElement>){
        setCurrentColorValue({hex: event.target.value, rgb: { r: 255, g: 255, b: 255 }});
    
        console.log(event.target.value);
    }

    return(
        <div className="colorEditor">
            <input className="colorNameInput" type="text"/>
            <input className="rgbInput" type="color" value={currentColorValue.hex}  onChange={handleColorInput}  />
            <button className="addColorTotable">Add</button>
        </div>
    );
}

export default ColorEditor;