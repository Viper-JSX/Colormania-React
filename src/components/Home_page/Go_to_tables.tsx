import { NavLink } from "react-router-dom";

function GoToTables():JSX.Element{
    return(
        <NavLink to="/tables"><button>My tables</button></NavLink>
    );
}

export default GoToTables;