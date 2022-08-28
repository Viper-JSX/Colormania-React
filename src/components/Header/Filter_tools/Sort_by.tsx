import { useSelector } from "react-redux";

import { SortByProps } from "../../../typescript/types";

function SortBy({ tablesSortCriteria, handleTablesSortCriteriaChnage } : SortByProps):JSX.Element{
    const sortBy = useSelector((state : any) => state.tablesFilter.sortBy);
    const themeName = useSelector((state:any) => state.theme.themeName);

    return(
        <select className={`sortBy ${themeName}`} value={tablesSortCriteria} onChange={handleTablesSortCriteriaChnage}>
            <optgroup>
                <option value="name">Name</option>
                <option value="date">Date</option>
            </optgroup>
        </select>
    );
};

export default SortBy;