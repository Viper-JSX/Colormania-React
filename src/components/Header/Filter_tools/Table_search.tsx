import { useSelector } from "react-redux";
import { TableSearchProps } from "../../../typescript/types";

function TableSearch({ tablesSearchTerm, handleTablesSearch } : TableSearchProps):JSX.Element{
    const searchTerm = useSelector((state : any) => state.tablesFilter.searchTerm);

    return(
        <input type="text" value={tablesSearchTerm} onChange={handleTablesSearch} />
    );
}

export default TableSearch;