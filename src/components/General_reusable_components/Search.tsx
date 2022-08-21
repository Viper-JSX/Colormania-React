import { SearchProps } from "../../typescript/types";

function Search({ handler, value }: SearchProps):JSX.Element{
    return(
        <input value={value} onChange={handler} />
    );
}

export default Search;