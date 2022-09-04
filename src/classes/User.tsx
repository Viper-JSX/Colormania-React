import { RGBValue } from "../typescript/types";
import initialColorTables from "../various_things/initial_color_tables";
import ColorClass from "./Color";
import Table from "./Table";

class User{
    nickname: string;
    login: string;
    password: string;
    authorized: boolean; //If user has account then login and password are set, if user is in guest mode, then login and password are set to "";
    joinDate: Date;
    tables: Table[];

    constructor(nickname: string, login: string, password: string){
        this.nickname = nickname;
        this.login = login;
        this.password = password;
        this.authorized = login && password ? true : false;
        this.joinDate = new Date();
        this.tables = initialColorTables;
    }

    createTable(tableName: string):void{
        this.tables.push(new Table(tableName));
    }

    deleteTable(tableName: string):void{
        for(let i = 0; i < this.tables.length; i++){
            if(tableName === this.tables[i].name){
                this.tables.splice(i, 1);
                return;
            }
        }
    }

    addColorToTable(tableName: string, color: ColorClass){
        for(let i = 0; i < this.tables.length; i++){
            if(this.tables[i].name === tableName){
                this.tables[i].addColor(color);
                return;
            }
        }
    }

    editColorInsideTable(tableName: string, oldColorName: string, colorName: string, rgbValue: RGBValue){
        for(let i = 0; i < this.tables.length; i++){
            if(this.tables[i].name === tableName){
                this.tables[i].editColor(oldColorName, colorName, rgbValue);
                return;
            }
        } 
    }

    deleteColorFromTable(tableName: string, colorName: string){
        for(let i = 0; i < this.tables.length; i++){
            if(this.tables[i].name === tableName){
                this.tables[i].deleteColor((colorName));
                return;
            }
        }
    }

}


export default User;