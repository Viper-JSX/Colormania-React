import { FilterToolsProps } from "../../../typescript/types";
import Search from "./Search";
import SortBy from "./Sort_by";

function FilterTools({ tablesSearchTerm, tablesSortCriteria, handleTablesSortCriteriaChange, handleTablesSearch } : FilterToolsProps):JSX.Element{
    return(
        <div className="FilterTools">
            <SortBy tablesSortCriteria={tablesSortCriteria} handleTablesSortCriteriaChnage={handleTablesSortCriteriaChange} />
            <Search tablesSearchTerm={tablesSearchTerm} handleTablesSearch={handleTablesSearch} />
        </div>
    );
}

export default FilterTools;