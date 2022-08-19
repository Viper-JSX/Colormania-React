import { ConvertedColorValue, HSLValue, RGBValue } from "../../../typescript/types";

function ColorValueInfo({ colorValue } : {colorValue: ConvertedColorValue}):JSX.Element{
    const colorValueKeys = Object.keys(colorValue);

    const valueIsRgbTypeGuard = (value: ConvertedColorValue):value is RGBValue => true;
    const valueIsHslTypeGuard = (value: ConvertedColorValue):value is HSLValue => true;

    const valueIsRgb = valueIsRgbTypeGuard(colorValue); //If value is of type RGBValue then it returns true. It's a type guard. The object passed is { r: 10 g: 10 , b: 10 }
    const valueIsHsl = valueIsHslTypeGuard(colorValue); //so it returns true. Here ConvertedColorValue is RGBValue | HSLValue

    if(valueIsRgb){
        return(
            <div>
                <span>R: {colorValue.r}</span>
                <span>G: {colorValue.g}</span>
                <span>B: {colorValue.b}</span>
            </div>  
        );
    }

    else if(valueIsHsl){
        return(
            <div>
                <span>H: {colorValue.h}</span>
                <span>S: {colorValue.s}</span>
                <span>L: {colorValue.l}</span>
            </div>
        );
    }
    return (<></>);

};

export default ColorValueInfo;