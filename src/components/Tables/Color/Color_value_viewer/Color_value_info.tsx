import { ColorModels, ColorValueInfoProps, ConvertedColorValue, HEXValue, HSLValue, RGBValue } from "../../../../typescript/types";

function ColorValueInfo({ currentColorModel, currentColorValue } : ColorValueInfoProps):JSX.Element{
    const colorValueKeys = Object.keys(currentColorValue);

    const valueIsRgbTypeGuard = (value: ConvertedColorValue):value is RGBValue => {
        const keysString = Object.keys(value).join("" as ColorModels);

        return keysString === "rgb";
    };

    const valueIsHslTypeGuard = (value: ConvertedColorValue):value is HSLValue => {
        const keysString = Object.keys(value).join("" as ColorModels);
        return keysString === "hsl";
    };

    const valueIsHexTypeGuard = (value: ConvertedColorValue) => {
        const keysString = Object.keys(value).join("" as ColorModels);
        
        return keysString === "hex";
    }

    const valueIsRgb = valueIsRgbTypeGuard(currentColorValue); //If value is of type RGBValue then it returns true. It's a type guard. The object passed is { r: 10 g: 10 , b: 10 }
    const valueIsHsl = valueIsHslTypeGuard(currentColorValue); //so it returns true. Here ConvertedColorValue is RGBValue | HSLValue
    const valueIsHex = valueIsHexTypeGuard(currentColorValue);

    if(valueIsRgb){
        return(
            <div>
                <span>R: {currentColorValue.r}</span>
                <span>G: {currentColorValue.g}</span>
                <span>B: {currentColorValue.b}</span>
            </div>  
        );
    }

    else if(valueIsHsl){
        return(
            <div>
                <span>H: {currentColorValue.h}</span>
                <span>S: {currentColorValue.s}</span>
                <span>L: {currentColorValue.l}</span>
            </div>
        );
    }

    else if(valueIsHex){
        //console.log("value is hex: ", currentColorValue)
        return(
            <div>
                <span>{currentColorValue.hex}</span>
            </div>
        );
    }

    return (   
        <div>
            <span>Some error happended</span>
        </div>  
    );

};

export default ColorValueInfo;