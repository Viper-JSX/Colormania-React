import React from "react";
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
export type ActionType = {
    type: string;
    payload?: any;
}

export type TableFilterState = {
    colorMode: "rgb" | "hsl";
    sortBy: "name" | "date";
    searchTerm: string;
    filteredTables: TableClass[];
}

export type ChangeColorModePayload = "rgb" | "hsl";
export type ChangeTablessortCriteriaPayload = "name" | "date";