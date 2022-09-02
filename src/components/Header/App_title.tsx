import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../typescript/types";

function AppTitle({ titleText } : {titleText: string}):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <Link className={`appTitle ${themeName}`} to="/">
             <h2>{titleText}</h2>
        </Link>
    );  
}

export default AppTitle;