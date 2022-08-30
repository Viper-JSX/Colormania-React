import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OpenTableCreator():JSX.Element{
    const themeName = useSelector((state:any) => state.theme.themeName);
    
    return(
        <Link className={`openTableCreator ${themeName}`} to={`create-table`}>+</Link>
    );
}

export default OpenTableCreator;