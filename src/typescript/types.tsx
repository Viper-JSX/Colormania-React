import React from "react";
import ColorClass from "../classes/Color";
import TableClass from "../classes/Table";
import UserClass from "../classes/User";


export type LayoutProps = { tablesToRender: TableClass[] } & 
    HeaderProps & 
    ColorEditorProps & 
    {handleColorDelete:  HandleColorDeleteFunc} & 
    { handleTableCreate: TableCreatorSubtypeProps["handleTableCreate"], handleTableEdit: TableEditorSubtypeProps["handleTableEdit"] } &
    UserProfileProps &
    LoginProps &
    RegisterProps &
    ThemeSwitchProps;


//-----------------Header-----------------
export type HeaderProps = {
    appTitle?: string;
    tablesSearchTerm?: string;
    tablesSortCriteria?: string;

    handleTablesSortCriteriaChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleTablesSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & ThemeSwitchProps;

export type FilterToolsProps = {
    tablesSearchTerm?: HeaderProps['tablesSearchTerm'];
    tablesSortCriteria?: HeaderProps['tablesSortCriteria'];

    handleTablesSortCriteriaChange: HeaderProps['handleTablesSortCriteriaChange'];
    handleTablesSearch: HeaderProps['handleTablesSearch'];
};

export type SortByProps = { tablesSortCriteria?: HeaderProps['tablesSortCriteria']; handleTablesSortCriteriaChnage: HeaderProps['handleTablesSortCriteriaChange'] };


export type TableSearchProps = { tablesSearchTerm?: HeaderProps['tablesSearchTerm']; handleTablesSearch: HeaderProps["handleTablesSearch"]; }

export type SearchProps = { value: string, placeholder: string;  handler: (event: React.ChangeEvent<HTMLInputElement>) => void; }

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



//--------------------------Table---------------------------//
export type TablesProps = {
    tables: TableClass[], 
    
    handleColorDelete: HandleColorDeleteFunc, 
} & FilterToolsProps;

export type TableProps = { table: TableClass, handleColorDelete: HandleColorDeleteFunc };

export type TableEditorProps = { 
    mode: "create" | "edit"
} & (TableCreatorSubtypeProps | TableEditorSubtypeProps);

export type TableCreatorSubtypeProps = {
    handleTableCreate: ({ tableName } : { tableName: string }) => void;
}

export type TableEditorSubtypeProps = {
    oldTableName: string;
    handleTableEdit: ({ oldTableName, tableName} : HandleTableEditParams) => void,
}

export type HandleTableEditParams = { oldTableName: string, tableName: string};

//----------------------------Color--------------------------//
//export type ColorEditorLocationState = { tableName: string, oldColorName?: string, colorToEdit?: OpenColorEditorProps["colorToEdit"] };
type TableNameColorName = { tableName: string, colorName: string };
type HandleColorDeleteFunc = ({ tableName, colorName } : TableNameColorName) => void;

export type ColorModels = "rgb" | "hsl" | "hex";
//export type ColorProps = { tableName: string, color: ColorClass, handleColorDelete: HandleColorDeleteFunc } 
export type ColorProps = { tableName?: string, color: ColorClass, handleColorDelete?: HandleColorDeleteFunc };
export type ColorValueViewerProps = { colorRgbValue: RGBValue };
export type ColorValueModelSwitchProps = { currentColorModel: ColorModels, handleColorModelChange : (colorModel : ColorModels) => void  }
export type ColorValueInfoProps = { currentColorModel: ColorModels, currentColorValue: ConvertedColorValue };

export type ColorInfoLabelProps = { tableName: string, color: ColorClass, handleColorDelete: HandleColorDeleteFunc };

export type DeleteColorButtonProps = { tableName: string, colorName: string, handleColorDelete: HandleColorDeleteFunc }




//-----------------------------User------------------------------------//
export type UserProfileProps = { handleLogout: () => void };

export type LoginData = { event: React.MouseEvent, login: string, password: string};
export type RegisterData = { nickname: string } & LoginData;

export type AuthorizationFormProps = LoginProps & RegisterProps;
export type LoginProps = { handleLogin: ({ event, login, password } : LoginData) => void };
export type RegisterProps = { handleRegister: ({ event, nickname, login, password } : RegisterData) => void };


//------------------------Theme-------------------------------//
export type ChangeThemePayload = { themeName: "light" | "dark" };
export type ThemeSwitchProps = { handleThemeChange: ( event: React.ChangeEvent<HTMLSelectElement> ) => void };