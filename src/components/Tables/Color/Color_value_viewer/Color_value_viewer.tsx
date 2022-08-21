
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

        switch(colorModel){
            case "rgb":{
                setCurrentColorValue(colorRgbValue);
                break;
            }
            case "hsl":{
                const convertedToHsl = iro.Color.hsvToHsl(iro.Color.rgbToHsv(colorRgbValue));
                convertedToHsl.h = Math.floor(convertedToHsl.h);
                convertedToHsl.s = Math.floor(convertedToHsl.s);
                convertedToHsl.l = Math.floor(convertedToHsl.l);

                setCurrentColorValue(convertedToHsl);
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