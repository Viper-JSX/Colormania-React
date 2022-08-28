import { useSelector } from "react-redux";

import { FilterToolsProps } from "../../../typescript/types";
import TableSearch from "./Table_search";
import SortBy from "./Sort_by";

function FilterTools({ tablesSearchTerm, tablesSortCriteria, handleTablesSortCriteriaChange, handleTablesSearch } : FilterToolsProps):JSX.Element{
    const themeName = useSelector((state:any) => state.theme.themeName);

    return(
        <div className={`filterTools ${themeName}`}>
            <TableSearch tablesSearchTerm={tablesSearchTerm} handleTablesSearch={handleTablesSearch} />
            <br />
            <SortBy tablesSortCriteria={tablesSortCriteria} handleTablesSortCriteriaChnage={handleTablesSortCriteriaChange} />
        </div>
    );
}

export default FilterTools;