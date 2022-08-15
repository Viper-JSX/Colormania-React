import { useSelector } from "react-redux";

import { SortByProps } from "../../../typescript/types";

function SortBy({ tableSortCriteria, handleTableSortCriteriaChnage } : SortByProps):JSX.Element{
    const sortBy = useSelector((state : any) => state.tablesFilter.sortBy);

    return(
        <select value={sortBy}>
            <optgroup>
                <option value="date">Name</option>
                <option value="name">Date</option>
            </optgroup>
        </select>
    );
};

export default SortBy;