import React from "react";
import ColorClass from "../classes/Color";
import TableClass from "../classes/Table";


export type LayoutProps = HeaderProps;


//-----------------Header-----------------
export type HeaderProps = {
    appTitle?: string;
    tablesSearchTerm?: string;
    tablesSortCriteria?: string;

    handleColorModeChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleTablesSortCriteriaChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleTablesSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FilterToolsProps = {
    tablesSearchTerm?: HeaderProps['tablesSearchTerm'];
    tablesSortCriteria?: HeaderProps['tablesSortCriteria'];

    handleColorModeChange: HeaderProps['handleColorModeChange'];
    handleTablesSortCriteriaChange: HeaderProps['handleTablesSortCriteriaChange'];
    handleTablesSearch: HeaderProps['handleTablesSearch'];
};

export type ColorModeSwitchProps = { handleColorModeChange: HeaderProps['handleColorModeChange']; }

export type SortByProps = { tablesSortCriteria?: HeaderProps['tablesSortCriteria']; handleTablesSortCriteriaChnage: HeaderProps['handleTablesSortCriteriaChange'] };

export type SearchProps = { tablesSearchTerm?: HeaderProps['tablesSearchTerm']; handleTablesSearch: HeaderProps["handleTablesSearch"]; }


//-------------------------User_class-------------------------------//




//--------------------------Table_class----------------------------//



//-------------Color_class----------------------------//

export type RGBValue = {
    r: number;
    g: number;
    b: number;
}

export type HSLValue = {
    h: number;
    s: number;
    l: number;
}

export type ConvertedColorValue = RGBValue | HSLValue;

//export type ColorEditParams = { oldColorName: string, name: string, rgbValue: RGBValue};





//--------------------Redux--------------------------//
//Tables filter//
export type ActionType = {
    type: string;
    payload?: any;
}

export type ChangeColorModePayload = { colorMode: "rgb" | "hsl", tablesToFilter: TableClass[] };
export type ChangeTablesSortCriteriaPayload = { sortCriteria: "name" | "date", tablesToFilter: TableClass[] };
export type ChangeTablesSearcTermhPayload = { searchTerm: string, tablesToFilter: TableClass[] };

export type TableFilterState = {
    colorMode: "rgb" | "hsl";
    sortBy: "name" | "date";
    searchTerm: string;
    filteredTables: TableClass[];
}

//User//
export type UserLogin = { login: string, password: string };
export type UserRegister =  { nickname: string } & UserLogin;

export type CreateTablePayload = { tableName: string, tablesToFilter: TableClass[] }; //tablesToEdit must be passed each time to run filter on new list of tables so that filtered tables are up to date
export type EditTablePayload = { oldTableName: string, tableName: string, tablesToFilter: TableClass[] }; //The same ^
export type DeleteTablePayload =  CreateTablePayload;

export type AddColorToTablePayload = { tableName: string, color: ColorClass, tablesToFilter: TableClass[]};
export type EditColorInsideTablePayload = { tableName: string, oldColorName: string, color: ColorClass, tablesToFilter: TableClass[]};
export type DeleteColorFromTablePayload = { tableName: string, colorName: string};