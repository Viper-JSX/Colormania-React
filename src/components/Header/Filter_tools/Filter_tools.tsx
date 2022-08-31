import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FilterToolsProps } from "../../../typescript/types";
import TableSearch from "./Table_search";
import SortBy from "./Sort_by";


function FilterTools({ tablesSearchTerm, tablesSortCriteria, handleTablesSortCriteriaChange, handleTablesSearch } : FilterToolsProps):JSX.Element{
    const themeName = useSelector((state:any) => state.theme.themeName);

    return(
        <div className={`filterTools ${themeName}`}>
            <b className="text">
                <span>Tables</span>
                <br />
                <Link to="/">{"<-"}Home page</Link>
            </b>
            
            <div className={`tablesSearchAndFilter`}>
                <TableSearch tablesSearchTerm={tablesSearchTerm} handleTablesSearch={handleTablesSearch} />
                <SortBy tablesSortCriteria={tablesSortCriteria} handleTablesSortCriteriaChnage={handleTablesSortCriteriaChange} />
            </div>
        </div>
    );
}

export default FilterTools;