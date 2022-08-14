import { RGBValue } from "../typescript/types";
import Color from "./Color";

class Table{
    name: string;
    date: Date;
    colors: Color[] = []

    constructor(name: string, creationDate: Date){
        this.name = name;
        this.date = creationDate;
        
    }

    edit( oldTableName?: string, newTableName?: string ):void{
        
    }

    addColor(color: Color):void{
        this.colors.push(color);
    }

    editColor(oldColorName: string, colorName: string, rgbValue: RGBValue):void{

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