import { FilterToolsProps } from "../../../typescript/types";
import ColorModeSwitch from "./Color_mode_switch";
import Search from "./Search";
import SortBy from "./Sort_by";

function FilterTools({ tablesSearchTerm, tablesSortCriteria, handleColorModeChange, handleTablesSortCriteriaChange, handleTablesSearch } : FilterToolsProps):JSX.Element{
    return(
        <div className="FilterTools">
            <ColorModeSwitch handleColorModeChange={handleColorModeChange} />
            <SortBy tablesSortCriteria={tablesSortCriteria} handleTablesSortCriteriaChnage={handleTablesSortCriteriaChange} />
            <Search tablesSearchTerm={tablesSearchTerm} handleTablesSearch={handleTablesSearch} />
        </div>
    );
}

export default FilterTools;