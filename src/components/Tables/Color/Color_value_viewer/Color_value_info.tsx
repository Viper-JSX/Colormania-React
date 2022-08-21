import { ColorModels, ColorValueInfoProps, ConvertedColorValue, HSLValue, RGBValue } from "../../../../typescript/types";

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

    const valueIsRgb = valueIsRgbTypeGuard(currentColorValue); //If value is of type RGBValue then it returns true. It's a type guard. The object passed is { r: 10 g: 10 , b: 10 }
    const valueIsHsl = valueIsHslTypeGuard(currentColorValue); //so it returns true. Here ConvertedColorValue is RGBValue | HSLValue

    console.log(currentColorValue, currentColorModel, "rgb: ", valueIsRgb, "hsl: ", valueIsHsl);
//    switch(currentColorModel){
//        case "rgb":{
//            console.log("rgb");
//            break;
//        }
//        case "hsl":{
//            console.log("hsl");
//            break;
//        }
//        default:{
//            return (<></>);
//        }
//    }
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

    return (<></>);

};

export default ColorValueInfo;