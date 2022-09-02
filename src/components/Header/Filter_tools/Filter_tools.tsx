import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppState, FilterToolsProps } from "../../../typescript/types";
import TableSearch from "./Table_search";
import SortBy from "./Sort_by";
import GoToLinkButton from "../../General_reusable_components/Go_to_link_button";


function FilterTools({ handleTablesSortCriteriaChange, handleTablesSearch } : FilterToolsProps):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <div className={`filterTools ${themeName}`}>
            <b className="text">
                <span>Tables</span>
                <br />
                <GoToLinkButton path="/">{"<-"}Home page</GoToLinkButton>
            </b>
            
            <div className={`tablesSearchAndFilter`}>
                <TableSearch handleTablesSearch={handleTablesSearch} />
                <SortBy  handleTablesSortCriteriaChnage={handleTablesSortCriteriaChange} />
            </div>
        </div>
    );
}

export default FilterTools;