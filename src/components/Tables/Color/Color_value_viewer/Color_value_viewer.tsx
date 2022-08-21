import { useState } from "react";
import { ColorValueViewerProps } from "../../../../typescript/types";
import ColorValueInfo from "./Color_value_info";
import ColorValueModelSwitch from "./Color_value_model_switch";

function ColorValueViewer( { colorRgbValue } : ColorValueViewerProps ){

    const [ currentColorModel, setCurrentColorModel ] = useState("rgb");
    const [ currentColorValue, setCurrentColorValue ] = useState(colorRgbValue);


    function handleColorModelChange(colorModel : string):void{

    }

    return(
        <div className="colorValueViewer">
            <ColorValueModelSwitch handleColorModelChange={handleColorModelChange} />
            <ColorValueInfo currentColorModel={currentColorModel as "rgb" | "hsl"} currentColorValue={currentColorValue} />
        </div>
    );
}

export default ColorValueViewer;