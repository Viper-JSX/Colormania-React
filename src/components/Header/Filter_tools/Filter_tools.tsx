import { FilterToolsProps } from "../../../typescript/types";
import ColorModeSwitch from "./Color_mode_switch";
import Search from "./Search";
import SortBy from "./Sort_by";

function FilterTools({ tableSearchTerm, tableSortCriteria, handleColorModeChange, handleTableSortCriteriaChange, handleTableSearch } : FilterToolsProps):JSX.Element{
    return(
        <div className="FilterTools">
            <ColorModeSwitch handleColorModeChange={handleColorModeChange} />
            <SortBy tableSortCriteria={tableSortCriteria} handleTableSortCriteriaChnage={handleTableSortCriteriaChange} />
            <Search tableSearchTerm={tableSearchTerm} handleTableSearch={handleTableSearch} />
        </div>
    );
}

export default FilterTools;