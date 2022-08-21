
import iro from "@jaames/iro";
import { useState } from "react";
import { ColorModels, ColorValueViewerProps, ConvertedColorValue } from "../../../../typescript/types";

import ColorValueInfo from "./Color_value_info";
import ColorValueModelSwitch from "./Color_value_model_switch";

function ColorValueViewer( { colorRgbValue } : ColorValueViewerProps ){

    const [ currentColorModel, setCurrentColorModel ] = useState<ColorModels>("rgb");
    const [ currentColorValue, setCurrentColorValue ] = useState<ConvertedColorValue>(colorRgbValue);


    function handleColorModelChange(colorModel : ColorModels):void{
        setCurrentColorModel(colorModel);

        switch(currentColorModel){
            case "rgb":{
                setCurrentColorValue(colorRgbValue);
                break;
            }
            case "hsl":{
                setCurrentColorValue(iro.Color.hsvToHsl(iro.Color.rgbToHsv(colorRgbValue)));
                //console.log(iro.Color.hsvToHsl(iro.Color.rgbToHsv(colorRgbValue)));
                break
            }
        }
    }

    return(
        <div className="colorValueViewer">
            <ColorValueModelSwitch handleColorModelChange={handleColorModelChange} />
            <ColorValueInfo currentColorModel={currentColorModel as ColorModels} currentColorValue={currentColorValue} />
        </div>
    );
}

export default ColorValueViewer;