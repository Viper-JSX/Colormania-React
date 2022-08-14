import { ConvertedColorValue, RGBValue } from "../typescript/types";

class Color{
    name: string;
    creationDate: Date;
    rgbValue: RGBValue;
    currentConvertedValue:  ConvertedColorValue;

    constructor(name: string, creationDate: Date, rgbValue: RGBValue){
        this.name = name;
        this.creationDate = creationDate;
        this.rgbValue = rgbValue;
        this.currentConvertedValue = rgbValue;
    }

    edit(name: string, rgbValue : RGBValue):void{
        
    }
}

export default Color;