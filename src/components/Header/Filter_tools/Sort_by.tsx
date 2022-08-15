import { useSelector } from "react-redux";

import { SortByProps } from "../../../typescript/types";

function SortBy({ tablesSortCriteria, handleTablesSortCriteriaChnage } : SortByProps):JSX.Element{
    const sortBy = useSelector((state : any) => state.tablesFilter.sortBy);

    return(
        <select value={tablesSortCriteria} onChange={handleTablesSortCriteriaChnage}>
            <optgroup>
                <option value="date">Name</option>
                <option value="name">Date</option>
            </optgroup>
        </select>
    );
};

export default SortBy;