import { RGBValue } from "../typescript/types";
import ColorClass from "./Color";

class Table{
    name: string;
    creationDate: Date;
    colors: ColorClass[] = []

    constructor(name: string){
        this.name = name;
        this.creationDate = new Date();
    }

    edit( newTableName: string ):void{
        this.name = newTableName;
    }

    addColor(color: ColorClass):void{
        this.colors.push(color);
    }

    editColor(oldColorName: string, colorName: string, rgbValue: RGBValue):void{
        for(let i = 0; i < this.colors.length; i++){
            if(this.colors[i].name.toLowerCase() === oldColorName.toLowerCase()){
                this.colors[i].edit(colorName, rgbValue);
            }
        }
    }

    deleteColor(colorName: string):void{
        for(let i = 0; i < this.colors.length; i++){
            if(colorName === this.colors[i].name){
                this.colors.splice(i, 1);
                return;
            }
        }
    }

}

export default Table;