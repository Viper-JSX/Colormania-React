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
    tableSearchTerm: HeaderProps['tableSearchTerm'];
    tableSortCriteria: HeaderProps['tableSortCriteria'];

    handleColorModeChange: HeaderProps['handleColorModeChange'];
    handleTableSortCriteriaChange: HeaderProps['handleTableSortCriteriaChange'];
    handleTableSearch: HeaderProps['handleTableSearch'];
};

export type ColorModeSwitchProps = { handleColorModeChange: HeaderProps['handleColorModeChange']; }

export type SortByProps = { tableSortCriteria: HeaderProps['tableSortCriteria']; handleTableSortCriteriaChnage: HeaderProps['handleTableSortCriteriaChange'] };

export type SearchProps = { tableSearchTerm: HeaderProps['tableSearchTerm']; handleTableSearch: HeaderProps["handleTableSearch"]; }