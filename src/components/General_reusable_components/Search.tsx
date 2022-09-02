import { useSelector } from "react-redux";
import { AppState, SearchProps } from "../../typescript/types";

function Search({ value, placeholder, handler }: SearchProps):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <input className={`search${themeName}`} value={value} placeholder={placeholder} onChange={handler} />
    );
}

export default Search;