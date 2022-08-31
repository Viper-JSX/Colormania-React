import { useSelector } from "react-redux";
import { TableSearchProps } from "../../../typescript/types";

function TableSearch({ handleTablesSearch } : TableSearchProps):JSX.Element{
    const searchTerm = useSelector((state : any) => state.tablesFilter.searchTerm);
    const themeName = useSelector((state:any) => state.theme.themeName);

    return(
        <input className={`tableSearch ${themeName}`} type="text" value={searchTerm} placeholder="Search tables" onChange={handleTablesSearch} />
    );
}

export default TableSearch;