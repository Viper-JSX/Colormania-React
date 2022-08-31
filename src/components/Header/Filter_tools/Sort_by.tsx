import { useSelector } from "react-redux";

import { SortByProps } from "../../../typescript/types";

function SortBy({ handleTablesSortCriteriaChnage } : SortByProps):JSX.Element{
    const [ themeName, sortBy ] = useSelector((state : any) => [ state.theme.themeName, state.tablesFilter.sortBy ]);

    return(
        <select className={`sortBy ${themeName}`} value={sortBy} onChange={handleTablesSortCriteriaChnage}>
            <optgroup>
                <option value="name" disabled selected>Sort by</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
            </optgroup>
        </select>
    );
};

export default SortBy;