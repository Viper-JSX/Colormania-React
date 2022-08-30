import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AppTitle({ titleText } : {titleText: string}):JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <Link className={`appTitle ${themeName}`} to="/">
             <h2>{titleText}</h2>
        </Link>
    );  
}

export default AppTitle;