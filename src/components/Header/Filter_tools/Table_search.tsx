import { useSelector } from "react-redux";
import { TableSearchProps } from "../../../typescript/types";

function TableSearch({ tablesSearchTerm, handleTablesSearch } : TableSearchProps):JSX.Element{
    const searchTerm = useSelector((state : any) => state.tablesFilter.searchTerm);
    const themeName = useSelector((state:any) => state.theme.themeName);

    return(
        <input className={`tableSearch ${themeName}`} type="text" value={tablesSearchTerm} onChange={handleTablesSearch} />
    );
}

export default TableSearch;