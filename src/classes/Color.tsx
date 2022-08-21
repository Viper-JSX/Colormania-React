import { RGBValue } from "../typescript/types";

class Color{
    name: string;
    creationDate: Date;
    rgbValue: RGBValue;

    constructor(name: string, rgbValue: RGBValue){
        this.name = name;
        this.creationDate = new Date();
        this.rgbValue = rgbValue;
    }

    edit(colorName: string, rgbValue: RGBValue):void{
        this.name = colorName;
        this.rgbValue = rgbValue;
    }
}

export default Color;