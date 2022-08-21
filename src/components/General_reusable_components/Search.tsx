import { SearchProps } from "../../typescript/types";

function Search({ value, placeholder, handler }: SearchProps):JSX.Element{
    return(
        <input value={value} placeholder={placeholder} onChange={handler} />
    );
}

export default Search;