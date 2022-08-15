import { useSelector } from "react-redux";
import { SearchProps } from "../../../typescript/types";

function Search({ tablesSearchTerm, handleTablesSearch } : SearchProps):JSX.Element{
    const searchTerm = useSelector((state : any) => state.tablesFilter.searchTerm);

    return(
        <input type="text" value={searchTerm} />
    );
}

export default Search;