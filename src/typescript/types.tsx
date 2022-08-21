import React from "react";
import ColorClass from "../classes/Color";
import TableClass from "../classes/Table";
import UserClass from "../classes/User";


export type LayoutProps = { tablesToRender: TableClass[] } & HeaderProps & ColorEditorProps;


//-----------------Header-----------------
export type HeaderProps = {
    appTitle?: string;
    tablesSearchTerm?: string;
    tablesSortCriteria?: string;

    handleTablesSortCriteriaChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleTablesSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FilterToolsProps = {
    tablesSearchTerm?: HeaderProps['tablesSearchTerm'];
    tablesSortCriteria?: HeaderProps['tablesSortCriteria'];

    handleTablesSortCriteriaChange: HeaderProps['handleTablesSortCriteriaChange'];
    handleTablesSearch: HeaderProps['handleTablesSearch'];
};

export type SortByProps = { tablesSortCriteria?: HeaderProps['tablesSortCriteria']; handleTablesSortCriteriaChnage: HeaderProps['handleTablesSortCriteriaChange'] };

export type SearchProps = { tablesSearchTerm?: HeaderProps['tablesSearchTerm']; handleTablesSearch: HeaderProps["handleTablesSearch"]; }


//-----------------------Color_editor-------------------------------//
export type ColorEditorProps = { 
    mode: "create" | "edit";
    handleAddColorToTable: (params: AddColorToTableParams) => void;
    handleColorEdit: (prarms: EditColorParams) => void;
};

export type OpenColorEditorProps = { tableName: string, colorToEdit: { oldColorName: string, rgbValue: RGBValue } };


//-------------------------User_class-------------------------------//




//--------------------------Table_class----------------------------//



//-------------Color_class----------------------------//

export type HEXValue = { hex: string };//"#" + string

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

export type ConvertedColorValue = RGBValue | HSLValue | HEXValue;

//export type ColorEditParams = { oldColorName: string, name: string, rgbValue: RGBValue};





//--------------------Redux--------------------------//
//Tables filter//
export type ActionType = {
    type: string;
    payload?: any;
}

export type ChangeTablesSortCriteriaPayload = { sortCriteria: "name" | "date" };
export type ChangeTablesSearcTermhPayload = { searchTerm: string };

export type TableFilterState = {
    sortBy: "name" | "date";
    searchTerm: string;
}

export type FilterTablesParams = { tables: TableClass[], filterOptions: TableFilterState, order?: "small-big" | "big-small" };

//User//
export type UserState = { user: UserClass, forceUpdate: any };

export type UserLoginPayload = { login: string,  password: string, /*tablesToFilter: TableClass[]*/ };
export type UserRegisterPayload =  { nickname: string } & UserLoginPayload;

export type CreateTablePayload = { tableName: string }; //tablesToEdit must be passed each time to run filter on new list of tables so that filtered tables are up to date
export type EditTablePayload = { oldTableName: string, tableName: string }; //The same ^
export type DeleteTablePayload =  CreateTablePayload;

export type AddColorToTablePayload = { tableName: string, color: ColorClass};
export type EditColorInsideTablePayload = { tableName: string, oldColorName: string, colorName: string, rgbValue: RGBValue};
export type DeleteColorFromTablePayload = { tableName: string, colorName: string};



//---------------------Handlers--------------------------//
export type AddColorToTableParams = { tableName: string, colorName: string, rgbValue: RGBValue };
export type EditColorParams = AddColorToTableParams & { oldColorName: string };


//----------------------------Color--------------------------//
export type ColorModels = "rgb" | "hsl" | "hex";
export type ColorValueViewerProps = { colorRgbValue: RGBValue };
export type ColorValueModelSwitchProps = { handleColorModelChange : (colorModel : ColorModels) => void  }
export type ColorValueInfoProps = { currentColorModel: ColorModels, currentColorValue: ConvertedColorValue };