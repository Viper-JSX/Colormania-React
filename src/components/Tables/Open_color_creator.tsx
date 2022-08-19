import { NavLink } from "react-router-dom";

function OpenColorCreator({ tableName } : { tableName: string}):JSX.Element{
    return(
        <NavLink to={"add-color"} state={{tableName: tableName}}>Add color</NavLink>
    );
}

export default OpenColorCreator;