import { FilterToolsProps } from "../../../typescript/types";
import TableSearch from "./Table_search";
import SortBy from "./Sort_by";

function FilterTools({ tablesSearchTerm, tablesSortCriteria, handleTablesSortCriteriaChange, handleTablesSearch } : FilterToolsProps):JSX.Element{
    return(
        <div className="FilterTools">
            <SortBy tablesSortCriteria={tablesSortCriteria} handleTablesSortCriteriaChnage={handleTablesSortCriteriaChange} />
            <TableSearch tablesSearchTerm={tablesSearchTerm} handleTablesSearch={handleTablesSearch} />
        </div>
    );
}

export default FilterTools;