import { SortByProps } from "../../../typescript/types";

function SortBy({ tableSortCriteria, handleTableSortCriteriaChnage } : SortByProps):JSX.Element{
    return(
        <select>
            <optgroup>
                <option value="date">Name</option>
                <option value="name">Date</option>
            </optgroup>
        </select>
    );
};

export default SortBy;