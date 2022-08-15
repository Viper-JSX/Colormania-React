import initialColorTables from "../various_things/initial_color_tables";
import Table from "./Table";

class User{
    nickname: string;
    login: string;
    password: string;
    authorized: boolean; //If user has account then login and password are set, if user is in guest mode, then login and password are set to "";
    tables: Table[];
    
    constructor(nickname: string, login: string, password: string){
        this.nickname = nickname;
        this.login = login;
        this.password = password;
        this.tables = initialColorTables;
        this.authorized = login && password ? true : false
    }

    createTable(tableName: string):void{

    }

    deleteTable(tableName: string):void{
        for(let i = 0; i < this.tables.length; i++){
            if(tableName === this.tables[i].name){
                this.tables.splice(i, 1);
                return;
            }
        }
    }

}


export default User;