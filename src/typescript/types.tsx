import React from "react";
import ColorClass from "../classes/Color";
import TableClass from "../classes/Table";
import UserClass from "../classes/User";





/*----------------App_state--------------------*/

export type UserState = { user: UserClass, forceUpdate: any };
export type TableFilterState = {
    sortBy: "name" | "date";
    searchTerm: string;
}
export type ThemeState = { themeName: AvaliableThemes };
export type MessageState = { messageText: string };
export type AppState = {user: UserState, tablesFilter: TableFilterState, theme: ThemeState, message: MessageState };


export type LayoutProps = { tablesToRender: TableClass[] } & 
    TablesProps &
    HeaderProps & 
    ColorEditorProps & 
    {handleColorDelete:  HandleColorDeleteFunc} & 
    { handleTableCreate: TableCreatorSubtypeProps["handleTableCreate"], handleTableEdit: TableEditorSubtypeProps["handleTableEdit"] } &
    DeleteTableButtonProps &
    UserProfileProps &
    LoginProps &
    RegisterProps &
    ThemeSwitchProps;






//-----------------Header-----------------//

export type HeaderProps = {
    appTitle?: string;
} & ThemeSwitchProps;

export type FilterToolsProps = {
    handleTablesSortCriteriaChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleTablesSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SortByProps = { handleTablesSortCriteriaChnage: FilterToolsProps['handleTablesSortCriteriaChange'] };
export type TableSearchProps = { handleTablesSearch: FilterToolsProps["handleTablesSearch"]; }
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

export type ConvertedColorValue = RGBValue | HSLValue | HEXValue;
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





//--------------------Redux--------------------------//
//---Tables filter---//

export type ActionType = {
    type: string;
    payload?: any;
}

export type ChangeTablesSortCriteriaPayload = { sortCriteria: "name" | "date" };
export type ChangeTablesSearcTermhPayload = { searchTerm: string };

export type FilterTablesParams = { tables: TableClass[], filterOptions: TableFilterState, order?: "small-big" | "big-small" };


//---User---//

export type UserLoginPayload = { login: string,  password: string };
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
export type HandleTableEditParams = { oldTableName: string, tableName: string};
type HandleColorDeleteFunc = ({ tableName, colorName } : TableNameColorName) => void;





//--------------------------Table---------------------------//
export type TablesProps = {
    tablesToRender: TableClass[], 
    
    handleColorDelete: HandleColorDeleteFunc, 
} & FilterToolsProps & DeleteTableButtonProps;

export type TableProps = { table: TableClass, handleColorDelete: HandleColorDeleteFunc };
export type TableOpenerProps = {table: TableClass, index: number} & DeleteTableButtonProps;
export type TableToolsProps = { colorSearchTerm: string, handleSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void }
export type TableColorsProps = { tableName: string, table: TableClass, colorsToRender: ColorClass[], handleColorDelete: HandleColorDeleteFunc };

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

export type DeleteTableButtonProps = {handleTableDelete: ({ tableName } : { tableName: string }) => void}





//----------------------------Color--------------------------//

type TableNameColorName = { tableName: string, colorName: string };

export type ColorModels = "rgb" | "hsl" | "hex";
export type ColorProps = { tableName?: string, color: ColorClass, index: number, handleColorDelete?: HandleColorDeleteFunc };
export type ColorValueViewerProps = { colorRgbValue: RGBValue };
export type ColorValueModelSwitchProps = { currentColorModel: ColorModels, handleColorModelChange : (colorModel : ColorModels) => void  }
export type ColorValueInfoProps = { currentColorModel: ColorModels, currentColorValue: ConvertedColorValue };

export type ColorInfoLabelProps = { tableName: string, color: ColorClass, handleColorDelete: HandleColorDeleteFunc };
export type DeleteColorButtonProps = { tableName: string, colorName: string, handleColorDelete: HandleColorDeleteFunc }





//-----------------------------User------------------------------------//

export type UserProfileProps = { handleLogout: () => void };

export type AuthorizationFormProps = LoginProps & RegisterProps;
export type LoginData = { event: React.MouseEvent, login: string, password: string};
export type RegisterData = { nickname: string } & LoginData;
export type LoginProps = { handleLogin: ({ event, login, password } : LoginData) => void };
export type RegisterProps = { handleRegister: ({ event, nickname, login, password } : RegisterData) => void };






//------------------------Theme-------------------------------//

export type AvaliableThemes = "light" | "dark";
export type ChangeThemePayload = { themeName: AvaliableThemes };
export type ThemeSwitchProps = { handleThemeChange: ( event: React.ChangeEvent<HTMLSelectElement> ) => void };