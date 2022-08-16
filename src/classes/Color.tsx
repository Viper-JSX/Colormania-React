import { ConvertedColorValue, RGBValue } from "../typescript/types";

class Color{
    name: string;
    creationDate: Date;
    rgbValue: RGBValue;
    currentConvertedValue:  ConvertedColorValue;

    constructor(name: string, rgbValue: RGBValue){
        this.name = name;
        this.creationDate = new Date();
        this.rgbValue = rgbValue;
        this.currentConvertedValue = rgbValue;
    }

    edit(color: Color):void{
        this.name = color.name;
        this.rgbValue = color.rgbValue;
    }
}

export default Color;