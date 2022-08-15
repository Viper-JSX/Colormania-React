import TableClass from "../classes/Table";

export type LayoutProps = HeaderProps;


//-----------------Header-----------------
export type HeaderProps = {
    appTitle?: string;
    tableSearchTerm?: string;
    tableSortCriteria?: string;

    handleColorModeChange?: () => void;
    handleTableSortCriteriaChange?: () => void;
    handleTableSearch?: () => void;
};

export type FilterToolsProps = {
    tableSearchTerm?: HeaderProps['tableSearchTerm'];
    tableSortCriteria?: HeaderProps['tableSortCriteria'];

    handleColorModeChange: HeaderProps['handleColorModeChange'];
    handleTableSortCriteriaChange: HeaderProps['handleTableSortCriteriaChange'];
    handleTableSearch: HeaderProps['handleTableSearch'];
};

export type ColorModeSwitchProps = { handleColorModeChange: HeaderProps['handleColorModeChange']; }

export type SortByProps = { tableSortCriteria?: HeaderProps['tableSortCriteria']; handleTableSortCriteriaChnage: HeaderProps['handleTableSortCriteriaChange'] };

export type SearchProps = { tableSearchTerm?: HeaderProps['tableSearchTerm']; handleTableSearch: HeaderProps["handleTableSearch"]; }


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